import { Fragment, jsx } from "jsxxg";
import { Ambox } from "./_includes/components/ambox.tsx";
import { MainNav } from "./_includes/components/mainNav.tsx";
import { PageTemplate } from "./_includes/components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./_includes/components/window.tsx";



export default function (data) {
    return <PageTemplate data={data} title="The Internet Vulpine" class="fursonaPage" stylesheets={[ 'fursona' ]}>{() => <>
        <MainNav />
        

        <div class="content-row">
            <Window focused>
                <Ambox icon={<img src="/assets/img/icons/warning-48.png" width={48} height={48} />}>
                    asdf
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
                    <h1>Taylor (aka. eth0fox)</h1>
                    <i class="species">Vulpes packetus (Internet Fox)</i>
                    <p>
                        The <b>internet fox</b> (<b><i>v. v. packetus</i></b>) is a subspecies of the <a href="https://en.wikipedia.org/wiki/Red_fox">red fox</a> native to the internet. 
                        The internet fox is distinguished by the large, glowing, purple, starry, grid covered, transparent 'ether' area of fur covering almost the entire left half of their body.<br/>
                        Depending on how the ether area is observed, it can take on one of two projections:<br/>
                        <ul>
                            <li>
                                <b>A 3-dimentional projection</b>, where the ether takes on an <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">equirectangular projection</a>, 
                                similar to as if you were to look out from inside the <a href="https://emojipedia.org/globe-with-meridians" target="_blank">🌐 globe with meridians</a> symbol, commonly used to represent the internet.
                            </li>
                            <li>
                                <b>A 2-dimentional, flat projection</b>, where the ether is laid flat across the entire page, not being affected by movement or bending of limbs, as if you were to place a printout of the grid underneath
                                the page, and cut out parts of the paper where the ether is shown.
                            </li>
                        </ul>
                        
                        Physically, the fur on this part of the body, while soft like the rest of the fur, has the optical charactericistics of <a href="https://en.wikipedia.org/wiki/Multi-mode_optical_fiber" target="_blank">multi-mode optical fibre</a>, 
                        so if you ever need a uselessly short fibre link, and have the equipment to terminate with a connector, give 'em a rub and see if they shed.
                    </p>

                </div>
            </Window>
            
        </div>
    </>}</PageTemplate>
}