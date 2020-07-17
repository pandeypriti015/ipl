function extraRunPerTeam(match, match1,season) {
  
  let matchesId = match.reduce((matchId, match) => {
    if (match.season == season) {
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
  return extraRunsPerTeam;
}
module.exports = extraRunPerTeam;
