import {FaHeart, FaTrash} from "react-icons/fa"
import EditarTweet from "./EditarTweet";

function CardTweet(){
    return(
        <div>
            <section className="text-lg text-left p-4 border-b-2 border-white font-Quicksand">
                <h1>Nombre</h1>
                <p>tweetsssssssss</p>

                <div className="flex justify-end w-full">
                    <FaHeart className="mr-2 cursor-pointer"/>
                    <FaTrash className="cursor-pointer mr-2"/>
                    <EditarTweet/>
                </div>
            </section>
        </div>
    )
}

export default CardTweet;