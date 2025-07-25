function PricingCard() {
  return (
    <>
      <div className="bg-zinc-600 hover:bg-violet-800 duration-500 rounded-xl felx flex-col items-center justify-center w-75 h-124 select-none">
        <div className="bg-slate-800 h-118 flex flex-col justify-center-items-center rounded-xl m-3 p-5 space-y-2">
          <h2 className="h-15 flex items-center justify-center text-center text-white text-lg font-medium ">BASIC</h2>
          <h1 className="h-15 flex items-center  justify-center text-center text-white text-5xl font-bold" >100GB</h1>
          <p className="h-15 flex items-center justify-center text-center text-white text-sm font-light " >4.99$ per month</p>
          <div className="h-15 flex items-center justify-center text-center text-white text-lg font-medium" >
            <button className="hover:bg-violet-800 hover:border-violet-800 duration-300 cursor-pointer border-2 w-35 rounded-xl h-13 flex items-center justify-center text-center text-white text-lg font-medium">
              Purchase
            </button>
          </div>
          <div className="border-t-1 mt-5 border-zinc-600 h-40 flex flex-col items-center space-y-5 justify-center text-center text-white text-sm font-medium ">
            <p>100 gb storage</p>
            <p>Option to add members</p>
            <p>Extra members benefits</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default PricingCard



