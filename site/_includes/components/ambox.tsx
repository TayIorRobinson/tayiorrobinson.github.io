import { jsx, JSXChildren } from "jsxxg";
import { Stylesheet } from "./pageTemplate.tsx";

export const Ambox = ({ icon, children }: { icon: JSXChildren, children: JSXChildren }) => 
    <div class="ambox">
        <Stylesheet name="common/ambox" />
        <div class='icon'>{icon}</div>
        <div class="content">
            {children}
        </div>
    </div>