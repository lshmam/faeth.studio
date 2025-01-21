import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          Get in touch with us, and let's create
          <br />
          something together.
        </p>
        <Button variant="link" className="text-sm tracking-widest">
          Let's chat
        </Button>
      </div>
    </footer>
  )
}

