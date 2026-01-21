
export type LanguageCode = 'en' | 'es' | 'de' | 'fr' | 'it' | 'ar' | 'tr' | 'fa';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta_portfolio: string;
    cta_contact: string;
  };
  about: {
    title: string;
    desc1: string;
    desc2: string;
    goal: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    database: string;
    visuals: string;
  };
  portfolio: {
    title: string;
    view_project: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export type TranslationsMap = Record<LanguageCode, Translation>;
