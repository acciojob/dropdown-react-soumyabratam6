import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const states = [{
  name : "Madhya Pradesh",
  description:"Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
  cities :[{
    name : "Indore",
    description:"Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
    landmarks :[{
      name : "Mhow",
      description:"Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",        
    },{
      name : "Dewas",
      description:"Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
    }]
  },{
    name : "Bhopal",
    description:"Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
    landmarks :[{
      name : "MANIT",
      description:"Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
    },{
      name: "Berasia",
      description:"Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
    }]
  },{
    name : "Gwalior",
    description:"Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
    landmarks :[{
      name : "Ajaypur",
      description:"Little less known city Ajaypur.",
    }]
  }]
}];

function App() 
{
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const handleStateChange = (e) => {
    setSelectedStateIndex(e.target.value);
    setSelectedCityIndex(0);  // Reset City and Landmark on State change
    setSelectedLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    setSelectedCityIndex(e.target.value);
    setSelectedLandmarkIndex(0);  // Reset Landmark on City change
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmarkIndex(e.target.value);
  };

  const selectedState = states[selectedStateIndex];
  const selectedCity = selectedState.cities[selectedCityIndex];
  const selectedLandmark = selectedCity.landmarks[selectedLandmarkIndex];

  return (
    <div id="main" className="container">
      <h1 id="state-title">Madhya Pradesh</h1>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select id="state" className="form-control" value={selectedStateIndex} onChange={handleStateChange}>
          {states.map((state, index) => (
            <option key={index} value={index}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select id="city" className="form-control" value={selectedCityIndex} onChange={handleCityChange}>
          {selectedState.cities.map((city, index) => (
            <option key={index} value={index}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="landmark">Landmark:</label>
        <select id="landmark" className="form-control" value={selectedLandmarkIndex} onChange={handleLandmarkChange}>
          {selectedCity.landmarks.map((landmark, index) => (
            <option key={index} value={index}>
              {landmark.name}
            </option>
          ))}
        </select>
      </div>

      <div id="state-name">
        <h3>State: {selectedState.name}</h3>
        <p id="state-description">{selectedState.description}</p>
      </div>

      <div id="city-name">
        <h3>City: {selectedCity.name}</h3>
        <p id="city-description">{selectedCity.description}</p>
      </div>

      <div id="landmark-name">
        <h3>Landmark: {selectedLandmark.name}</h3>
        <p id="landmark-description">{selectedLandmark.description}</p>
      </div>
    </div>
  );
}

export default App;
