import { Fragment, jsx } from "jsxxg";
import { LinkBtn } from "../components/linkBtn.tsx";
import { Window, WindowTitlebar } from "../components/window.tsx";

export const ContactsSection = () => 
    <div class="content-row">
            <Window focused titlebar={<WindowTitlebar iconSrc="/assets/icons/contact.png" caption="Taylor - Contacts" />}>
                <div class="prose">
                    <p>I also hang around on other places around the internet, so if you want to find me elsewhere, try the following:</p>

                    <ul class="linkBtns">
                        <li>
                            <LinkBtn rel="noopener me" href="https://tech.lgbt/@tay" img="/assets/icons/logos/mastodon-48px.webp" title="Mastodon/Fediverse/ActivityPub">
                                @tay@tech.lgbt
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://bsky.app/profile/1f98a.net" img="/assets/icons/logos/bluesky.svg" title="Bluesky">
                                @1f98a.net
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://git.boxfox.es/fox" img="/assets/icons/logos/forgejo.svg" title="Git (Forgejo)">
                                @fox
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://github.com/eth0fox" img="/assets/icons/logos/github.svg" title="Git (GitHub)">
                                eth0fox
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://resonite.com/" img="/assets/icons/logos/resonite.svg" title="Resonite">
                                eth0fox
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://last.fm/user/u1f98a" img="/assets/icons/logos/lastfm-48px.webp" title="Last.fm">
                                u1f98a
                            </LinkBtn>
                        </li>
                    </ul>
                    <ul class="linkBtns">
                        <li>
                            <LinkBtn rel="noopener me" href="https://t.me/eth0fox" img="/assets/icons/logos/telegram.svg" title="Telegram">
                                @eth0fox
                            </LinkBtn>
                        </li>
                        
                        <li>
                            <LinkBtn rel="noopener me" href="sgnl://signal.me/#eu/e27wgEv6nrsKNO_DvibkC3XqX_IUEJ-QaZE8k0CJmE8DCL6NBkNEk50MpOwlfK-H" target={"_self"} img="/assets/icons/logos/signal.svg" title="Signal">
                                @u1f.98
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="https://matrix.to/#/@fox:boxfox.es" img="/assets/icons/logos/matrix.svg" title="Matrix">
                                @fox:boxfox.es
                            </LinkBtn>
                        </li>
                        <li>
                            <LinkBtn rel="noopener me" href="mailto:u@1f98a.net" img="/assets/icons/mail-48px.webp" title="Email">
                                fox@boxfox.es
                            </LinkBtn>
                        </li>                        
                    </ul>
                </div>
            </Window>
        </div>
