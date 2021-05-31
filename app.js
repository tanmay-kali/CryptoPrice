const express = require('express');
const https = require("https");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))



app.get('/', function(req, res){
        res.sendFile(__dirname+"/index.html");
    }
)

app.post('/', function (req, res) {
    var cname = req.body.crypto
    var coin = cname;
    url="https://api.coingecko.com/api/v3/simple/price?ids="+coin+"&vs_currencies=usd"

    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const coinData= JSON.parse(data);
            const s = JSON.stringify(coinData)
            console.log(s.substring(coin.length+5,s.length-2));
            //res.write("<h1> The price of" +coin+" is $</h1>" )
            res.send("<h1> The price of "+cname+" is $"+s.substring(coin.length+11,s.length-2)+"</h1>")
    })

})
})

var coin = "binancecoin"
url="https://api.coingecko.com/api/v3/simple/price?ids="+coin+"&vs_currencies=usd"

https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
       const coinData= JSON.parse(data);
       const s = JSON.stringify(coinData)
       //const price = coinData.;
       console.log(s.substring(coin.length+5,s.length-2));
    })

})




app.listen(port, () => console.log(`Server is running on ` + port));


// const object = {
//     name: "Angela",
//     favouriteFood: "Ramen"
// }

// const test = JSON.stringify(object);