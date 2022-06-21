console.clear();

const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/example', (req, res) => {
	const directory = path.join(__dirname, 'public', 'index.html');
	console.log(directory);
	res.sendFile(directory);
})

app.listen(3000, () => {
	console.log('run');
})