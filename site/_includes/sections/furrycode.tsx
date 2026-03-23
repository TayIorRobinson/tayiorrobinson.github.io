import { Fragment, jsx } from "jsxxg";

const FURRYCODE = "FCF3acdfmrsw A- C-> D H++ M++ P+ R T+ W- Z- Sh+++ RLRLCT a cm+++$ d++ e+ f++ h*>-- iwf+++ j p--- sm++";

export const Furrycode = () => <>
    <code>{FURRYCODE}</code>
    <details>
        <summary>(<small class="faint">OwO</small> what's this?)</summary>
        <table class='vertical'>
            <a href="https://sig.codes/furry/" target="_blank">about Furrycode</a> - decode using <a target="_blank" href={'https://winterwolf.co.uk/furcode?D=' + encodeURIComponent(FURRYCODE)}>winterwolf.co.uk</a>, <a target="_blank" href={'http://tooncop.info/furries/furcode/decoder.php?lang=en&furcode=' + encodeURIComponent(FURRYCODE)}>Ambidexter's decoder</a>
            <tbody>
                <tr>
                    <th><b>F</b>ursona</th>
                    <td>
                        Fox (<code>CF</code>), 
                        anthropomorphic (<code>3</code>), 
                        who is a 'alter ego' (<code>a</code>), 
                        a costume to wear (<code>c</code>), 
                        someone to make art of (<code>d</code>), 
                        an imaginary friend (<code>f</code>), 
                        online MU* character (<code>m</code>), 
                        a role playing character (<code>r</code>), 
                        a guardian spirit or totem (<code>s</code>),
                        and someone to write storied about (<code>w</code>)
                    </td>
                </tr>
                <tr>
                    <th><b>A</b>rt</th>
                    <td>
                        Tried a few sketches in the privacy of my own home (<code>-</code>)
                    </td>
                </tr>
                <tr>
                    <th><b>C</b>onventions</th>
                    <td>
                        Never been to one, but <del>may do so in future</del> (<code>-</code>), but plan on attending (CFz (Birmingham UK, May 2026), EF30 (Hamburg DE, August 2026)) (<code>&gt;</code>)
                    </td>
                </tr>
                <tr>
                    <th>Fursuiting (<b>D</b>)</th>
                    <td>
                        I might wear a fursuit
                    </td>
                </tr>
                <tr>
                    <th><b>H</b>ugs</th>
                    <td>
                        I'll hug anyone I know, given a faint excuse (<code>++</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        Online <b>M</b>ulti-User Universes (MU*s)
                    </th>
                    <td>
                        I've got characters on several MU*s, and frequently get fustrated when commands don't work in RL. (<code>++</code>) (hopelessly addicted to Resonite, also have a VRChat account, and a barely used Second Life account, and very little time in an actual MUCK)
                    </td>
                </tr>
                <tr>
                    <th>
                        <b>P</b>lushies
                    </th>
                    <td>
                        I have been known to cuddle a few (<code>+</code>)
                    </td>
                </tr>
                
                <tr>
                    <th>
                        <b>R</b>ealism
                    </th>
                    <td>
                        No particular preference for realism or tooniness
                    </td>
                </tr>

                <tr>
                    <th>
                        <b>T</b>ransformation
                    </th>
                    <td>
                        Maybe, as long as I wasn't the first guinea pig (or whatever...) (<code>+</code>)
                    </td>
                </tr>
                
                <tr>
                    <th>
                        <b>W</b>riting
                    </th>
                    <td>
                        I have these scribblings but <i>nobody</i> is ever going to see them (<code>-</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        <b>Z</b>ines
                    </th>
                    <td>
                        Not really interested (<code>-</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        <b>C</b>omputers
                    </th>
                    <td>
                        Hey, if there was anything else to life, there'd be a <span class='has-hovertext' title="in the original furrycode this is 'there'd be a newsgroup about it', but Russian translation says 'there'd be a teleconference or a channel on some IRC server' which I think fits better ">channel on some IRC server</span> about it (<code>+++</code>). My preferred operating environment is macOS (<code>m</code>), and I do this as my job (<code>$</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        <b>D</b>OOM, Quake and other related FPS games
                    </th>
                    <td>
                        I've got pretty good at it; I can get through most levels easily; I've downloaded and played other WADs (<code>++</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        The <b>I</b>nternet
                    </th>
                    <td>
                        I'm a Webmaster/site administrator (<code>+++</code>), and have my own home page that mentions furries (<code>wf</code>) (hey, you're looking at it right now!)
                    </td>
                </tr>
                <tr>
                    <th>
                        <b>J</b>apanese animation (anime)
                    </th>
                    <td>
                        Seen it, might think about seeing it again some time. (read: I watched Beastars S1 like 6 years ago, but still have 'Wild Side' stuck in my head)
                    </td>
                </tr>
                <tr>
                    <th>
                        I<b>RL</b> job
                    </th>
                    <td>
                        I work in computers (<code>RLCT</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        IRL <b>a</b>ge
                    </th>
                    <td>
                        20-29 years old
                    </td>
                </tr>
                
                <tr>
                    <th>
                        IRL <b>e</b>ducation
                    </th>
                    <td>
                        Some tertiary education (<code>+</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        IRL <b>f</b>urriness
                    </th>
                    <td>
                        I've been known to bark at friends to greet them (<code>++</code>)
                    </td>
                </tr>
                <tr>
                    <th>
                        IRL <b>h</b>ousing
                    </th>
                    <td>
                        I'm still stuck living with my parents (<code>*</code>), in future I'm likely to end up living in a cave with 47 computers and a <del>T1</del> multi-gig internet connection line (<code>&gt;--</code>)
                    </td>
                </tr>
                
                <tr>
                    <th>
                        IRL <b>p</b>ets
                    </th>
                    <td>
                        I wouldn't have the things in the house [yes, I am in fact sure that I am a furry?] (<code>---</code>)
                    </td>
                </tr>

                <tr>
                    <th>
                        <b>S</b>ex
                    </th>
                    <td>
                        <i>Please verify you are over 18+ to view this content. Please provide the last four digits of your dog and your mother's maiden credit card number to continue.</i>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </details>
</>;