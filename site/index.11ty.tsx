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
                        I'm Taylor (they/them), and I'm fox on the internet. I'm a web developer, with experience in IT and network engineering, but I'm just a general nerd. 
                        I've been a furry since 2017 and above you can see my fursona, the Internet Vulpine.
                        What is an Internet Vulpine you ask? Well, it's a vulpine creature (also known as 'an fox') that lives on the internet. Got it? <small>(what do you mean 'no'?)</small>
                        <br/>
                        If you want to learn more about them, check out <a href="/fursona">/fursona</a>.
                    </p>

                    
                </div>
            </Window>
        </div>
         <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/contact.png" caption="Taylor - Contacts" />}>
                <div class="prose">
                    <h2>Hello!</h2>
                    <hr/>
                    <label class="input">
                        foo
                        <input type="text" readonly value="bar"></input>
                    </label>
                    
                    <div class="sheenTest"></div>

                    
                    
                </div>
            </Window>
        </div>
    </PageTemplate>
}