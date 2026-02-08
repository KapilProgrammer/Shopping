import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import da from './da.json'
import sp from './sp.json'
import sa from './sa.json'
import fa from './fa.json'

const resources = {
  en: {
    translation: en
  },
  da: {
    translation: da
  },
  sp:{
    translation: sp
  },
  sa:{
    translation: sa
  },
  fa:{
    translation: fa
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns: ['translation'],
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
