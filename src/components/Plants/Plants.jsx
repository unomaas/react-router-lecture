import React from 'react';
import {useHistory} from 'react-router-dom';


let plants = [
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg",
  "https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg",
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg",
  "https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg"
]


function Plants() {

  // Browser history: 
  const history = useHistory();

  const handleHome = () => {
    alert("You are heading home!");
    // Change location sent, syntax is history.push('WHERE YOU WANNA GO'):
    history.push('/');
  }

  const handleClick = () => {
    // GO BACK:
    history.goBack();
  }

  return (
    <div>
      <h1>PLANTS</h1>
      {plants.map((plant, i) => 
        <img 
          key={i}
          src={plant}
        />
      )}
      <br />
      {/* Change programmatically: */}
      <button onClick={handleHome}>GO HOME</button>
      <button onClick={handleClick}>GO BACK</button>
    </div>
  );
}

export default Plants;
