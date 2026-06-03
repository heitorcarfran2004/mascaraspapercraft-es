# Espaço Criativo — Site Mask

Página de vendas dos **+500 moldes de máscaras 3D de papel**, reescrita em
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Para gerar o build de produção e rodar:

```bash
npm run build
npm run start
```

## Como o projeto está organizado

```
app/
  layout.tsx        Metadata, fonte (Inter), scripts de tracking (UTMify + back-redirect)
  page.tsx          Monta as seções na ordem da página
  globals.css       Design tokens (cores, sombras) e classes utilitárias
components/
  sections/         Uma seção da página por arquivo (hero, gallery, pricing, ...)
  ui/               Componentes de base (button, accordion, dialog)
content/
  site.ts           ⭐ TODO o conteúdo: textos, preços, imagens e links de checkout
lib/                Utilidades (cn, scrollToPricing)
```

> **Para editar textos, preços, links de checkout ou bônus, mexa só em
> [`content/site.ts`](content/site.ts).** Os componentes apenas consomem esses
> dados — você não precisa caçar texto solto no meio do JSX.

## Pontos que costumam ser ajustados

- **Links de checkout** (principal, upsell e básico): `content/site.ts → checkout`
- **URL do back-redirect** e **pixel da UTMify**: `content/site.ts`
- **Paleta de cores**: variáveis CSS em `app/globals.css`
