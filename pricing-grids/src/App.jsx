import PricingCard from "./components/Pricing-card"

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-800">
        <div className="px-2 pt-10 pb-10 w-auto min-h-screen bg-slate-800 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </>
  )
}

export default App
