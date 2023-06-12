import Header from "./components/Header";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";
import ErrorBoundary from "./utilities/ErrorBoundaries";
import CrearTweet from "./components/CrearTweet";
import React, { useState, useEffect } from 'react';

function App() {
  const [tweets, setTweets] = useState(null)

  useEffect(() => {
      getTweets();
  }, []);

  const getTweets = async() => {
      const dataExistente= await localStorage.getItem('tweets')
      let parseados=JSON.parse(dataExistente)
      setTweets(parseados.reverse())
  };
    return (
        <div className="bg-azulGris min-h-screen flex-grow">
            <Header />
            <ErrorBoundary fallback = {"Algo salió mal. Inténtalo de nuevo más tarde"}>
                <Tweets tweets={tweets} actualizarTweets={getTweets} />
                <CrearTweet actualizarTweets={getTweets}/>
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default App;
