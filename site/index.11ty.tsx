import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./components/mainNav.tsx";
import { PageTemplate } from "./components/pageTemplate.tsx";
import { HeroSection } from "./components/sections/hero.tsx";
import { Window, WindowTitlebar } from "./components/window.tsx";



export default function (data) {
    console.log(data);
    return <PageTemplate title="Index page">
        <MainNav />
        <HeroSection/>
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar />}>
                This is a window with a titlebar.
            </Window>
        </div>
    </PageTemplate>
}