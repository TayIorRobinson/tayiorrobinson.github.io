import { Fragment, jsx, JSXChildren } from "jsxxg";
import { target } from "jsxxg/data";


export const LinkBtn = ({ href = "/", img = "/assets/icons/notepad.png", children = "Link", rel = "noopener", target = "_blank", title }: { 
    href: string;
    img: string;
    children: JSXChildren;
    rel?: string;
    target?: target;
    title?: string;
}) =>
     <a href={href} rel={rel} target={target} class="linkBtn" title={title}>
        <div class="content">
            <img src={img} width={48} height={48}/>
            <span class="text">
                {children}
            </span>
        </div>
    </a>
