import express from "express";
import router from './routes/router'
import { Request , Response, NextFunction  } from "express";
const app = express()

const PORT = 4242;

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use('', router);


app.get('/', (req: Request,res: Response, next: NextFunction ) => {
	res.send('Hello world');
})

app.listen(PORT, () => {
	console.log(`app listening at http://localhost:${PORT}`)
});