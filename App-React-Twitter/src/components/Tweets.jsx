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
        let parseados=JSON.parse(dataExistente)
        setTweets(parseados.reverse())
    };


    return(
        <div className="flex flex-col mb-10">
            <section className="text-white font-Kanit  text-center text-3xl m-5 h-full  flex-grow mb-16">

            <div className="flex justify-around text-sm border-b-2 font-Kanit ">
                <button className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4">Todos los tweets</button>
                <button className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4">Tweets Favoritos</button>
            </div>
                <h1 className="m-5 font-bold">Tweets</h1>

                <section className="bg-azulOscuro2 rounded-t-lg w-full h-full">
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