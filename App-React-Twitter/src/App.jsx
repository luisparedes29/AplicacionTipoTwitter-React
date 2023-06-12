import Header from "./components/Header";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";
import ErrorBoundary from "./utilities/ErrorBoundaries";
import CrearTweet from "./components/CrearTweet";
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    const dataExistente = await localStorage.getItem("tweets");
    let parseados = JSON.parse(dataExistente);
    setTweets(parseados.reverse());
  };
  return (
    <div className="bg-azulGris min-h-screen ">
      <Toaster position="top-center" />
    <div className="flex flex-col flex-grow">
    <Header />
      <ErrorBoundary fallback={"Algo salió mal. Inténtalo de nuevo más tarde"}>
        <Tweets tweets={tweets} actualizarTweets={getTweets} />
        <CrearTweet actualizarTweets={getTweets} />
      </ErrorBoundary>
    </div>
      <Footer />
    </div>
  );
}

export default App;
