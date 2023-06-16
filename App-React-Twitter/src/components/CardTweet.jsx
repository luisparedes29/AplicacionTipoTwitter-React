import { FaHeart, FaTrash } from "react-icons/fa";
import EditarTweet from "./EditarTweet";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { DELETE_TWEET, GET_TWEETS, UPDATE_FAVORITES } from "../graphql/tweets";

function CardTweet({ data, actualizarTweets }) {
    const [isOpen, setIsOpen] = useState(false);
    const [favorite, setFavorite] = useState(data.favorite)
    
    const [deleteTweet, { loading, error }] = useMutation(DELETE_TWEET, {
        refetchQueries: [
            {
                query: GET_TWEETS,
            },
        ],
    });

    const handleDeleteClick = () => {
        setIsOpen(true);
    };

    const [updateFavorites, { loading: updateFavoritesLoading, error: updateFavoritesError }] = useMutation(UPDATE_FAVORITES, {
      refetchQueries: [
          {
              query: GET_TWEETS,
          },
      ],
  });

    const favoriteUpdate = async () => {
      try {
          await updateFavorites({
              variables: {
                  updateFavoritesId: data.id,
                  favorite: favorite,
                },
          });
           
      } catch (error) {
          // Manejo de errores
          console.log(error);
      }
  };

    useEffect(() => {
        favoriteUpdate();
    }, [favorite]);

    return (
        <div>
            <section className="text-lg text-left p-4 border-b-2 border-white font-Quicksand h-auto w-full ur:text-2xl">
                <h1 className="border-b-2 pb-2 font-bold text-xl w-full ur:text-2xl ">{data.user}</h1>
                <p className="break-words mt-2 w-full">{data.tweet}</p>

                <div className="flex items-center mt-3 w-full">
                    <p className="text-sm text-gris mr-2 ur:text-xl">{data.fecha}</p>
                    <p className="mr-2 text-gris ur:text-xl">·</p>
                    <p className="text-sm text-gris ur:text-xl">{data.hora}</p>
                </div>

                <div className="flex justify-end w-full">
                    <FaHeart 
                    className={`mr-2 cursor-pointer ur:text-3xl ${data.favorite ? "text-[#6D6CBC]" : ""}`} 
                    onClick={() => {
                      setFavorite(!favorite);
                      }}/>
                    <FaTrash className="cursor-pointer mr-2 ur:text-3xl" onClick={() => handleDeleteClick(data.id)} />

                    {isOpen && (
                        <div className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-40 ">
                            <div className="bg-azulOscuro2 text-white flex flex-col justify-start items-center  font-Quicksand p-5 w-[90%] rounded-xl sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
                                <p className="text-center mb-5 lg:text-xl 2xl:text-2xl ur:text-3xl">¿Estás segur@ de querer eliminar este tweet?</p>
                                <div className="flex mb-4">
                                    <button
                                        className="bg-azulGris p-2 rounded-md text-base mr-3 2xl:text-xl ur:text-2xl"
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        Volver Atrás
                                    </button>
                                    <button
                                        className="bg-azulGris p-2 rounded-md text-base mr-3 2xl:text-xl ur:text-2xl  pointer-events: none"
                                        onClick={() => {
                                            deleteTweet({
                                                variables: {
                                                    deleteTweetId: data.id,
                                                },
                                            });
                                            toast.success('Se ha eliminado correctamente')
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
