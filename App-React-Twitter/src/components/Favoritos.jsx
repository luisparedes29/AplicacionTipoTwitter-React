import CardTweet from "./CardTweet"

function Favoritos(){
    return(
        <div>
            <section className="text-white font-Kanit font-bold  text-center text-3xl m-5">
                <h1 className="m-5">Tweets</h1>

                <section className="bg-azulOscuro2 rounded-t-lg ">
                    <CardTweet/>
                    <CardTweet/>
                    <CardTweet/>
                </section>
            </section>
        </div>
    )
}

export default Favoritos;