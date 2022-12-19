import { useEffect, useState } from "react"
import { ResponseWeather } from "../types"

import axios from "axios"

import "./App.css"

function App() {
	const [weather, setWeather] = useState<ResponseWeather | null>(null)

	useEffect(() => {
		const options = {
			method: "GET",
			url: "http://localhost:3001/api/weather",
			headers: {
				"Content-Type": "application/json",
			},
		}

		axios.request(options).then(response => {
			setWeather(response.data)
		})
	}, [])

	if (!weather) return null

	return (
		<div className='App'>
			<h1>{weather?.name}</h1>
			<h2>{Math.floor(weather?.main.temp - 273.15)} °C</h2>
			<i>
				<img
					src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
					alt={weather?.weather[0].description}
				/>
			</i>
			<p>{weather?.weather[0].main}</p>
		</div>
	)
}

export default App
