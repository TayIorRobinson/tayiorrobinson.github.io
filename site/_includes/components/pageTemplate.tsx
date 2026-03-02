import { Fragment, jsx, unsafeHTML } from "jsxxg"
import { HtmlDivElement } from "jsxxg/data"

export const PageTemplate = ({ data, title, children, stylesheets, head, ...rest }: { data: any, title?: string, children?: any, stylesheets?: string[], head?: any } & HtmlDivElement) => 
    <>
        {unsafeHTML("<!DOCTYPE html>")}
        { console.log(data) }
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
                {
                    (stylesheets || []).map((value) => <link rel="stylesheet" href={`/css/${value}.css`} />)
                }
                {head}
            </head>
            <body>
                <div id="root" {...rest}>
                    {children}
                </div>
            </body>
        </html>
    </>