import { unsafeHTML } from "jsxxg";

export const js = (template: { raw: readonly string[] | ArrayLike<string>; }, ...substitutions: any[]) => unsafeHTML(String.raw(template, ...substitutions));
