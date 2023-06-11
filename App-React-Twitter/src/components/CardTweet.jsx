import { FaHeart, FaTrash } from "react-icons/fa";
import EditarTweet from "./EditarTweet";
import { useState } from "react";

function CardTweet({ data, actualizarTweets }) {
  const [eliminarTweet, setEliminarTweet] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [favorito, setFavorito] = useState(data.favorito);

  const handleDeleteClick = (tweet) => {
    setEliminarTweet(tweet);
    setIsOpen(true);
  };

  const handleFavClick = () => {
    setFavorito(!favorito);
    data.favorito = !favorito;

    const dataExistente = localStorage.getItem("tweets");
    if (!dataExistente) {
      console.log("No se encontraron tweets en localStorage");
      return;
    }
    const tweets = JSON.parse(dataExistente);
    const tweetIndex = tweets.findIndex((t) => t.id === data.id);
    if (tweetIndex === -1) {
      console.log("No se encontró el tweet en localStorage");
      return;
    }
    tweets[tweetIndex].favorito = data.favorito;
    localStorage.setItem("tweets", JSON.stringify(tweets));
  };

  const handleDeleteTweet = async () => {
    const dataExistente = localStorage.getItem("tweets");
    console.log(dataExistente);
    if (!dataExistente) {
      console.log("No se encontraron tweets en localStorage");
      return;
    }
    const tweets = JSON.parse(dataExistente);
    const tweetAEditar = tweets.findIndex((t) => t.id === data.id);
    if (!tweetAEditar === -1) {
      console.log("No se encontro tweet en localStorage");
      return;
    }
    tweets.splice(tweetAEditar, 1);
    localStorage.setItem("tweets", JSON.stringify(tweets));
    actualizarTweets();
  };
  return (
    <div>
      <section className="text-lg text-left p-4 border-b-2 border-white font-Quicksand h-auto">
        <h1 className="border-b-2 pb-2 font-bold text-xl">{data.usuario}</h1>
        <p className="break-words mt-2">{data.tweet}</p>

        <div className="flex items-center mt-3">
          <p className="text-sm text-gris mr-2 ">{data.fechaCreacion}</p>
          <p className="mr-2 text-gris">·</p>
          <p className="text-sm text-gris">{data.horaCreacion}</p>
        </div>

        <div className="flex justify-end w-full">
          <FaHeart
            className={`mr-2 cursor-pointer ${
              favorito ? "text-[#6D6CBC]" : ""
            }`}
            onClick={handleFavClick}
          />
          <FaTrash
            className="cursor-pointer mr-2"
            onClick={() => handleDeleteClick(data.id)}
          />

          {isOpen && (
            <div className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30">
              <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl">
                <p className="text-center mb-5">
                  Esta segur@ de eliminar este tweet?
                </p>
                <div className="flex mb-4">
                  <button
                    className="bg-azulGris p-2 rounded-md text-base mr-3"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Volver Atras
                  </button>
                  <button
                    className="bg-azulGris p-2 rounded-md text-base mr-3"
                    onClick={() => {
                      handleDeleteTweet();
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )}
          <EditarTweet data={data} actualizarTweets={actualizarTweets} />
        </div>
      </section>
    </div>
  );
}

export default CardTweet;
