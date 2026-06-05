import { Fragment, jsx, unsafeHTML } from "jsxxg";
import { js } from "../../logic/util/templates.ts";
import { IconCircleArrowDown } from "../icons/circleArrowDown.tsx";
import { Window } from "../window.tsx";


export const HeroSection = () => 
    <div class="content-row">
            <Window focused>
                <map name='heroBooper'>
                    <area shape="poly" coords="179,190,171,182,164,170,169,164,181,164,196,167,203,175,195,183" onclick="(new Audio('/assets/boop.ogg')).play()" />
                </map>
                <div id="hero">
                    
                    <div class="content">
                        <div class="title" id="hero-title">
                            <h2>
                                Foxes run on <i>JavaScript™</i>
                            </h2>
                            <p>
                                You'll need to turn that on to turn them on. <small style='font-size: 50%;'>wait no- that's not what i meant!</small>
                            </p>

                        </div>
                        <script>
                            {js`
                                var titles = [
                                    "<h2>Introducing a <i>true</i> RFC791-compliant fox.</h2><p>Get yourself a real honest-to-goodness IP vulpine. Not just a <a href='https://youtu.be/LGoM3Sqr2-w?t=2385' target='_blank' title='\"but they dont define what that is!?\"'>pseudo-quasi-wannabe-near-fox</a>.",
                                    "<h2>A fox?<br/>In <i>the</i> internet?</h2><p>It's more likely than you think.</p>",
                                    "<h2>Finally. <br/>A fox accessible <i>anywhere</i></h2><p>With an Internet Vulpine™, you'll never be too far from a fox ever again</p>",
                                    "<h2>We put a fox <i>in</i> the internet</h2><p>Don't ask why, ask <i>what</i>.<br/><sup>I don't know what that means either</sup>",
                                    "<h2>This fox is in your router <i>right now</i>.</h2><p>Don't worry about it.<p>",
                                    "<h2>arf :3</h2><p style='max-width:0px'>arwfaffffarwhhaffffarafaraarararfarrffarrarrarararararrfarrarehehehearrrfffarafffraaaaaaffffffffarerahfarrarararararararararaararraraefffaaaffwarafehararrrrarafffrawwufffawfffufffwuffwaffarararararaarararrararaa</p>",
                                    "<h2>Packetised foxes in <i>your</i> area.</h2><p><B>WARNING:</b> This Site Contains Foxes That Want To Establish A TCP Connection. Click Here Now To Meet Them</p>",
                                    "<h2>475,200<abbr title='kilo-miles per hour'>kmph</abbr></h2><p>That's the speed at which this fox is traveling through <i>your</i> Ethernet cable. Right now. Please cushion their fall. Veterinary bills are expensive. (and it's you who's liable btw)</p>",
                                ];
                                var length = titles.length;
                                if (titles[length-1] == undefined) { length--; } // ie7 is stupid and will assume a trailing , means to an empty item to the array

                                document.getElementById("hero-title").innerHTML = titles[Math.floor(Math.random()  * length)];
                            `}
                        </script>
                        <div class="bigbuttoncontainer">
                            <a id="bigbutton" href="/assets/InternetVulpine.exe">
                                <IconCircleArrowDown width={32} height={32} />
                                <div class="text">
                                    <b>Free Download</b>
                                    <span>6.21MB {unsafeHTML("&bull;")} for Windows Vista</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="internetvulpine">
                        <img src="/assets/img/hero/wave-color.webp" usemap="#heroBooper"  width={871} height={848} />
                        <div class="ether" />
                    </div>
                </div>
                
            </Window>
        </div>