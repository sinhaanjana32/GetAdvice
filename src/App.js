import React from 'react';
import axios from 'axios';
import Particles from "react-particles-js";

import './App.css';



class App extends React.Component {

state = {advice: ''};

componentDidMount() {
this.fetchAdvice();
}

/* fetch advice is function inside a class and thats make it a method thatswhy no const*/
fetchAdvice = () => {
axios.get('https://api.adviceslip.com/advice')
.then((response)=>{
  const {advice} = response.data.slip /* destructuring */
  this.setState({advice});
})

.catch((error)=>{
console.log(error);

});


}


render(){

const {advice} =this.state

return (
  <>
  <div className="app">
  
  <Particles style={{position:'absolute', opacity:'1', }}
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />





  
  <div className="card">
    <h1 className="heading">{advice}</h1>
    <button className="Button" onClick={()=>this.fetchAdvice()}><span>Give Me Advice</span></button>
    </div>
  </div>
</>

)

}

}
export default App;
