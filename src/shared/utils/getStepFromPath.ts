const pathToStepMap: { [key: string]: { [locale: string]: number } } = {
  '/seu-negocio': { pt: 1, en: 1, es: 1  },
  '/oportunidades': { pt: 2, en: 2, es: 2  },
  '/atuacao': { pt: 3, en: 3, es: 3  },
  '/tipo-de-negocio': { pt: 4, en: 4, es: 4  },
  '/preferencias': { pt: 5, en: 5, es: 5  },
  '/expectativas': { pt: 6, en: 6, es: 6  },
  '/sucesso': { pt: 7, en: 7, es: 7  },
};

export function getStepFromPath(path: string, locale: string): number {
  const newPath = path.slice(3);
  const localeMap = pathToStepMap[newPath];
  return localeMap ? localeMap[locale] : 0;
}