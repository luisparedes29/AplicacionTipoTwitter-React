import CardTweet from './CardTweet';
import React, { useState } from 'react';

function Tweets(props) {
    const [render, setRender] = useState(true);

    let result;

    if (render) {
        //Si el boton de tweets esta presionado el estado es true, aunque es true por defecto;
        result = props.tweets;
    } else {
        //Si el boton de favoritos es presionado, coloca el estado render en false y renderiza solo los tweets con el valor de favorite en true
        result = props.tweets.filter((data) => {
            if (data.favorito) {
                return data;
            }
        });
    }

    return (
        <div className="flex flex-col mb-10">
            <section className="text-white font-Kanit  text-center text-3xl m-5 h-full  flex-grow mb-16">
                <div className="flex justify-around text-sm border-b-2 font-Kanit ">
                    <button
                        className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4"
                        onClick={() => setRender(true)}
                    >
                        Todos los tweets
                    </button>
                    <button
                        className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4"
                        onClick={() => setRender(false)}
                    >
                        Tweets Favoritos
                    </button>
                </div>
                <h1 className="m-5 font-bold">Tweets</h1>

                <section className="bg-azulOscuro2 rounded-t-lg w-full h-full">
                    {result &&
                        result.map((data) => (
                            <CardTweet
                                key={data.id}
                                data={data}
                                actualizarTweets={props.actualizarTweets}
                            />
                        ))}
                </section>
            </section>
        </div>
    );
}

export default Tweets;
