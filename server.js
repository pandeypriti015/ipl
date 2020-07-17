const express = require('express')
const app = express()
const port = 5000
const csv = require("csvtojson");
const DynamicExtraRun = require('./ipl/dynamicextrarun')
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH ='./csv_data/deliveries.csv';
const index = './public/index.html'
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static('./public'));
app.get('/', (req, res) => res.sendFile('index.html', {
    root: path.join(__dirname, './public')
}));

// app.get('/matchesplayed', (req, res) => res.send(matchesPlayed.numberOfMatches(data)));
app.get('/extra-runs', (req, res) => {
    console.log(req.query.season)
    csv()
        .fromFile(MATCHES_FILE_PATH)
        .then(matches => {
            csv()
                .fromFile(DELIVERIES_FILE_PATH)
                .then(deliveries => {
                    let result3 = DynamicExtraRun(matches, deliveries,req.query.season)
                    console.log(result3)
                    res.send(JSON.stringify(result3))

                });
                
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))