import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const api = 'https://kitsu.io/api/edge/trending/anime'

  const [series, setSeries] = useState([])

  useEffect(() => {
    getSeries()
  }, [])

  function getSeries(){
    fetch (api)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      setSeries(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Anime App
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis series favoritas de anime
        </a>
      </header>
      <section className='anime-wrapper'>
        {
          series.map(serie => {
            return(
              <div key={serie.id}>
                <h1 width={'50%'}>{serie.attributes.titles.en}</h1>
                <img src={serie.attributes.posterImage.small}></img>
              </div>
            )
          })
        }
      </section>
    </div>
    );
}

export default App;
