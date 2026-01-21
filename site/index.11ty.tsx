import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./components/mainNav.tsx";
import { PageTemplate } from "./components/pageTemplate.tsx";
import { HeroSection } from "./components/sections/hero.tsx";
import { Window, WindowTitlebar } from "./components/window.tsx";



export default function (data) {
    console.log(data);
    return <PageTemplate>
        <MainNav />
        <HeroSection/>
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar caption="About" />}>
                <div class="prose">
                    <h2>Hello!</h2>
                    <hr/>
                    <p>
                        I'm Taylor, and I'm fox on the internet. 
                        This is a website about a website for my fursona, Taylor <i>Robinson</i>. 
                        <small>(yes, both I and my fursona are called Taylor, but I am not Taylor Robinson. You are not the first person to be confused by this <span class='mono'>:')</span></small> ). 
                        <br/>
                        If you want to learn more about them, there's <a href="/fursona">a whole page dedicated to their design</a>.
                    </p>

                    
                </div>
            </Window>
        </div>
    </PageTemplate>
}