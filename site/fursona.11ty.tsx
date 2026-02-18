import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./components/mainNav.tsx";
import { PageTemplate } from "./components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./components/window.tsx";



export default function (data) {
    console.log(data);
    return <PageTemplate title="The Internet Vulpine" class="fursonaPage">
        <MainNav />
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/picture.png" caption="internet-vulpine-reference.png - Photo Viewer" />}>
                <img src="/assets/taylor-ref.webp" class="ref-image"></img>
            </Window>
            
        </div>
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/notepad.png" caption="internet-vulpine-v3_1.txt - Notepad" />}>
                <div class="prose">
                    <h1>Taylor (aka. eth0fox)</h1>
                    <i class="species">Vulpes packetus (Internet Fox)</i>
                    <p>
                        The <b>internet fox</b> (<b><i>v. packetus</i></b>) is a species of <a href="https://en.wikipedia.org/wiki/Fox">fox</a> native to the internet. 
                        The internet fox is distinguished by the large, glowing, purple, starry, grid covered, transparent 'ether' area of fur covering almost the entire left half of their body.
                        When viewed in a 3-D rendered environment the grid takes on an <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">equirectangular projection</a>, 
                        similar to as if you were to look out from inside the <a href="https://emojipedia.org/globe-with-meridians" target="_blank">🌐 globe with meridians</a> symbol, commonly used to represent the internet.
                        When viewed in 2D, it is simply a flat grid that is anchored to the view, not being affected by movement or bending of limbs.
                        Physically, the fur on this part of the body, while soft like the rest of the fur, has the optical charactericistics of <a href="https://en.wikipedia.org/wiki/Single-mode_optical_fiber" target="_blank">single-mode optical fibre</a>, 
                        so if you ever need a uselessly short fibre link, and have the equipment to terminate with a connector, give 'em a rub and see if they shed.
                    </p>

                </div>
            </Window>
            
        </div>
    </PageTemplate>
}