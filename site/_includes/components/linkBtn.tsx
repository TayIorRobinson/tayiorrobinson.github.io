import { Fragment, jsx, JSXChildren } from "jsxxg";
import { target } from "jsxxg/data";

const linkIsInternal = (link) => {
    const random = Math.random().toString(36).slice(2)
    return new URL(link, "https://" + random + "/").hostname == random;
}


export const LinkBtn = ({ href = "/", img, children = "Link", rel, target, title, lg }: { 
    href: string;
    img?: string;
    children: JSXChildren;
    rel?: string;
    target?: target;
    title?: string;
    lg?: boolean;
}) => {
    let internal = linkIsInternal(href);
    return <a href={href} rel={rel ?? (internal ? undefined : 'noopener')} target={target ?? (internal ? undefined : '_blank')} class={"linkBtn" + (img ? ' hasImg' : '') + (lg ? ' lg' : '')} title={title}>
        <div class="content">
            <img src={img ?? '/assets/commandlinkglyph.png' } class={img ? 'img' : 'glyph'} />
            <span class="text">
                {children}
            </span>
        </div>
    </a>

}