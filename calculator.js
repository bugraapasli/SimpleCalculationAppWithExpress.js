const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req,res) {

   res.sendFile(__dirname + "/index.html");
});

app.post('/', (req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2 ;
    res.send("The result of the calculation of addition is " + result);
});

app.get('/bmiCalculation', (req,res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculation", (req,res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    const bmi = weight / Math.pow(height,2);

    res.send("Your bmi is " + bmi);

});

app.listen(port, ()=>{
    console.log("example app listening on port " + port);
});