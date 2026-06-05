import { IdAttributePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import browserslist from "browserslist";
import * as lightningcss from "lightningcss";
import { browserslistToTargets } from "lightningcss";
import markdownItFootnote from "markdown-it-footnote";
import path from "path";
import * as sass from "sass";
import "xxgen/dist/import-tsx.js";

const targets = browserslistToTargets(browserslist('< 101%')) // literally everything



export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("./site");
	eleventyConfig.setLayoutsDirectory("_includes/layouts");
    eleventyConfig.addPassthroughCopy("./site/assets");
    eleventyConfig.addPassthroughCopy({'./site/assets/favicon.ico': 'favicon.ico'})
	eleventyConfig.addPassthroughCopy({'./site/well-known': '.well-known'});

	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.amendLibrary("md", (mdLib) => {
		var oldNormalizeLink = mdLib.normalizeLink;
		mdLib.normalizeLink = (url) => {
			try {
				const FAKE_ORIGIN = "https://fake.invalid";
				let parsed = new URL(url, FAKE_ORIGIN);
				if (parsed.origin == FAKE_ORIGIN) 
					url = parsed.pathname + parsed.search + parsed.hash;
				
			} catch(e) {}
			return oldNormalizeLink(url);
		}
		mdLib.use(markdownItFootnote)
	});

	const feedConfig = {
		collection: {
			name: 'notes',
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "Taylor's Notes",
			subtitle: "The various scribblings & notes of a fox on the internet",
			base: "https://eth0fox.net/notes",
			author: {
				name: "Taylor",
				email: "fox@boxfox.es",
			}
		}
	}

	eleventyConfig.addPlugin(feedPlugin, {
		type: 'rss',
		outputPath: '/notes/rss.xml',
		...feedConfig
	});
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'atom',
		outputPath: '/notes/atom.xml',
		...feedConfig
	});
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'json',
		outputPath: '/notes/feed.json',
		...feedConfig
	});

	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
		compile: () => async function (data) { 
            let content = await this.defaultRenderer(data) 
            if (!Buffer.isBuffer(content) && typeof content !== "string")
                content = String(content)
            return content;
        }
	});


    eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		useLayouts: false,
		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			if(parsed.name.startsWith("_")) {
				return;
			}

			let compiled = sass.compileString(inputContent, {
				loadPaths: [
					parsed.dir || ".",
					this.config.dir.includes,
				]
			});


			this.addDependencies(inputPath, compiled.loadedUrls);

            let { code } = lightningcss.transform({
                filename: parsed.name,
                code: Buffer.from(compiled.css),
                minify: true,
                sourceMap: false,
                targets
            })

			return () => code;
		},
	});


	eleventyConfig.addTemplateFormats(["11ty.jsx", "11ty.ts", "11ty.tsx", 'scss']);
}