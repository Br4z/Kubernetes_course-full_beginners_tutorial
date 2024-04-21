import express from "express"
import os from "os"


const app = express()
const PORT = 3000

app.get("/", (req, res) => {
	const message = `VERSION 2.0.0: Hello world from ${os.hostname()}`
	console.log(message)
	res.send(message)
})

app.listen(PORT, () => {
	console.log(`Web server running on port ${PORT}`);
})
