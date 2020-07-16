function showData() {
    const season = document.getElementById("seasons1").value;
    fetch(`./extra-run.json/`)
      .then(resp => resp.json())
      .then(response => {
          console.log(response)
          visualizeExtraRuns(response[season]);
        function visualizeExtraRuns(response) {
          const seriesData = [];
          for (let team in response) {
            seriesData.push([team, response[team]]);
          }
          Highcharts.chart("data-show", {
            chart: {
              type: "column"
            },
            title: {
              text: `Extra Runs Conceded By Each Team in ${season}`
            },
            subtitle: {
              text:
                'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
            },
            xAxis: {
              title: {
                text: "Teams"
              },
              type: "category"
            },
            yAxis: {
              min: 0,
              title: {
                text: "Extra Runs"
              }
            },
            series: [
              {
                name: "Extra Runs",
                data: seriesData
              }
            ]
          });
        }
      }).catch(err => {
  console.error('Error: ', err);
});
}