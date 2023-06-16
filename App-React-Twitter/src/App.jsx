import Header from './components/Header';
import Tweets from './components/Tweets';
import Footer from './components/Footer';
import ErrorBoundary from './utilities/ErrorBoundaries';
import CrearTweet from './components/CrearTweet';
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@apollo/client';
import { GET_TWEETS } from './graphql/tweets';

function App() {

    const { loading, error, data } = useQuery(GET_TWEETS);
    console.log(loading,error,data)


    if (loading) return <p>loading</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>no data</p>;


    return (
        <div className="bg-azulGris min-h-screen flex-grow">
            <Toaster position="top-center" />
            <Header />
            <ErrorBoundary
                fallback={'Algo salió mal. Inténtalo de nuevo más tarde'}
            >
                <Tweets tweets={data.tweets} />
                <CrearTweet />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default App;
