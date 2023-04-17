import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import b5 from './thai.json'
import store from '@/store'

let lang: string = ''
const resources = {
	b5: {
		translation: b5
	},
	en: {
		translation: en
	}
}

store.subscribe(() => {
	lang = store.getState().language.lang

	i18n
		.use(initReactI18next)
		.init({
			resources,
			lng: lang,
			interpolation: {
				escapeValue: false
			}
		})
})

export default i18n