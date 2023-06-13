
import './App.css';
import CricketComponent from './components/CricketComponent';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import Heading from './components/Heading';
// import articles from './components/ApiData';

function App() {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  // 5092356a-0e11-40be-b547-d1ab8a32c39c

  const fetchApi = () => {
    setLoading(true)
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=5092356a-0e11-40be-b547-d1ab8a32c39c')
      .then(response => response.json())
      .then(res => setArticles(res.data));
    setLoading(false)
  }

  useEffect(() => {

    fetchApi()

  }, [])

  return (
    <div className="app">
      <Heading />
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
    </div>
  );
}

export default App;
