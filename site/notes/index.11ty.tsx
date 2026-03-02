import { Fragment, jsx } from "jsxxg";
import { MainNav } from "../_includes/components/mainNav.tsx";
import { PageTemplate } from "../_includes/components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "../_includes/components/window.tsx";


export default function (data) {
    console.log(data.collections.notes[0])
    return <PageTemplate title="Taylor's Notes" data={data}>
        <MainNav />
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/icons/folder.png" caption="Taylor's Notes - File Explorer" />}>
                <div class="prose">
                    <p>
                        If I find something of note that I'd like to write down somewhere and share it with the world, here's where I'll chuck it.
                        <br/>
                        <b>Also available via: </b> <a href="rss.xml">RSS</a>, <a href="atom.xml">Atom</a> or <a href="feed.json">JSONFeed</a>
                    </p>
                    <table>
                        {data.collections.notes.toReversed().map(a => <tr>
                            <td><time datetime={a.date.toISOString()}>{a.date.toISOString().slice(0,10)}</time></td>
                            <td>{a.data.category}</td>
                            <td>
                                <a href={a.url}>{a.data.title}</a><br/>
                                <small>{a.data.tags.join(", ")}</small>
                            </td>
                        </tr>)}
                    </table>

                </div>
            </Window>
            
        </div>
    </PageTemplate>
}