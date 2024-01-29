import express from 'express';
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/numbers', (req, res) => {
    let { lower, upper, count, col } = req.query;
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    let rangeSize = upper - lower + 1;
    let generator = () => Math.ceil(Math.random() * rangeSize) + lower - 1;
    let results = Array(Number(count)).fill(0).map(generator)
    let diceType;
    if (lower === 1 && [4, 6, 8, 10, 12, 20].includes(upper)) {
        diceType = upper;
    }
    
    let index = 0;
    const matrix = results.reduce((matrix, result) => {
        console.log(matrix[index], index);
        if (matrix[index].length === parseInt(col)) {
            index++;
            matrix.push([result]);
            return matrix;
        } 
        matrix[index].push(result);
        return matrix;
    }, [[]]);
    //let counts = {};
    //for (let result of results) {
    //    counts[result] = (counts[result] || 0) + 1; 
    //}
    res.render('numbers', { lower, upper, count, col, matrix, diceType });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
