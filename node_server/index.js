import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello k8s')
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});