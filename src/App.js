import React, { createContext, useState } from 'react';
import Home from './components/Home';

export const scenarioDataContext = createContext();

function App() {

  const [scenarioData, setScenarioData] = useState({
    division: { name: '' },
    district: {},
    places: [''],
    ourPackages: []
  })

  return (
    <scenarioDataContext.Provider value={[ scenarioData, setScenarioData ]}>
      <Home/>
    </scenarioDataContext.Provider>
  );
}

export default App;
