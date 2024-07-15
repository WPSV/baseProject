import {Pathnames, LocalePrefix} from "next-intl/routing";

export const defaultLocale = "pt" as const;
export const locales = ["pt", "es", "en"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": {
    pt: "/entrar",
    en: "/login",
    es: "/entrar",
  },
  "/auth/register": {
    pt: "/seu-negocio",
    en: "/your-bussiness",
    es: "/tu-negocio",
  },
  "/auth/register/opportunities": {
    pt: "/oportunidades",
    en: "/opportunities",
    es: "/oportunidades",
  },
  "/auth/register/actuation": {
    pt: "/atuacao",
    en: "/actuation",
    es: "/interino",
  },
  "/auth/register/bussinessType": {
    pt: "/tipo-negocio",
    en: "/bussiness-type",
    es: "/tipo-negocio",
  },
  "/auth/register/preferences": {
    pt: "/preferencias",
    en: "/preferences",
    es: "/preferencias",
  },
  "/auth/register/expectations": {
    pt: "/expectativas",
    en: "/expectations",
    es: "/expectativas",
  },
  "/auth/register/success": {
    pt: "/sucesso",
    en: "/success",
    es: "/exito",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;