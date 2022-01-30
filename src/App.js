import React, { createContext, useState } from 'react';
import Home from './components/Home';

export const scenarioDataContext = createContext();
export const cookieDataContext = createContext();

function App() {

  const [cookieData, setCookieData] = useState([]);

  const [scenarioData, setScenarioData] = useState({
    division: { name: '' },
    district: {},
    places: [''],
    ourPackages: []
  })
  
  return (
    <scenarioDataContext.Provider value={[ scenarioData, setScenarioData ]}>
      <cookieDataContext.Provider value={[ cookieData, setCookieData ]}>
        <Home/>
      </cookieDataContext.Provider>
    </scenarioDataContext.Provider>
  );
}

export default App;