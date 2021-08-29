import { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import './App.css';

function App() {
  const [isVisible, setisVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>setisVisible(!isVisible)}>Toggle</button>
      { isVisible &&<ClassComponent />}
      {isVisible ? <FunctionalComponent />: null}


      {/*<FunctionalComponent />*/}
      
      {/*<ClassComponent />*/}
    </div>
  );
}

export default App;
