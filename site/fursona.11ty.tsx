import { Fragment, jsx } from "jsxxg";
import { MainNav } from "./components/mainNav.tsx";
import { PageTemplate } from "./components/pageTemplate.tsx";
import { Window, WindowTitlebar } from "./components/window.tsx";



export default function (data) {
    console.log(data);
    return <PageTemplate title="Taylor Robinson (the fursona)">
        <MainNav />
        
        <div class="content-row">
            <Window focused titlebar={<WindowTitlebar caption="taylor-design-v3_1.txt - Notepad" />}>
                <div class="prose">
                    
                    <h3>So, what's the deal with that fox, then?</h3>
                    <p>
                        Before we get into that, let me set some background. I'm generally what we in the business call, a massive nerd, <sup>(read: autistic)</sup> 
                        probably in part because I have spent approximately, most of my life so far sat in front of a computer, starting around the time I became able to move a mouse.
                        In 2025, I redesigned my fursona to the design you see above, which sees them as a product of the internet itsself, a creature that inhabits within the internet itself,
                        and literally just a .fbx 3D model file, which gives them the benefit of not having to play by the rules of physics, as long as it's possible in Blender, they can do it.

                    </p>
                    <h3>So, what's with the whole, uh, split thing?</h3>
                    <p>
                        The most visual indicator of this, whole <i>internet... thing</i>, is how the left half of their body is clear & see-through into a glowy, grid patterned portal.
                        In 3D this is rendered using an <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">equirectangular projection</a>,
                        almost like you're looking out from within the <a href="https://emojipedia.org/globe-with-meridians" target="_blank">🌐 globe with meridians</a>, 
                        a symbol used to represent the internet, so looking through them, staring through the Ether means you're symbolically looking at the outside world from within the internet. 
                        <small>(with thanks to my partner for a) telling me about equirectangular projections and b) not getting mad at me for spending a week we had together stuck in Photoshop and Blender)</small>
                        <br/>
                        <strong>Fun fact:</strong> The fur on this part of their body, while soft like the rest of their fur, has the optical characteristics of 
                        <a href="https://en.wikipedia.org/wiki/Single-mode_optical_fiber" target="_blank">single-mode optical fibre</a>, so if you ever need a uselessly short fibre link, 
                        and have the equipment to terminate with a connector, give 'em a rub and see if they shed.
                    </p>
                    <h3>Wait, are they a 3D model, an immaterial being that lives in my Ethernet cable, or a physical being with these physical traits?</h3>
                    <p>
                        <b>Short answer:</b> Yes<br/>
                        <br/>
                        <b>Longer answer:</b> To me, Furry is all about conflicting dualities, the 'yes, and?', allowing these multiple definitions that seem to contradict and to not give too much thought into it.
                        The point is that they are <i>my</i> fursona, a character that is fully defined by my imagination, and only gets to exist as a thought or memory in people's brains.
                        You can't touch them, you can't even talk to them. You can talk to me, and I can respond <i>as</i> them, but that's still me, never them independently.<br/>
                        Their properties & definition is defined by what's convenient & interesting at the time, 
                        because that's fun and generally leads to more interesting scenarios than adhering to have strict rules against contradictions when the existance of a walking talking fox character in any way are doesn't make sense in and of itsself.<br/>
                        <br/>
                        <a href="https://youtu.be/ws9g3igw51s?t=1715" target="_blank">This video essay</a> drove home the point I'm trying to get at (skip to around 28:30 if you're short on time). 
                        It changed my entire worldview and self perception in a way nothing else has. 
                        It taught me more about what it is to be Furry in less than 45 minutes than I had learnt in the 5-6 years of being in the furry fandom prior to watching it.
                        It made me realise and accept the fact that I am autistic, and what that means. 
                        While I don't <sup><abbr title="Foreshadowing is a literary device...">(yet)</abbr></sup> identify as 'therian', 
                        it exposed me to a heavy dose of what some would call 'therianizing radiation', changing my perception of Furry from a thing that I am involved in and that I do, to an integral part
                        of my identity. Also the dealing blow that turned me into a fox myself <small>(yes I have seen the definition of the word therian, yes I do know that is literally describing me, but that does not make me a therian, ok?)</small>, 
                        and also probably primed me into involving myself with the (actually really nice & wonderful) <a href="https://en.wikipedia.org/wiki/Pup_play" target="_blank">pup community</a> <small>(arf! :3)</small>. So, all in all, video essays with wacky titles are a fun ride.
                        
                    </p>

                </div>
            </Window>
        </div>
    </PageTemplate>
}