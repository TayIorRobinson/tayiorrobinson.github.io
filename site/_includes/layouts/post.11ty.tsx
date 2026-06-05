import { Fragment, jsx, unsafeHTML } from "jsxxg";
import { Ambox } from "../components/ambox.tsx";
import { MainNav } from "../components/mainNav.tsx";
import { PageTemplate } from "../components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "../components/window.tsx";

export default function (data) {
    const {content, title, page: { inputPath, date }, category, tags, warning } = data;
    return <PageTemplate  data={data} title={title} stylesheets={['post']}>{() => <>
        <MainNav />
        {warning &&
            <div class="content-row">
                <Window focused>
                    <Ambox icon={<img src="/assets/img/icons/warning-48.png" width={48} height={48} />}>
                        {warning}
                    </Ambox>
                </Window>
            </div>
        }
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar caption={inputPath.split('/').pop() + " - Notepad"} iconSrc="/assets/img/icons/notepad.png" />}>
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
    </>}</PageTemplate>
}