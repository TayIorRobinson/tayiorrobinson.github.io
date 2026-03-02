import { jsx } from "jsxxg"
import { LinkBtn } from "./linkBtn.tsx"


export const MainNav = () =>     
    <div class="content-row" id="mainnav">
        <div class="brand">
            <h1>
                <a href="/"><span class="mono">eth0</span>fox</a>
            </h1>
            <p class="tagline">
                Inte<span class="mono">r</span>net Vu<span class="ip">lP</span>ine
            </p>
        </div>
        <div class='navlinks'>
            <LinkBtn lg href="/">
                Home
            </LinkBtn>
            <LinkBtn lg href="/fursona">
                Fursona
            </LinkBtn>
            <LinkBtn lg href="/notes">
                Notes
            </LinkBtn>
        </div>
    </div>

