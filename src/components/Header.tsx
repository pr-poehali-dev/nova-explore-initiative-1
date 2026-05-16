export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-8xl uppercase tracking-wide font-bold">БТК</div>
        <nav className="flex items-center gap-6">
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-2xl"
          >
            Контакты
          </a>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-4">
              <a
                href="tel:+79515350350"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-2xl font-medium"
              >
                +7 951 535-03-50
              </a>
              <a
                href="https://wa.me/79515350350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xl"
              >
                WA
              </a>
              <a
                href="https://t.me/+79515350350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xl"
              >
                TG
              </a>
              <a
                href="https://max.ru/+79515350350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xl"
              >
                MAX
              </a>
            </div>
            <a
              href="mailto:btk2016@inbox.ru"
              className="text-white hover:text-neutral-400 transition-colors duration-300 text-xl"
            >
              btk2016@inbox.ru
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}