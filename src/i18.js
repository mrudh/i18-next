import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources : {
        en: {
            translation : {
                greeting : "Hello Welcome",
                description : {
                    line1: 'Welcome you all to <1>{{home}}</1>',
                    line2: 'How are you',
                }
            }
        },
        fr: {
            translation : {
                greeting : "Bonjour!",
                description : {
                    line1: 'Vous regardz la <1>{{home}}</1>',
                    line2: 'Ceci est un',
                }
            }
        },
        hi: {
            translation : {
                greeting : "नमस्ते",
                description : {
                    line1: 'आप सभी का स्वागत है <1>{{home}}</1>',
                    line2: 'आप कैसे हैं',
                }
            }
        },
        ar: {
            translation : {
                greeting : "مرحبًا",
                description : {
                    line1: 'مرحباً كيف حالك؟ <1>{{home}}</1>',
                    line2: 'أتمنى أن تكون بخير',
                }
            }
        }
    }
})