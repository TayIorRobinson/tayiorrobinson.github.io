import { jsx } from "jsxxg"
import { LinkBtn } from "./linkBtn.tsx"


export const MainNav = () =>     
    <div class="content-row" id="mainnav">
        <a href='/' class="brand">
            <h1>
                <span class="mono">eth0</span>fox
            </h1>
            <p class="tagline">
                Inte<span class="mono">r</span>net Vu<span class="ip">lP</span>ine
            </p>
        </a>
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

