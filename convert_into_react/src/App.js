import {Routes , Route} from 'react-router-dom';
import Calculator from './Projects/Calculator/Calculator';
import Todo from './Projects/Todo/Todo';
import Main from './Main';
import Ma from './Projects/Text/Ma';
import Ma2 from './Projects/Text/Ma2';
import Uni from './Projects/Text/Uni';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} /> 
        <Route path='/ma' element={<Ma />} />           
        <Route path='/ma2' element={<Ma2 />} />           
        <Route path='/uni' element={<Uni />} />           
      </Routes>
    </>

    
  );
}

export default App;
