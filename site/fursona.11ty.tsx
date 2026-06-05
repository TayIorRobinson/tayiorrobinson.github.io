import { Fragment, jsx } from "jsxxg";
import { Ambox } from "./_includes/components/ambox.tsx";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";



export default function (data) {
    return <PageTemplate data={data} title="The Internet Vulpine" class="fursonaPage" stylesheets={[ 'fursona' ]}>{() => <>
        <MainNav />


        <div class="content-row slim" id="version-selector">
            <label>
                <b>Version selector:</b>
                <select onchange="location.href = event.target.value" autocomplete="off">
                    <option selected value="">v3.1 (2025)</option>
                    <option value="https://taylor.robins.one/">v2 (2021)</option>
                    <option disabled>v1 (2017)</option>
                </select>
            </label>
        </div>


        <div class="content-row">
            <Window focused>
                <Ambox icon={<img src="/assets/img/icons/warning-48.png" width={48} height={48} />}>
                    <b>This page is currently work in progress.</b> Content here may be missing, incomplete or incorrect. This page will change over time.
                </Ambox>
            </Window>
        </div>

        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/img/icons/picture.png" caption="internet-vulpine-reference.png - Photo Viewer" />}>
                <img src="/assets/taylor-ref.webp" class="ref-image"></img>
            </Window>
            
        </div>
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/img/icons/notepad.png" caption="internet-vulpine-v3_1.txt - Notepad" />}>
                <div class="prose hasPaw">
                    <p>
                        <h1>The Internet Vulpine</h1>
                        My fursona, the Internet Vulpine, is an <b>internet fox</b> (<b><i>v. v. packetus</i></b>) which is a subspecies of the <a href="https://en.wikipedia.org/wiki/Red_fox">red fox</a> native to 
                        the internet. 
                        <br/>
                        The idea for basing my fursona's design in networking & internet came from a love for the internet as a whole, the possibilities unlocked, the people it allowed me to meet, not to mention
                        the Furry community existing mostly on and largly because of the internet, combined with me just being a general nerd, fascinated with networking & computers (like, I am a qualified network
                        engineer) it seemed like a natural fit.
                        <br/>
                        Unlike previous iterations of my fursona, who were more seperate characters, I view the Internet Vulpine as more of just a representation of myself. Primarily because while it is kinda fun
                        to give reasons for why they are and make them more realistic/relatable by coming up with a in-universe explanation for any changes. For example, my old fursona, I, and thus by extension
                        the Internet Vulpine are all trans, and while I have not, my fursona(s) have canonically had HRT & surgeries, with my old fursona I would say they actually took meds & had someone slice them
                        open, which, yes, is more realistic & relatable, which can be nice, it is also less funny than saying, the Internet Vulpine's HRT was editing their blend shapes & their surgery was performed 
                        in Blender's Edit mode (even if some of there are details of their biology (which I will not go into here), that are intended to be mostly rooted in actual human biology)
                    </p>

                    <p>
                        <h1 id="ether">Ether</h1>

                        The ether, named after <a href="https://en.wikipedia.org/wiki/Ethernet#History">Ethernet</a>, which in turn was named after the historical idea in which that light was propagated through 
                        a medium called the <a href="https://en.wikipedia.org/wiki/Luminiferous_aether">ether or luminiferous aether</a> that is omnipresent throughout the universe.
                        <br/>
                        In this context, the ether refers to a pseudophysical representation of the internet, which is the world the Internet Vulpine lives within. 
                        <br/>
                        Visually when viewed from the inside, the ether takes on a bright purple, red & pink appearance filled with white stars, and a repeating grid pattern. Depending on how the ether is observed
                        this grid may appear as a 2 dimentional flat grid, or a grid projected  in <a href="https://en.wikipedia.org/wiki/Equirectangular_projection">equirectangular projection</a>, resembling the 
                        <a href="https://emojipedia.org/globe-with-meridians">🌐 globe with meridians</a> symbol commonly used to refer to the internet, which depicts the ether, which has  a blue appearance viewed
                        from the outside,
                        
                    </p>

                </div>
            </Window>
            
        </div>
    </>}</PageTemplate>
}