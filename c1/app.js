import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/add/:augend/:addend', (req, res) => {
    const result = (parseFloat(req.params.addend) + parseFloat(req.params.augend)).toString();
    res.send(result);
})

app.get('/subtract', (req, res) => {
    const result = (parseFloat(req.query.minuend) - parseFloat(req.query.subtrahend)).toString();
    res.send(result);
})

app.post('/multiply', (req, res) => {
    const result = (parseFloat(req.body.multiplier) * parseFloat(req.body.multiplicand)).toString();
    console.log(result);
    res.send(result);
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
