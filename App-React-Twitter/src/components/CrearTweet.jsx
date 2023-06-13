import { useState } from "react";
import { FaFeatherAlt, FaWindowClose } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";

import { useMutation } from "@apollo/client";
import { CREATE_TWEET, GET_TWEETS } from "../graphql/tweets";

function CrearTweet(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [tweet, setTweet] = useState("");
  const [contadorCaracteres, setContadorCaracteres] = useState(0);
  const [excedeLimite, setLimiteCaracteres] = useState(false);

  const [createTweet,{loading,error}]= useMutation(CREATE_TWEET,{
    refetchQueries:[
      {
        query: GET_TWEETS
      }
    ]
  })


  const handleSubmit = (e) => {
    e.preventDefault();


    //Validacion de los campos del formulario
    if (!usuario || !tweet) {
      toast.error("Datos incompletos, rellena todos los campos");
      return;
    }

    // Obtener la fecha y hora actual en formato de 24 horas
    const now = new Date();
    const fecha = `${now.getDate().toString().padStart(2, "0")}-${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${now.getFullYear()}`;
    const hora = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    let nuevaData = {
      usuario,
      tweet,
      favorito: false,
      fecha,
      hora,
    };
    createTweet({
      variables:{
        user: usuario,
        tweet: tweet,
        fecha: fecha,
        hora: hora
      }
    })

    //Obtenemos los datos existentes del localstorage
    // const dataExistente = localStorage.getItem("tweets");

    // if (!dataExistente) {
    //   localStorage.setItem("tweets", JSON.stringify([nuevaData]));
    // } else {
    //   const tweets = JSON.parse(dataExistente);
    //   tweets.push(nuevaData);
    //   localStorage.setItem("tweets", JSON.stringify(tweets));
    // }

    setUsuario("");
    setTweet("");

   // props.actualizarTweets();
    toast.success("Se ha publicado correctamente tu tweet!");
    setIsOpen(false);
  };
  return (
    <div>
      <div className="bg-white text-azulOscuro1 p-4 rounded-[80%] w-[16%] cursor-pointer fixed bottom-5 right-5 z-20 flex justify-center sm:w-[10%] lg:w-[8%] xl:w-[6%] ">
        <FaFeatherAlt className="text-3xl 2xl:text-4xl ur:text-5xl" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-40 "
          onSubmit={handleSubmit}
        >
          <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl sm:w-[70%] lg:w-[40%] ur:w-[30%]">
            <div className="flex justify-end w-full ">
              <FaWindowClose
                className=" text-2xl cursor-pointer lg:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="mb-3 text-lg w-full sm:text-xl 2xl:text-2xl">Nombre de Usuario</label>
            <input
              className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold w-full ur:text-2xl ur:p-2"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label className="mb-3 text-lg w-full sm:text-xl 2xl:text-2xl">Tweet</label>
            <textarea
              className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold h-[30vh] w-full lg:h-[40vh] ur:text-2xl"
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
                setContadorCaracteres(e.target.value.length);
                setLimiteCaracteres(e.target.value.length > 350);
              }}
            />
            <p className="ur:text-xl">{contadorCaracteres}/350 caracteres</p>
            {excedeLimite && (
              <p className="font-bold text-red-500">
                Excede el límite de caracteres
              </p>
            )}
            <button
              type="submit"
              className={`bg-${
                excedeLimite ? "azulOscuro1" : "azulGris"
              } w-[40%] text-xl p-2 rounded-lg mt-4 2xl:text-2xl`}
              disabled={excedeLimite}
            >
              Publicar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CrearTweet;
