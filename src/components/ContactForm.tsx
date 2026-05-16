import { useState } from "react";
import func2url from "../../backend/func2url.json";

const SERVICES = [
  "Стандартные перевозки",
  "Терморежим",
  "Негабарит",
  "Опасные грузы",
  "Догрузы",
];

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url["send-email"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
      >
        Рассчитать стоимость
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl leading-none"
            >
              ×
            </button>

            <h2 className="text-white text-xl font-medium mb-1">Заявка на перевозку</h2>
            <p className="text-white/50 text-xs mb-6">Ответим в течение 30 минут</p>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-white font-medium mb-2">Заявка отправлена!</p>
                <p className="text-white/50 text-xs">Мы свяжемся с вами в ближайшее время</p>
                <button
                  onClick={() => { setOpen(false); setStatus("idle"); }}
                  className="mt-6 px-6 py-2 rounded-full bg-white text-black text-xs hover:bg-white/90 transition-all"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30"
                />
                <input
                  required
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 text-white/70"
                >
                  <option value="" className="bg-neutral-900">Выберите услугу</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-neutral-900">{s}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Откуда, куда, что везём (необязательно)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none"
                />
                {status === "error" && (
                  <p className="text-red-400 text-xs">Ошибка отправки. Позвоните нам: +7 951 535-03-50</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
