import '../resources/styles/App.css';
import '../resources/styles/style.css';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Global from '../components/Global';
import Countries from '../components/Countries';
import { AppContext } from '../context/AppContext';
import { useAxiosGet } from '../hooks/useAxiosGet';
import Loading from '../components/common/Loading';


function App() {
  const { data, error, loading } = useAxiosGet();

  if(error){
    return  <span>Error: {error}</span>
  } else {
    return (
      <>
        {loading ?  <Loading /> : (
          <AppContext.Provider className="App" value={data}>
            <Navbar />
            <Intro />
            <Global />
            <Countries />
          </AppContext.Provider>
        )}
      </>
    )
  }
}

export default App;
