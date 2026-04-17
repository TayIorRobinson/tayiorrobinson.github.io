import { Fragment, jsx, unsafeHTML } from "jsxxg"
import { HtmlDivElement } from "jsxxg/data"

export const PageTemplate = ({ data, title, children, stylesheets, head, ...rest }: { data: any, title?: string, children?: any, stylesheets?: string[], head?: any } & HtmlDivElement) => 
    <>
        {unsafeHTML("<!DOCTYPE html>")}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name="darkreader-lock"></meta>
                {title && <title>{title}</title>}
                <link href="/assets/fonts/fonts.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/common.css" />
                <link rel="alternate" type="application/rss+xml" href="https://eth0fox.net/notes/rss.xml" title="Taylor's Notes (RSS Feed)" />
                <link rel="alternate" type="application/feed+json" href="https://eth0fox.net/notes/feed.json" title="Taylor's Notes (JSON Feed)" />
                <link rel="alternate" type="application/atom+xml" href="https://eth0fox.net/notes/atom.xml" title="Taylor's Notes (Atom Feed)" />
                <meta name="generator" content={data.eleventy.generator} />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={"https://eth0fox.net" + data.page.url} />
                <meta name="fediverse:creator" content="@tay@tech.lgbt"/>
                {/* <script src="/assets/js/spanav.js"></script> */}
                {
                    (stylesheets || []).map((value) => <link rel="stylesheet" href={`/css/${value}.css`} />)
                }
                {/* <script>{js`
                    window.onerror = function (message, source, lineno, colno, error) {
                        alert("Script error in " + source + " (" + lineno + ":" + colno + ")!\n" + message)
                    }
                `}</script> */}
                {unsafeHTML(`
                    <!--[if lt IE 8]> <link rel="stylesheet" href="/assets/compat/lte-ie7.css" /> <![endif]-->    
                `)}
                {head}
            </head>
            <body>
                <div id="oldBrowser">
                    <b>Hello old-browser-using friend!</b> Despite the mid-2000s aesthetics here, this site is actually built mainly with modern web technologies. So, if you're not using one the site will probably look broken.<br/>
                    I try to make it work as much possible where the fixes are simple, and the site shouldn't be so broken as to be unusable (let me know if it is) - but my sanity and experience for modern browsers trumps supporting IE7 or whatever.
                </div>
                <div id="root" {...rest}>

                    {children}
                </div>
            </body>
        </html>
    </>