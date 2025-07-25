import PricingCard from "./components/Pricing-card"

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-800">
        <div className="px-2 pt-10 pb-10 w-auto min-h-screen bg-slate-800 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
          <PricingCard
            title="BASIC"
            storage="100GB"
            price="$4.99 per month"
            features={[
              "100GB storage",
              "Option to add members",
              "Extra member benefits"
            ]}
          />
          <PricingCard
            title="STANDARD"
            storage="500GB"
            price="$9.99 per month"
            features={[
              "500GB storage",
              "Priority support",
              "Add up to 5 members"
            ]}
          />
          <PricingCard
            title="PREMIUM"
            storage="1TB"
            price="$19.99 per month"
            features={[
              "1TB storage",
              "24/7 support",
              "Unlimited members"
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
