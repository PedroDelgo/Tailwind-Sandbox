import image from '../assets/image.jpg'

function Subscribecard() {
    return (
        <>  {/*card*/}
            <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
                <div className="flex flex-col md:flex-row">
                    <img
                        src={image}
                        alt="card image"
                        className='rounded-xl md:rounded-l-xl md:rounded-r-none object-fit h-80 md:h-64 hover:scale-105 duration-200'/>
                </div>
            </div>
            {/*Flex container*/}
        </>
    )
}
export default Subscribecard