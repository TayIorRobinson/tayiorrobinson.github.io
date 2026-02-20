import { Fragment, jsx, unsafeHTML } from "jsxxg"
import { HtmlDivElement } from "jsxxg/data"

export const PageTemplate = ({ title, children, ...rest }: { title?: string, children?: any } & HtmlDivElement) => 
    <>
        {unsafeHTML("<!DOCTYPE html>")}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name="darkreader-lock"></meta>
                {title && <title>{title}</title>}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
            </head>
            <body>
                <div id="root" {...rest}>
                    {children}
                </div>
            </body>
        </html>
    </>