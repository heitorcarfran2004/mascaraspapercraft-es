# Espacio Creativo — Site Mask (ES-LATAM)

Página de vendas dos **+500 moldes de máscaras 3D de papel**, reescrita em
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

Versão em **espanhol neutro da América Latina**, com preços em **dólar**.

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

## Convenções de idioma e moeda (LATAM)

Ao escrever ou revisar texto novo, respeite estas regras — o site foi adaptado
do espanhol da Espanha e é fácil reintroduzir peninsularismo sem perceber:

- **Nada de `vosotros`.** Sempre `ustedes` / `tú`.
- **Pretérito simples, não composto.** `ya lo compraron`, nunca `ya lo han comprado`.
- **Nunca usar o verbo `coger`** — é vulgar em boa parte da LATAM.
- **Léxico:** `celular` (não *móvil*), `hoja` (não *folio*), `papelería` ou
  `centro de copiado` (não *copistería*), `correo` (não *email*),
  `económico` (não *asequible*), `casera` (não *doméstica*),
  `letra chica` (não *letra pequeña*), `mamá`/`maestra` (não *madre*/*profesora*).
- **Preços em dólar:** `$13.90` — cifrão antes, ponto decimal. Nunca `13,90 €`.
- **Locale de data:** `es-MX` em `components/sections/top-banner.tsx`.
