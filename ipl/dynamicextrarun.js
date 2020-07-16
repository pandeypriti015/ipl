function extraRunPerTeam(match, match1) {
    let arr=[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
    let finalResult={}
    for(let season in arr){
        console.log(season)
    
      let matchesId = match.reduce((matchId, match) => {
        if (match.season == arr[season]) {
          matchId.push(match.id)
        }
        return matchId
      }, [])
      let extraRunsPerTeam= match1.reduce((extraRunPerTeam, match) => {
        if (matchesId.includes(match.match_id)) {
          extraRunPerTeam[match.batting_team] = (extraRunPerTeam[match.batting_team] || 0) + parseInt(match.extra_runs)
        }
        return extraRunPerTeam
      }, {})
      finalResult[arr[season]]=extraRunsPerTeam
    }
      return finalResult;
    }
    module.exports = extraRunPerTeam;