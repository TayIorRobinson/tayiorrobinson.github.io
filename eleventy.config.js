import browserslist from "browserslist";
import * as lightningcss from "lightningcss";
import { browserslistToTargets } from "lightningcss";
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