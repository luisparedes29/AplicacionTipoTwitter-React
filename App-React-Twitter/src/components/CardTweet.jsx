import { FaHeart, FaTrash } from "react-icons/fa";
import EditarTweet from "./EditarTweet";
import { useState } from "react";

function CardTweet({ data,actualizarTweets }) {
    const [eliminarTweet,setEliminarTweet]= useState(null)
    const [isOpen,setIsOpen]=useState(false)

    const handleDeleteClick = (tweet) => {
        setEliminarTweet(tweet);
        setIsOpen(true);
    };

    const handleDeleteTweet = async () => {
        const dataExistente = localStorage.getItem('tweets');
        console.log(dataExistente);
        if (!dataExistente) {
            console.log('No se encontraron tweets en localStorage');
            return;
        }
        const tweets = JSON.parse(dataExistente);
        const tweetAEditar = tweets.findIndex((t) => t.id === data.id);
        if (!tweetAEditar === -1) {
            console.log('No se encontro tweet en localStorage');
            return;
        }
        tweets.splice(tweetAEditar, 1);
        localStorage.setItem('tweets', JSON.stringify(tweets));
        actualizarTweets();
    };
    return (
        <div>
            <section className="text-lg text-left p-4 border-b-2 border-white font-Quicksand">
                <h1>{data.usuario}</h1>
                <p>{data.tweet}</p>

                <div className="flex justify-end w-full">
                    <FaHeart className="mr-2 cursor-pointer" />
                    <FaTrash className="cursor-pointer mr-2" onClick={()=>handleDeleteClick(data.id)} />
                    <EditarTweet data={data} actualizarTweets={actualizarTweets} />
                </div>
            </section>
        </div>
    );
}

export default CardTweet;
