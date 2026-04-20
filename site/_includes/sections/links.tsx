import { Fragment, jsx } from "jsxxg";
import { Window, WindowTitlebar } from "../components/window.tsx";


const Webring = ({ title, link, prev: prev, next}) =>
    <li class='webring'>
        <a href={prev + "eth0fox.net"}  class={'spinBtn groupedRight'} title={"Go to the previous page in " + title}>
            ◄
        </a>
        <a href={link} class={'spinBtn grouped'} title={"Visit " + title}>
            {title}
        </a>
        <a href={next + "eth0fox.net"}  class={'spinBtn groupedLeft'} title={"Go to the next page in " + title}>
            ►
        </a>
    </li>



const RelOrder = [ 'contact', 'acquaintance', 'friend', 'me' ] as const;
type EightyEightThirtyOne = {
    link?: string;
    img: string;
    title?: string;
    rel?: (typeof RelOrder)[number]
    fallback?: string;
}
const EightyEightThirtyOne = ({ link, img, title, rel, fallback }: EightyEightThirtyOne) =>
    <a href={link} target="_blank" rel={"noopener " + rel} class="eightyeightthirtyone">
        <img width={88} height={31} src={`/assets/88x31/${img}`} loading="lazy"  alt={title} title={title} onerror={fallback && `this.src = '/assets/88x31/${img.replace(/\..+$/, '.'+fallback)}'`} />
    </a>



const EightyEightThirtyOnes = ({ badges }: { badges: Parameters<typeof EightyEightThirtyOne>[0][]}) =>
    badges.sort((a,b) => a.rel == b.rel ? a.img.localeCompare(b.img) : (RelOrder.indexOf(b.rel!) - RelOrder.indexOf(a.rel!))).map(badge => jsx(EightyEightThirtyOne, badge))

export const LinksSection = () => 
    <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/icons/globe.png" caption="Links" />}>
                <div class="prose">
                    <h2>Webrings</h2>
                    <p>Here's the links through the webrings this site is a part of</p>
                    <div class='webrings'>
                        <Webring 
                            title="Furryring" 
                            link="https://keithhacks.cyou/furryring.php"
                            prev="https://keithhacks.cyou/furryring.php?prev="
                            next="https://keithhacks.cyou/furryring.php?next=" />
                        <Webring 
                            title="Fediring" 
                            link="https://fediring.net"
                            prev="https://fediring.net/previous?host="
                            next="https://fediring.net/next?host=" />
                    </div>
                    <h2>Other cool people</h2>
                    <p>Here's the badges of some people I think are cool :D - feel free to steal my own badge for your own site, or if I know you, and I haven't got your badge, let me know!</p>
                    <div class='badges'>
                        <EightyEightThirtyOnes badges={[
                            { img: "eth0fox.webp", fallback: "png", link: "https://eth0fox.net", title: "it's me! feel free to steal this one for your own sites!", rel: "me" },
                            { img: "orion.webp", link: "https://moonclaw.eu", title: "Orion Moonclaw", rel: "friend" },
                            { img: "spotlight.webp", fallback: 'gif', link: "https://joscomputing.space/", title: "Spotlight" },
                            { img: "yosh.webp", fallback: 'png', link: "https://www.unix.dog/~yosh/", title: "yosh", rel: "friend" },
                            { img: "noel.webp", fallback: 'png', link: "https://00ffff.eu", title: "Noel", rel: "friend" },
                            { img: "rail.webp", fallback: 'png', link: "https://flufftech.net/", title: "rail" },
                            { img: "theresnotime.webp", fallback: 'png' link: "https://www.theresnotime.co.uk/", title: "TheresNoTime"},
                            { img: "mineboom.webp", fallback: 'gif', link: "https://mineboom.neocities.org/", title: "MineBoom", rel: "friend" },
                            { img: "ryfox.webp", fallback: 'png', link: "https://ry.cd-rom.net/", title: "ryfox"},
                            { img: "sneexy.svg", link: "https://sneexy.synth.download/", title: "ruben"},
                            { img: "pivotman.webp", fallback: 'png', link: "https://pivotman319-owo.github.io/", title: "pivotman319", rel: "acquaintance"},
                            { img: "atapi.webp", fallback: 'gif', link: "https://atapi.space/", title: "atapi"},
                            { img: "j4.avif", link: "https://j4.lc", title: "J4", rel: "acquaintance"},
                            { img: "kaizo.png", link: "https://keithhacks.cyou", title: "Kaizo Hellhound", rel: "friend"},
                        ]} />
                    </div>
                    <h2>Miscellaneous badges</h2>
                    <div class="badges">
                        <EightyEightThirtyOnes badges={[
                                { img: "fox.webp", title: "foxfoxfoxfoxfoxfox" },
                                { img: "madewithpaws.webp",  fallback: 'png', title: "Made with my own two paws" },
                                { img: "furry-yay.webp",  fallback: 'png', title: "Furry, yay!" },
                                { img: "no-binary.webp", fallback: 'png', title: "no binary? no problem!" },
                                { img: "work.webp",  fallback: 'png', title: "this site works on My Machine™" },
                                { img: "resonite.webp",  fallback: 'png', title: "Resonite", link: "https://resonite.com" },
                                { img: 'pride-rainbow.webp', fallback: 'png', title: 'LGBTQIA+ Pride Flag' },
                                { img: 'pride-trans.webp',  fallback: 'png', title: 'Transgender Pride Flag' },
                                { img: 'queer-coded.webp',  fallback: 'png', title: "you're telling me a queer coded this?" },
                                { img: 'MadeOnAMac.webp',  fallback: 'gif', title: 'Made on a Mac' },
                                { img: 'MadeOnWindows.webp',  fallback: 'gif', title: 'Made on Windows' },
                                { img: 'firefox4.webp', fallback: 'gif', title: 'Tested on Firefox' },
                            ]} />
                    </div>
               </div>
            </Window>
        </div>
