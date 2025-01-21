import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-4 sm:py-6 md:py-8 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.15em]">FAETH STUDIO</h1>
        <Button variant="outline" className="tracking-widest text-xs sm:text-sm border-gray-300">
          CALL US
        </Button>
      </div>
    </header>
  )
}

