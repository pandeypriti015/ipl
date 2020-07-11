
const winnerList = {};

function numberofmatches(matches) {

  const matchesWonByTeam = matches.reduce((matchesWon, match) => {
    console.log(match.season)
    if (matchesWon[match.season]) {
      matchesWon[match.season][match.winner] = (matchesWon[match.season][match.winner] || 0) + 1 || {};
      winnerList[match.winner] = 0;
    } else { matchesWon[match.season] = {}; }
    return matchesWon;
  }, {});
  const finalResult = {};
  finalResult.teamNames = winnerList;
  finalResult.Data = matchesWonByTeam;

  return finalResult;
}


module.exports = numberofmatches;