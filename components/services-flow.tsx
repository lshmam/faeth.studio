const SERVICES = ["BRAND CREATION", "ECOMMERCE DESIGN", "SHOPIFY DEVELOPMENT", "CONTENT CREATION"]

export function ServicesFlow() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4 relative">
          {/* Vertical line connecting services */}
          <div className="absolute left-1/2 top-0 h-[calc(100%-80px)] w-px bg-black transform -translate-x-1/2" />

          {/* Services */}
          {SERVICES.map((service) => (
            <div key={service} className="relative">
              <div className="border border-black rounded-full py-3 px-8 text-center text-sm tracking-widest bg-white">
                {service}
              </div>
            </div>
          ))}

          {/* Client Circle */}
          <div className="relative mt-8">
            <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center mx-auto bg-white">
              <span className="text-lg tracking-widest">CLIENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

