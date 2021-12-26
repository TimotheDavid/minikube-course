const express = require('express')
const routes = require('./routes');
const app = express()

const PORT = 4242;


app.use(express.urlencoded({
	extended: true
}))

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`app listening at http://localhost:${port}`)
});