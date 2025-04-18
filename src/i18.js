import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources : {
        en: {
            translation : {
                greeting : "Hello Welcome",
            }
        },
        fr: {
            translation : {
                greeting : "Bonjour",
            }
        },
        hi: {
            translation : {
                greeting : "नमस्ते",
            }
        }
    }
})