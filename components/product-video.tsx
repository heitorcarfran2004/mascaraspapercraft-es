"use client";

import { useEffect, useRef } from "react";

import { productDemo } from "@/content/site";

/**
 * Player de vídeo VTurb (ConverteAI).
 * O elemento customizado <vturb-smartplayer> e o script sao injetados de forma
 * imperativa (fora do fluxo do React) para nao conflitar com a reconciliacao.
 * A guarda evita duplicar o player no double-invoke do React Strict Mode.
 */
export function ProductVideo() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector("vturb-smartplayer")) return;

    host.innerHTML = `<vturb-smartplayer id="${productDemo.video.playerId}" style="display:block;margin:0 auto;width:100%"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:177.77777777777777% 0 0;z-index:0;background-color:black"></div></vturb-smartplayer>`;

    const script = document.createElement("script");
    script.src = productDemo.video.script;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <div ref={hostRef} className="w-full" />;
}
