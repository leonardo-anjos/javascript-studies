import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hot the beach!'",
    iconName: "sun outline"
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, long, mouth) => {
  if(mouth > 2 && mouth < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  // console.log('latitude: ', props.lat, '\nlongitude: ', props.long);
  const season = getSeason(props.lat, props.long, new Date().getMonth);
  console.log(season);
  const{text, iconName} = seasonConfig[season]; 

  return(
    <div  className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h3>{text}</h3>
      <i className={`icon-rigth massive ${iconName} icon`}/>
    </div>
  );
} 

export default SeasonDisplay;