import { useState } from "react";
import { FaPencilAlt, FaWindowClose } from "react-icons/fa";

function EditarTweet({ data, actualizarTweets }) {
    // props es la data que viene desde CardTweet. A su vez, data se pasa a CardTweet desde Tweets
    const [tweet, setTweet] = useState(data.tweet);
    const [isOpen, setIsOpen] = useState(false);
    const [contadorCaracteres, setContadorCaracteres] = useState(data.tweet.length);
    const [excedeLimite, setLimiteCaracteres] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tweet) {
            console.log("No puedes dejar tu tweet vacío");
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
        setIsOpen(false);
    };

    const resetearForm = () => {
        setTweet(data.tweet);
    };

    return (
        <div>
            <div className="cursor-pointer ">
                <FaPencilAlt className="" onClick={() => setIsOpen(!isOpen)} />
            </div>

            {isOpen && (
                <form className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30" onSubmit={handleSubmit}>
                    <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl">
                        <div className="flex justify-end w-full ">
                            <FaWindowClose
                                className=" text-2xl cursor-pointer lg:text-3xl"
                                onClick={() => {
                                    setIsOpen(false);
                                    resetearForm();
                                }}
                            />
                        </div>

                        <label className="mb-3 text-lg w-full">Tweet</label>
                        <textarea
                            className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold h-[30vh] w-full"
                            type="text"
                            value={tweet}
                            onChange={(e) => {
                                setTweet(e.target.value);
                                setContadorCaracteres(e.target.value.length);
                                setLimiteCaracteres(e.target.value.length > 350);
                            }}
                        />
                        <p>{contadorCaracteres}/350 caracteres</p>
                        {excedeLimite && <p className="font-bold text-red-500">Excede el límite de caracteres</p>}
                        <button className={`bg-${excedeLimite ? "azulOscuro1" : "azulGris"} w-[40%] text-xl p-2 rounded-lg mt-4`} disabled={excedeLimite}>
                            Editar
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default EditarTweet;
