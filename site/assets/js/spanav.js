if (!window['SPANAV_INITIALIZED']) {
    console.log("Initializing SPA navigation...");

    function replace(oldElement, newElement) {
        oldElement.replaceWith(newElement);
        newElement.querySelectorAll("noscript").forEach(noscript => 
            noscript.remove()
        );
        newElement.querySelectorAll("script").forEach(oldScript => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = oldScript.textContent;
            oldScript.replaceWith(newScript);
        });

    }

    /**
     * @param {NavigateEvent} event 
     */
    function spaNavigate(event) {
        // Return early if we can't/shouldn't intercept
        if (
            !event.canIntercept ||
            event.hashChange ||
            event.downloadRequest !== null
        ) {
            return;
        }

        const url = new URL(event.destination.url);
        console.log("Navigating to:", url.pathname);

        if (url.pathname.startsWith("/assets/")) return;

        console.log("Intercepting navigation to:", url.pathname);
        event.intercept({
            async handler() {
                console.log("Handling SPA navigation to:", url.pathname);
                // await new Promise(resolve => setTimeout(resolve, 10000)); // Artificial delay for testing
                let content = await fetch(url.pathname, { signal: event.signal }).then(res => res.text());
                console.log("got replacement content:", content);
                let parser = new DOMParser();
                let doc = parser.parseFromString(content, "text/html");
                console.log("got replacement document:", doc);
                replace(document.head, doc.head);
                replace(document.getElementById('root'), doc.getElementById('root'));

                console.log("replaced document content");
            },
        });
    }


    navigation.addEventListener("navigate", spaNavigate);

    window['SPANAV_INITIALIZED'] = true;
}