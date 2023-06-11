import CardTweet from "./CardTweet"
import React,{ useState, useEffect } from "react";
import CrearTweet from "./CrearTweet";


function Tweets(){
    const [tweets, setTweets] = useState(null)

    useEffect(() => {
        getTweets();
    }, []);

    const getTweets = async() => {
        const dataExistente= await localStorage.getItem('tweets')
        setTweets(JSON.parse(dataExistente))
    };


    return(
        <div>
            <section className="text-white font-Kanit font-bold  text-center text-3xl m-5">
                <h1 className="m-5">Tweets</h1>

                <section className="bg-azulOscuro2 rounded-t-lg ">
                    {tweets && tweets.map((data)=>(
                        <CardTweet key={data.id} data={data} actualizarTweets={getTweets}/>
                    ))}
                </section>
            </section>
            <CrearTweet actualizarTweets={getTweets}/>
        </div>
    )
}

export default Tweets;