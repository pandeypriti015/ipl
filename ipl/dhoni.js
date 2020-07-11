function ChennaiSuperKingmatcheswon(matches) {
    const result = {};
    const resultError=[]
    for (let match of matches) {
      const season = match.season;
      let obj={}
      if (result[season]) {
          if(match.winner=="Chennai Super Kings")
           result[season] += 1;
      } else {
        if(match.winner=="Chennai Super Kings")
        result[season] = 1;
      }
    }
   
    return result;
  }
  
  module.exports =ChennaiSuperKingmatcheswon;
  