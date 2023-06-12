import { useState } from "react";
import { FaFeatherAlt, FaWindowClose } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";

function CrearTweet(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [tweet, setTweet] = useState("");
  const [contadorCaracteres, setContadorCaracteres] = useState(0);
  const [excedeLimite, setLimiteCaracteres] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de los campos del formulario
    if (!usuario || !tweet) {
      toast.error("Datos incompletos, rellena todos los campos");
      return;
    }

    // Obtener la fecha y hora actual en formato de 24 horas
    const now = new Date();
    const fechaCreacion = `${now.getDate().toString().padStart(2, "0")}-${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${now.getFullYear()}`;
    const horaCreacion = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    let nuevaData = {
      id: uuidv4(),
      usuario,
      tweet,
      favorito: false,
      fechaCreacion,
      horaCreacion,
    };

    //Obtenemos los datos existentes del localstorage
    const dataExistente = localStorage.getItem("tweets");

    if (!dataExistente) {
      localStorage.setItem("tweets", JSON.stringify([nuevaData]));
    } else {
      const tweets = JSON.parse(dataExistente);
      tweets.push(nuevaData);
      localStorage.setItem("tweets", JSON.stringify(tweets));
    }

    setUsuario("");
    setTweet("");

    props.actualizarTweets();
    toast.success("Se ha publicado correctamente tu tweet!");
    setIsOpen(false);
  };
  return (
    <div>
      <div className="bg-white text-azulOscuro1 p-4 rounded-[80%] w-[16%] cursor-pointer fixed bottom-5 right-5 z-20 flex justify-center sm:w-[10%] md:">
        <FaFeatherAlt className="text-3xl" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 md:mb-14"
          onSubmit={handleSubmit}
        >
          <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl sm:w-[70%]">
            <div className="flex justify-end w-full ">
              <FaWindowClose
                className=" text-2xl cursor-pointer lg:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="mb-3 text-lg w-full sm:text-xl">Nombre de Usuario</label>
            <input
              className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold w-full"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label className="mb-3 text-lg w-full sm:text-xl">Tweet</label>
            <textarea
              className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold h-[30vh] w-full"
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
                setContadorCaracteres(e.target.value.length);
                setLimiteCaracteres(e.target.value.length > 350);
              }}
            />
            <p>{contadorCaracteres}/350 caracteres</p>
            {excedeLimite && (
              <p className="font-bold text-red-500">
                Excede el límite de caracteres
              </p>
            )}
            <button
              type="submit"
              className={`bg-${
                excedeLimite ? "azulOscuro1" : "azulGris"
              } w-[40%] text-xl p-2 rounded-lg mt-4`}
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
