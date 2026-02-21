import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import da from './da.json'
import sp from './sp.json'
import sa from './sa.json'
import fa from './fa.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,

  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("LANGUAGE")

      if (savedLanguage) {
        callback(savedLanguage)
        return
      }
    } catch (error) {
      console.log("Error reading language", error)
    }

    callback("en")
  },

  cacheUserLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem("LANGUAGE", lang)
    } catch (error) {
      console.log("Error saving language", error)
    }
  }
}

i18n
  .use(LANGUAGE_DETECTOR as any)
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
