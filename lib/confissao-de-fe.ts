import type { ConfissaoSection } from "./confissao-de-fe.pt";
import { confissaoDeFe as confissaoDeFePt } from "./confissao-de-fe.pt";
import { confissaoDeFeEn } from "./confissao-de-fe.en";

export type { ConfissaoSection };

export function getConfissaoDeFe(locale: string): ConfissaoSection[] {
  return locale === "en" ? confissaoDeFeEn : confissaoDeFePt;
}
