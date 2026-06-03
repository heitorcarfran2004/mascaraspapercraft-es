"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/** Faixa de urgência no topo, exibindo a data de hoje. */
export function TopBanner() {
  const [today, setToday] = useState("");

  // Calcula a data no cliente para evitar divergência de hidratação.
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  return (
    <header className="w-full bg-[#e11e14] text-white text-xs sm:text-sm font-semibold shadow-md">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-2 text-center">
        <div className="inline-flex items-center gap-2 uppercase tracking-[0.18em]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
            <Clock className="h-3 w-3" />
          </span>
          <span>Oportunidade Única:</span>
        </div>
        <p className="text-[11px] sm:text-xs font-normal tracking-normal">
          Promoção válida somente até hoje{today && `, ${today}`}
        </p>
      </div>
    </header>
  );
}
