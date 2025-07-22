function PricingCard() {
  return (
    <>
      <div className="bg-zinc-600 rounded-xl felx flex-col items-center justify-center w-80 h-124 ">
        <div className="bg-slate-800 h-118 flex flex-col justify-center-items-center rounded-xl m-3 p-5 space-y-2 ">
          <h2 className=" bg-black h-15 flex items-center justify-center text-center text-white text-lg font-medium ">BASIC</h2>
          <h1 className=" bg-black h-15 flex items-center  justify-center text-center text-white text-5xl font-bold" >100GB</h1>
          <p className= " bg-black h-15 flex items-center justify-center text-center text-white text-sm font-light " >4.99$ per month</p>
          <button className="bg-black h-15 flex items-center justify-center text-center text-white text-lg font-medium">
            purchase
          </button>
        </div>
      </div>
    </>
  )
}

export default PricingCard

