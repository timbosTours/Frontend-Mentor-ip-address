
import './App.css';
import Navbar from './components/Navbar';

function App() {

  console.log(process.env.REACT_APP_API_KEY)
  
  return (<> 
      <Navbar />
  </>
  );
}


export default App;
