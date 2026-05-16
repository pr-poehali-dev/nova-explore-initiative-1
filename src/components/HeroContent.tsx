import ContactForm from "@/components/ContactForm";

export default function HeroContent() {
  return (
    <main className="absolute bottom-20 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-base font-light relative z-10">Батайск и вся Россия — с 2016 года</span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium">Грузовые</span> перевозки
          <br />
          <span className="font-light tracking-tight text-white">в срок и надёжно</span>
        </h1>

        <p className="text-base font-light text-white/70 mb-4 leading-relaxed">
          Батайская Транспортная Компания — автомобильные грузоперевозки по Югу России и всей стране.
          Собственный автопарк, опытные водители, страхование груза.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Стандартные перевозки", "Терморежим", "Негабарит", "Опасные грузы", "Догрузы"].map((service) => (
            <span
              key={service}
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-base font-light backdrop-blur-sm"
            >
              {service}
            </span>
          ))}
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
