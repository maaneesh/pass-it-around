const express = require("express");
const app = express();
const port = 5006;


let bottles = 99;

app.get('/', (req, res) => {
   
  res.send(`
  <h2> 99 bottles of soda on the wall</h2>
  <h2><a href="/98"> Take one down pass it around. </a></h2>
  `);
});

app.get('/:number_of_bottles', (req, res) => {

    const currentNumberOfBottles = req.params.number_of_bottles;
    const updatedNumberOfBottles = currentNumberOfBottles-1;

    let passItAround = `<h2><a href="/${updatedNumberOfBottles}"> Take one down pass it around. </a> </h2>`;

    if( updatedNumberOfBottles == 0){
        res.send(`
            <h2> ${currentNumberOfBottles} bottles of soda on the wall</h2>
            <h2><a href="/">Start Over!</a></h2>
        `)
    }else {
        res.send(`
        <h2> ${currentNumberOfBottles} bottles of soda on the wall</h2>
        ${passItAround}
        `)
    }
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
