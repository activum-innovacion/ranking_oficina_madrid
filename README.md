# Activum · Empleado del Mes — Madrid

Landing con ranking de votación para elegir al empleado del mes de las oficinas de
Activum en Madrid. El ranking se **reinicia automáticamente el día 1 de cada mes**.

## Cómo funciona

- Los votos se guardan con una clave por mes (`votos:2026-06`). El día 1 la clave
  cambia sola y el ranking arranca de cero — **sin cron ni borrado manual**.
- Un voto por navegador y por mes (cookie + `localStorage`).
- Almacenamiento: **Upstash Redis** (gratis). Si no está configurado, funciona en
  memoria (solo para desarrollo local; no persiste).

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Activum · Empleado del Mes (Madrid)"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

## Desplegar en Vercel

1. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
2. Framework: **Next.js** (autodetectado). Deploy.
3. **Activar almacenamiento persistente** (importante para que los votos se compartan
   entre todos):
   - En el proyecto → pestaña **Storage** → **Marketplace** → **Upstash for Redis**
     → crea una base (plan free) y conéctala al proyecto.
   - Vercel añade solas las variables (`UPSTASH_REDIS_REST_URL`,
     `UPSTASH_REDIS_REST_TOKEN` / `KV_REST_API_URL`, `KV_REST_API_TOKEN`).
   - **Redeploy** el proyecto para que tome las variables.

Sin Upstash la app despliega y se ve, pero los votos no se guardan de forma
permanente (aparece un aviso en la página).

## Marca (Activum Design System)

La landing usa el **Activum Design System** (Rebranding 2025), incluido en la carpeta
`Activum Design System/`:

- **Paleta:** crema `#F5F3F2`, beige, negro `#1F1D1A` y acento burdeos `#8E2D44`.
- **Tipografía:** Roboto Serif (titulares), Roboto (cuerpo), Albert Sans (isotipo),
  cargadas desde Google Fonts en [`app/layout.tsx`](app/layout.tsx).
- **Logo y patrón:** en [`public/brand/`](public/brand).

Los tokens están en variables CSS al inicio de [`app/globals.css`](app/globals.css)
(`--color-acento`, `--bg-base`, `--font-display`, …). La fuente original de tokens es
[`Activum Design System/colors_and_type.css`](Activum%20Design%20System/colors_and_type.css).

La lista de personas está en [`lib/empleados.ts`](lib/empleados.ts).
