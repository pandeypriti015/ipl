function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

// -----------------MatchesWonPerTeam--------------


function fetchmatchesWOn() {
  fetch("./matchesWon.json")
    .then(r => r.json())
    .then(data => {
    
      visualizeDataWonmatches(data)
    })
}
fetchmatchesWOn()

function visualizeDataWonmatches(data) {
  visualizeMatcheswonperteam(data)
}

function visualizeMatcheswonperteam(data) {

  var finalArray = [];
  var returnArray = {};
  var data1 = data.matchesPlayedPerYear['Data'];
  var year = Object.keys(data1);
  let matches = Object.values(data1);
  var noOfMatches = [];
  var k = 0;
  finalArray = Object.keys(data.matchesPlayedPerYear['teamNames']);
  var value = Object.values(matches);
  for (var i = 0; i < finalArray.length; i++) {
    for (var j = 0; j < Object.keys(data1).length; j++) {
      if (value[j][finalArray[i]]) {
        noOfMatches[k] = value[j][finalArray[i]]
      }
      else {
        noOfMatches[k] = 0;
      }
      k++;
    }
    returnArray[finalArray[i]] = noOfMatches;
    noOfMatches = [];
    k = 0;
  }
  let season = year
 
  let teamNames = Object.keys(returnArray)
  let teamArray = Object.values(returnArray)
 
 

  // draw chart
  Highcharts.chart("number-of-matches-won", {
    chart: {
      type: "column"
    },
    title: {
      text: "2.Matches won of all teams over all the years of IPL."
    },
    xAxis: {
      categories: season,
      type: 'category',
      allowDecimals: false,
      title: {
        text: "Years"
      }
    },
    yAxis: {
      title: {
        text: "Total number of matches."
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
  
    series: [{
      name: teamNames[0],
      data: teamArray[0]
    },
    {
      name: teamNames[1],
      data: teamArray[1]
    },

    {
      name: teamNames[1],
      data: teamArray[1]
    },
    {
      name: teamNames[2],
      data: teamArray[2]
    },
    {
      name: teamNames[3],
      data: teamArray[3]
    },
    {
      name: teamNames[4],
      data: teamArray[4]
    },
    {
      name: teamNames[5],
      data: teamArray[5]

    },
    {
      name: teamNames[8],
      data: teamArray[8]
    },
    {
      name: teamNames[9],
      data: teamArray[9]
    },
    {
      name: teamNames[10],
      data: teamArray[10]
    },
    {
      name: teamNames[11],
      data: teamArray[11]
    },
    {
      name: teamNames[12],
      data: teamArray[12]
    },
    {
      name: teamNames[13],
      data: teamArray[13]
    },

    {
      name: teamNames[14],
      data: teamArray[14]
    },
  ]
  }
  );
}

// ---------------MatchesPlayedPerYear-----------

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}
fetchextraRun


function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }



  Highcharts.chart('matches-played-per-year', {
    chart: {
      type: 'column'
    },
    title: {
      text: '1. Matches played per year'
    },
  
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Matches'
    },
    series: [{
      name: 'Population',
      data: seriesData,
  
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });

}


// ------------------ExtraRun--------------------


function fetchextraRun() {
  fetch("./extraRun.json")
    .then(r => r.json())
    .then(data => {
      visualizeDataExtraRun(data)
    })
}


fetchextraRun()

function visualizeDataExtraRun(data) {
  visualizeDataExtraRun(data)
}

function visualizeDataExtraRun(data){
  console.log(data);


  Highcharts.chart('extra-run', {
    chart: {
      type: 'column'
    },
    title: {
      text: '3.Extra Runs conceded in 2016'
    },
  
    xAxis: {
      categories: Object.keys(data),
      type: 'category',
      labels: {
        rotation: -45,
       
          enabled: true,
          
        
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Extra Runs'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Runs'
    },
    series: [{
      name: 'Runs',
      data: Object.values(data),
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });

}



// --------------economical bowlers-----------

// --- For the year 2015, plot the top 10 economical bowlers along with their economy rates.


function fetchbowler() {
  fetch("./economicalBowlers.json")
    .then(r => r.json())
    .then(data => {
      visualizeDataBolwers(data)
    })
}


fetchbowler()

function visualizeDataBolwers(data) {

  data=Object.fromEntries(
    Object.entries(data).slice(0, 20)
)
Highcharts.chart('economical-bowlers', {
  chart: {
    type: 'column'
  },
  title: {
    text: '4.Top 10 economical bowlers in 2015'
  },

  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Economy'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Economy in 2015'
  },
  series: [{
    name: 'Economy',
    data: Object.values(data),
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
});
 
// Highcharts.chart('economical-bowlers',{
//   chart: {
//       type: "column"
//   },
//     title: {
//         text: "4.Top economical bowler"
//     },
//     xAxis: {
//         // categories: Object.keys(data),
//         type: 'category',
//         allowDecimals: false,
//         title: {
//             text: ""
//         },
//         labels: {
//           rotation: -45,
//           style: {
//             fontSize: '13px',
//             fontFamily: 'Verdana, sans-serif'
//           }
//         }
//     },
//     yAxis: {
//         title: {
//             text: "Economy"
//         }
//     },
//     series: [{
//         name: 'Economy',
//         data: Object.values(data)
//     }]
// }); 
 }



//  ------------------------------5.dhoni team----------------

function fetchdhoniteam() {
  fetch("./dhoni.json")
    .then(r => r.json())
    .then(data => {
      visualizeDatadhoniteam(data)
    })
}
fetchdhoniteam()
function visualizeDatadhoniteam(data){
  let arr=[]
  for(let match in data){
   
    let obj={}
    obj["name"]=match
    obj["y"]=data[match]
    arr.push(obj)

  }
  Highcharts.chart('dhoni-team', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '5.Story:Chennai Super Kings won matches in particular year'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.0f}'
        }
      }
    },
    series: [{
      name: 'Matches',
      colorByPoint: true,
      data: arr
    }]
  });

}