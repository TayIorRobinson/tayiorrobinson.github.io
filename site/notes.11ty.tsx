import { Fragment, jsx, unsafeHTML } from "jsxxg";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";

interface Post {
    template:        any;
    rawInput:        string;
    groupNumber:     number;
    data:            {
        eleventy:   any;
        pkg:        any;
        layout:     "post";
        category:   "posts" | "scraps";
        tags:       string[];
        title:      string;
        page:       Page;
        footnotes?: Footnotes;
    };
    page:            Page;
    inputPath:       string;
    fileSlug:        string;
    filePathStem:    string;
    date:            Date;
    outputPath:      string;
    url:             string;
    templateContent: string;
    content:         string;
}
interface Page {
    inputPath:           string;
    fileSlug:            string;
    filePathStem:        string;
    outputFileExtension: string;
    templateSyntax:      string;
    date:                Date;
    rawInput:            string;
    url:                 string;
    outputPath:          string;
}

interface Footnotes {
    refs: Record<string,number>;
    list: { count: number; label: string; }[];
}




const Tags = ({ tags } : { tags: string[] }) =>
    <div class="tags">{
        tags.map((tag: string) => 
            tag == 'notes' ? null :
            <span class='tag'>{tag.replace(/-/g,' ')}</span>
        )
    }</div>

const formatDate = (date: Date) => date.toLocaleString('en-us', { month: 'short', day: 'numeric'});

export default function (data) {
    const groupedPosts = Object.groupBy(
        (data.collections.notes as Post[]).toReversed(),
        (post) => post.date?.getUTCFullYear()
    )


    return <PageTemplate title="Taylor's Notes" data={data} stylesheets={[ 'notes' ]}>{() => <>
        <MainNav />
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/img/icons/folder.png" caption="Taylor's Notes - File Explorer" />}>
                <div class="prose">
                    <p>
                        If I find something of note that I'd like to write down somewhere and share it with the world, here's where I'll chuck it.
                        <br/>
                        <b>Also available via: </b> <a href="rss.xml">RSS</a>, <a href="atom.xml">Atom</a> or <a href="feed.json">JSONFeed</a>
                    </p>
                    <div class="notes-list">
                        {Object.entries(groupedPosts).sort(([a], [b]) => b.localeCompare(a)).map(([year, _posts]) => {
                            const posts = _posts!.filter(a => a.data.category !== 'projects');
                            const scraps: Post[] = []//_posts!.filter(a => a.data.category == 'scraps');

                            return <>
                                <h2>{year}</h2>
                                {
                                    posts.length > 0 && <>
                                        <table class="listing">
                                            {posts!.map(a => <tr class="post">
                                                <td><time datetime={a.date.toISOString()}>{formatDate(a.date)}</time></td>
                                                <td>
                                                    <a href={a.url}>{a.data.title}</a>
                                                    <Tags tags={a.data.tags} />
                                                </td>
                                            </tr>)}
                                        </table>
                                    </>
                                }
                                {
                                    scraps.length > 0 && <>
                                        <p class="scraps-list">
                                            {scraps!.map((a,i) => <>
                                                {i !== 0 && unsafeHTML(", ")} 
                                                <span>
                                                    <time datetime={a.date.toISOString()}>{formatDate(a.date)}</time>
                                                    {" "}
                                                    <a href={a.url}>{a.data.title}</a>
                                                </span>
                                            </>)}
                                        </p>
                                    </>
                                }
                                
                            </>
                        })}
                    </div>

                </div>
            </Window>
            
        </div>
    </>}</PageTemplate>
}