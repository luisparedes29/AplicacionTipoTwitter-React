import { useState } from "react";
import { FaPencilAlt, FaWindowClose } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

function EditarTweet({ data, actualizarTweets }) {
  // props es la data que viene desde CardTweet. A su vez, data se pasa a CardTweet desde Tweets
  const [tweet, setTweet] = useState(data.tweet);
  const [isOpen, setIsOpen] = useState(false);
  const [contadorCaracteres, setContadorCaracteres] = useState(
    data.tweet.length
  );
  const [excedeLimite, setLimiteCaracteres] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tweet) {
      toast.error("No puedes dejar tu tweet vacío");
      return;
    }

    //Recuperamos datos de localstorage
    const dataExistente = localStorage.getItem("tweets");

    if (!dataExistente) {
      console.log("No se encontraron tweets en localStorage");
      return;
    }

    // Parseamos los datos guardados en localStorage
    const tweets = JSON.parse(dataExistente);

    //Localizamos el tweet que deseamos edita segun el ID que recibimos del prop data
    const tweetAEditar = tweets.findIndex((t) => t.id === data.id);

    //Validacion del indice, para ver si encuentra un id que coincida en localStorage
    if (!tweetAEditar === -1) {
      console.log("No se encontro tweet en localStorage");
      return;
    }

    //Cambiar ka descripcion del tweet
    tweets[tweetAEditar].tweet = tweet;

    // Guardamos la edicion en localstorage
    localStorage.setItem("tweets", JSON.stringify(tweets));
    actualizarTweets();
    toast.success("Se ha editado correctamente tu tweet!");
    setIsOpen(false);
  };

  const resetearForm = () => {
    setTweet(data.tweet);
  };

  return (
    <div>
      <div className="cursor-pointer ">
        <FaPencilAlt className="ur:text-3xl" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <form
          className="fixed flex justify-center  items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-40  "
          onSubmit={handleSubmit}
        >
          <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center font-Quicksand p-5 w-[90%] rounded-xl sm:w-[70%] md:w-[60%] lg:w-[40%] ur:w-[30%]">
            <div className="flex justify-end w-full ">
              <FaWindowClose
                className=" text-2xl cursor-pointer lg:text-3xl"
                onClick={() => {
                  setIsOpen(false);
                  resetearForm();
                }}
              />
            </div>

            <label className="mb-3 text-lg w-full sm:text-2xl 2xl:text-3xl">Tweet</label>
            <textarea
              className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold h-[30vh] w-full sm:text-xl lg:h-[45vh] ur:text-2xl"
              type="text"
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
                setContadorCaracteres(e.target.value.length);
                setLimiteCaracteres(e.target.value.length > 350);
              }}
            />
            <p className="ur:text-2xl">{contadorCaracteres}/350 caracteres</p>
            {excedeLimite && (
              <p className="font-bold text-red-500">
                Excede el límite de caracteres
              </p>
            )}
            <button
              className={`bg-${
                excedeLimite ? "azulOscuro1" : "azulGris"
              } w-[40%] text-xl p-2 rounded-lg mt-4 2xl:text-2xl 2xl:w-[30%] `}
              disabled={excedeLimite}
            >
              Editar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditarTweet;
