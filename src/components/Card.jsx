import React from 'react' //rafce and then enter

const Card = (props) => {
  return (
    <div> 
    <h2>{props.name}</h2>
    <img src={props.pic} alt='aa'/>
      <h2>{props.roll}</h2>
      <img src={props.pic} alt='aa'/>
      
      </div>
  );
};

export default Card