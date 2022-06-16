import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (message) => {
	console.log(chalk.bgRed(" ERROR ") + message)
}


const printSuccess = (message) => {
	console.log(chalk.bgGreen(" SUCCESS ") + message)
}

const printHelp = () => {
	console.log(
			dedent`${chalk.bgCyan(' HELP ')}
			Without parameters - show weather
			-s [CITY] for set city
			-h for show help
			-t for save token
			`
	)

}

const printWeather = (res, icon) => {
	console.log(
			dedent`${chalk.bgYellow(' WEATHER ')} Weather in the city ${res.name}
			${icon} ${res.weather[0].description}
			Temperature: ${res.main.temp} (real feels like) ${res.main.feels_like}
			Humidity: ${res.main.humidity}%
			Wind speed: ${res.wind.speed}
			`
	)
}

export {
	printError,
	printSuccess,
	printHelp,
	printWeather,
}
