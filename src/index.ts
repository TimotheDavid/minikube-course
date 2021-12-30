import express from "express";
import router from './routes/router'
const app = express()

const PORT = 80;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('', router);

app.listen(PORT, () => {
	console.log(`app listening at http://localhost:${PORT}`)
});