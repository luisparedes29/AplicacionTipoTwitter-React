import { FaHeart, FaTrash } from "react-icons/fa";
import EditarTweet from "./EditarTweet";

function CardTweet({ data }) {
    return (
        <div>
            <section className="text-lg text-left p-4 border-b-2 border-white font-Quicksand">
                <h1>{data.usuario}</h1>
                <p>{data.tweet}</p>

                <div className="flex justify-end w-full">
                    <FaHeart className="mr-2 cursor-pointer" />
                    <FaTrash className="cursor-pointer mr-2" />
                    <EditarTweet data={data} />
                </div>
            </section>
        </div>
    );
}

export default CardTweet;
