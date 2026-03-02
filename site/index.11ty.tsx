import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { HeroSection } from "./_includes/components/sections/hero.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";
import { ContactsSection } from "./_includes/sections/contacts.tsx";
import { LinksSection } from "./_includes/sections/links.tsx";



export default function (data) {
    console.log(data);
    return <PageTemplate stylesheets={['index']}>
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
        <ContactsSection/>
        <LinksSection />
    </PageTemplate>
}