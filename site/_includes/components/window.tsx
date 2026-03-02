import { Fragment, jsx, JSXChildren } from "jsxxg";

export const WindowTitlebar = ({ iconSrc, caption }: { iconSrc?: string, caption?: string }) => <>
    <div class="controls"></div>
    <div class="titlebar">
        <img class="icon" width="16" height="16" src={iconSrc || "/favicon.ico"} />
        <h2 class="caption">{caption || "Window"}</h2>
    </div>
</>

export const Window = ({ titlebar, children, focused, closed }: { titlebar?: JSXChildren, children?: JSXChildren, focused?: boolean, closed?: boolean }) =>
    <div class="window" data-focused={focused} data-has-titlebar={!!titlebar} data-closed={closed}>
        {titlebar}
        {children && 
            <div class="clientarea">
                <div class="panelborder">
                    <div class="panel">
                        {children}
                    </div>
                </div>
            </div>
        }

    </div>
