export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-medium">БТК</div>
        <nav className="flex items-center gap-6">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <div className="flex items-center gap-3">
            <a
              href="tel:+79515350350"
              className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm font-medium"
            >
              +7 951 535-03-50
            </a>
            <a
              href="https://wa.me/79515350350"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs"
            >
              WA
            </a>
            <a
              href="https://t.me/+79515350350"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs"
            >
              TG
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}