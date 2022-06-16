import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
	return ''
}

const getWeather = async (city) => {
	const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
	if (!token) {
		throw new Error('API key is not exist, set token using -t [API_KEY]')
	}
	const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric',
		}
	})

	return data

}

export {
	getWeather,
	getIcon
}
