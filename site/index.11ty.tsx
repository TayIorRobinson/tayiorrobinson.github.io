import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { HeroSection } from "./_includes/components/sections/hero.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";
import { js } from "./_includes/logic/util/templates.ts";
import { ContactsSection } from "./_includes/sections/contacts.tsx";
import { Furrycode } from "./_includes/sections/furrycode.tsx";
import { LinksSection } from "./_includes/sections/links.tsx";



export default function (data) {
    return <PageTemplate  data={data} stylesheets={['index']}>{() =><>
        <MainNav />
        <HeroSection/>
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/favicon.ico" caption="About" />}>
                <div class="prose">
                    <small>In the interest in providing all essential information, this section will be presented in the style of <a href="https://en.wikipedia.org/wiki/Five_Ws" target="_blank">Five Ws journalism</a>.</small>
                    <h2>Who are you?</h2>
                    <p>
                        I'm Taylor (they/them), and I'm fox on the internet. I'm a web developer, with experience in IT and network engineering, but I'm just a general nerd. 
                        I've been a furry since 2017 and above you can see my fursona, the Internet Vulpine.
                    </p>
                    <h2>What the hell is an 'internet vulpine'?</h2>
                    <p>
                        <p class="introductoryText">Main article: <a href="/fursona">/fursona</a></p>
                        Well, it's a vulpine creature (also known as 'an fox') that lives in/embodies the internet. Got it? <small>(what do you mean 'no'?)</small>
                    </p>
                    <h2>When are you?</h2>
                    <p>
                        Uh, the 2000's? I mean I was born in 2004? I'm still alive? <sup>(at time of writing)</sup> It's currently <span id="clock" class='mono'>time for you to enable JavaScript</span>?
                        <script>{js`
                            function updateTime() {
                                var time = "time for you to update your browser";
                                try {
                                    var now = new Date();
                                    time = now.toLocaleString(undefined, { timeZone: 'Europe/London', hour:'2-digit', minute: '2-digit', timeZoneName: 'short', hour12: true } );
                                    var minuteProgress = now.getTime() % 60000;
                                    var left = 60000 - minuteProgress;


                                    setTimeout(updateTime, left);
                                } catch(e) {
                                    console.error(e);
                                }
                                document.getElementById('clock').innerText = time;
                                document.getElementById('clock').textContent = time;
                            }
                            updateTime();
                        `}</script>
                    </p>
                    <h2>Where are you?</h2>
                    <p>
                        I live in t' county of Yorkshire, United Kingdom.
                    </p>
                    <h2>Why are you?</h2>
                    <p>
                        I mean, I think you might have to ask my parents for the start to that, but probably, mostly autism, mixed with a healthy dose of unsupervised internet access, and a sprinkling of Nicholas Wilde, and a <a href="https://www.youtube.com/watch?v=ws9g3igw51s" target="_blank" rel="noopener">life-altering video essay about furry porn</a>. It's <a href="/notes/2026-06-10-being-a-fox/">complicated</a>.
                    </p>

                    <h2>Furrycode</h2>
                    <p>
                        <Furrycode />
                    </p>
                    


                    

                    
                    
                </div>
            </Window>
        </div>
        <ContactsSection/>
        <LinksSection />
    </>}</PageTemplate>
}