import { Fragment, jsx, unsafeHTML } from "jsxxg"

export const PageTemplate = ({ title, children }: { title: string, children?: any }) => 
    <>
        {unsafeHTML("<!DOCTYPE html>")}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>{title || "Taylor Robinson"}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/index.css" />
            </head>
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    </>