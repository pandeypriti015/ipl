const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const numberOfMatchesperteam = require("./ipl/numberofmatcheswon");
const extraRun = require('./ipl/extraRun.js');
const economicalBowlers =require("./ipl/economical");
const dhoniteam = require("./ipl/dhoni.js");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_WONMATCHES = './public/matchesWon.json';
const JSON_EXTRARUNS ='./public/extraRun.json';
const JSON_ECONOMICAL='./public/economicalBowlers.json';
const JSON_DHONITAEM='./public/dhoni.json';
const DELIVERIES_FILE_PATH ='./csv_data/deliveries.csv';


function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      console.log(matches)
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);

      let result_4 = dhoniteam(matches);
      saveteamdhoni(result_4);
    });
  csv()
    .fromFile(MATCHES_FILE_PATH )
    .then(matches => {
     
    let result_1 = numberOfMatchesperteam(matches);
    savenumberOfMatchesperteam(result_1);
 
  csv()
     .fromFile(DELIVERIES_FILE_PATH)
     .then(deliveries => {
       let result_2 = extraRun(matches,deliveries);
       saveExtraRuns(result_2);
    });
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      console.log(deliveries)
      let result_3 = economicalBowlers(matches,deliveries);
      saveeconomicalBowlers(result_3);


    });
    
  });
}

function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function savenumberOfMatchesperteam(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_WONMATCHES, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveExtraRuns(result) {
  
  const jsonString = JSON.stringify(result);
  fs.writeFile(JSON_EXTRARUNS, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveeconomicalBowlers(result) {
  
  const jsonString = JSON.stringify(result);
  fs.writeFile(JSON_ECONOMICAL, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });

}


function saveteamdhoni(result) {
  
  const jsonString = JSON.stringify(result);
  fs.writeFile(JSON_DHONITAEM, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();


 
 