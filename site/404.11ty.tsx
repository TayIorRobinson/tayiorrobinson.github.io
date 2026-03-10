import { Fragment, jsx, unsafeHTML } from "jsxxg";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";



export function data() {
    return {
        permalink: '/404.html'
    }
}

export default function (data) {
    return <PageTemplate data={data} title="Page Not Found" stylesheets={[ '404' ]}>
        <MainNav />
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar caption="Location is not available" />}>
                <div class="errorContent">
                    <div class='errorTop'>
                        <img src="/assets/icons/error-32.png" width={32} height={32} />
                        <div class='errorText'>
                            The fox cannot find <span id='404url'>the path you requested</span>. Make sure you've typed the name correctly, then try again. If it still cannot be located, the information might have been removed or moved to a different location.
                            <script>{unsafeHTML(`document.getElementById("404url").innerText = "'" + location.href + "'";`)}</script>
                        </div>
                    </div>
                    <div class='errorBottom'>
                        <a href="/" class='button'>Home</a>
                    </div>

                </div>
            </Window>
            
        </div>
    </PageTemplate>
}