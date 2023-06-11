import Header from "./components/Header";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";
import ErrorBoundary from "./utilities/ErrorBoundaries";
function App() {
    return (
        <div className="bg-azulGris min-h-screen flex-grow">
            <Header />
            <ErrorBoundary fallback = {"Algo salió mal. Inténtalo de nuevo más tarde"}>
                <Tweets />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default App;
