import './App.css';
import Banner from './components/Banner';
import useUserIp from './hooks/useUserIp';


function App() {
  useUserIp()

  return (<>
    <Banner />
  </>
  );
}


export default App;
