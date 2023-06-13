
import './App.css';
import CricketComponent from './components/CricketComponent';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)


  const fetchApi = () => {
    setLoading(true)
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=b5333e88-d8aa-485a-a582-c95d97dee12b&offset=0')
      .then(response => response.json())
      .then(res => setArticles(res.data));
    setLoading(false)
  }

  useEffect(() => {

    fetchApi()

  }, [])



  return (
    <div className="app">
     
      {
        loading ? <Spinner /> : ''
      }

      {
        articles && articles.map((item) => {

          return (

            <CricketComponent item={item} />
          )


        }

        )

      }

      {/* <CricketComponent/> */}


    </div>
  );
}

export default App;
