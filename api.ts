import express from "express"
import { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import axios from "axios"

dotenv.config()

const app = express()

app.use(cors())

app.get("/api/weather", (req: Request, res: Response) => {
	const options = {
		method: "GET",
		url: `https://api.openweathermap.org/data/2.5/weather?lat=43.7001&lon=-79.4163&appid=${process.env.VITE_API_KEY}`,
		headers: {
			"Content-Type": "application/json",
		},
	}

	axios
		.request(options)
		.then(response => {
			res.json(response.data)
		})
		.catch(err => {
			console.log(err)
		})
})

app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT || 3001}`))
