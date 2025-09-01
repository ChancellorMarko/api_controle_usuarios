import Express from 'express'

const app = Express();

app.get('/user', (req, res) => {
    res.send('Ok!');
})

app.listen(3000);