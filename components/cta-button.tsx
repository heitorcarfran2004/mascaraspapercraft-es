"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Botão verde principal do site (CTA).
 * Design único e compartilhado: gradiente verde, borda tracejada interna
 * e efeito 3D de botão elevado (afunda ao clicar).
 * Renderiza como <a> quando recebe `href`, senão como <button>.
 */
const ctaClassName =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl gradient-green px-8 py-[1rem] text-base md:text-lg font-bold text-primary-foreground ring-offset-background transition-all duration-300 shadow-[0_6px_0_0_#11703a] hover:shadow-[0_6px_0_0_#11703a] active:translate-y-[5px] active:shadow-[0_1px_0_0_#11703a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

function DashedBorder() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-[5px] rounded-lg border-2 border-dashed border-white/60"
    />
  );
}

type AnchorProps = { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = { href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>;
type CtaButtonProps = AnchorProps | ButtonProps;

export function CtaButton({ className, children, ...props }: CtaButtonProps) {
  if (props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={cn(ctaClassName, className)} {...rest}>
        <DashedBorder />
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cn(ctaClassName, className)} {...(props as ButtonProps)}>
      <DashedBorder />
      {children}
    </button>
  );
}
