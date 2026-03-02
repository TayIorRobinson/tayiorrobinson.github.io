import { jsx, unsafeHTML } from "jsxxg";
import { MainNav } from "../components/mainNav.tsx";
import { PageTemplate } from "../components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "../components/window.tsx";

export default function ({content, title, page: { inputPath, date }, category, tags, ...rest}) {
    console.log(rest);
    return <PageTemplate title={title} stylesheets={['post']}>
        <MainNav />
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar caption={inputPath.split('/').pop() + " - Notepad"} iconSrc="/assets/icons/notepad.png" />}>
                <div class="prose">
                    <h1 id="postTitle">{title}</h1>
                    <p id="postMeta">
                        <time datetime={date.toISOString()}>{date.toLocaleDateString()}</time>
                        {" • "}
                        filed under {[category, ...(tags || [])].filter(a => a).join(", ")}
                    </p>
                    {unsafeHTML(content)}

                    
                </div>
            </Window>
        </div>
    </PageTemplate>
}