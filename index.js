const express = require('express')

const app = express()

const port = 4242;


app.use(express.urlencoded({
	extended: true
}))

app.post('/bar', function(req,res) {
	console.log(req.body.foo);
	res.send(req.body.foo);
});


app.get('/foo',function(req,res) {
	res.json({'name':'brandon', 'school': 'etna'});
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`)
});