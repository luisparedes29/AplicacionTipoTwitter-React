import { useState } from "react";
import { FaPencilAlt, FaWindowClose } from "react-icons/fa";

function EditarTweet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="cursor-pointer ">
        <FaPencilAlt className="" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <form className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30">
          <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl">
          <div className="flex justify-end w-full ">
              <FaWindowClose
                className=" text-2xl cursor-pointer lg:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="mb-3 text-lg w-full" >Nombre de Usuario</label>
            <input className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold w-full" type="text" />

            <label className="mb-3 text-lg w-full">Tweet</label>
            <input className="mb-3 text-lg rounded-md p-1 text-azulOscuro2 font-semibold h-[30vh] w-full" type="text" />

            <button className="bg-azulGris w-[40%] text-xl p-2   rounded-lg mt-4">Editar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditarTweet;
