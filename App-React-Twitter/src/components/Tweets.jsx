import CardTweet from "./CardTweet";
import React, { useState } from "react";

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
    <div className="w-full mb-10 min-h-[100vh]">
      <section className="text-white font-Kanit text-center text-3xl m-5 min-h-screen flex-grow flex flex-col items-center 2xl:text-4xl ur:text-5xl">
        <div className="flex justify-around text-sm border-b-2 font-Kanit w-full sm:text-lg">
          <button
            className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4 2xl:text-2xl ur:text-3xl"
            onClick={() => setRender(true)}
          >
            Todos los tweets
          </button>
          <button
            className="bg-azulOscuro2 font-semibold p-3 rounded-lg mb-3 hover:border-b-4 focus:border-b-4 2xl:text-2xl ur:text-3xl"
            onClick={() => setRender(false)}
          >
            Tweets Favoritos
          </button>
        </div>
        <h1 className="m-5 font-bold">Tweets</h1>

        <section className="bg-azulOscuro2 rounded-t-lg w-full h-full sm:w-[60%] lg:w-[50%] 2xl:w-[45%]">
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
