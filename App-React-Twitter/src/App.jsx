import Header from "./components/Header";
import Tweets from "./components/Tweets";
import CrearTweet from "./components/CrearTweet";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="bg-azulGris min-h-screen">
        <Header/>
        <Tweets/>
        <CrearTweet/>
        <Footer/>
    </div>
  )
}

export default App
