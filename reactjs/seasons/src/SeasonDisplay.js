import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hot in the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, mouth) => {
  if(mouth > 2 && mouth < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

export default class SeasonDisplay extends React.Component {
  
  render() {
    const { lat, long} = this.props;
    const season = getSeason(this.props.lat, new Date().getMonth);
    console.log(season);
    const{text, iconName} = seasonConfig[season]; 
    console.log(lat, long);
    
    return(
      <div  className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h3>{text}</h3>
        <i className={`icon-right massive ${iconName} icon`}/>
      </div>
    );
  }
  
} 

