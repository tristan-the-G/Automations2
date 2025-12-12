import { en } from '@/app/content/en';

import { de } from '@/app/content/de';



type Language = 'en' | 'de';



const translations: Record<Language, typeof en> = {

  en,

  de

};



export const getTexts = (language: Language) => {

  return translations[language] || translations.en;

};

