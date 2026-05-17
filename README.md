# USD Halo

Frontend voor USD Halo, gebouwd met React, TypeScript, Vite en Tailwind v4.

## Vereisten

- Node.js 20+
- npm 10+

## Installatie

```bash
npm install
```

## Omgevingsvariabelen

Maak een lokaal `.env` bestand op basis van `.env.example`.

```bash
cp .env.example .env
```

Beschikbare variabelen:

- `VITE_SITE_URL`: publieke URL van de site.
- `VITE_API_BASE_URL`: basis-URL voor toekomstige API-integraties.
- `VITE_ANALYTICS_PROVIDER`: `none`, `gtm`, `posthog` of `auto`.
- `VITE_GTM_ID`: Google Tag Manager container-id (bijv. `GTM-XXXXXXX`).
- `VITE_POSTHOG_KEY`: PostHog project key.
- `VITE_POSTHOG_HOST`: PostHog API host (default EU cloud).

Runtime-resolutie loopt via `src/config/runtime.ts`.

## Scripts

- `npm run dev`: start development server.
- `npm run lint`: lint alle bronbestanden.
- `npm run test`: start Vitest in watch mode.
- `npm run test:run`: draait tests eenmalig (CI-vriendelijk).
- `npm run typecheck`: voert TypeScript project-check uit.
- `npm run build`: typecheck + productiebuild.
- `npm run preview`: serve productiebuild lokaal.

## Kwaliteit en CI

Er is een GitHub Actions workflow op `.github/workflows/ci.yml` met:

1. `npm ci`
2. `npm run lint`
3. `npm run test:run`
4. `npm run build`

## Projectstatus

Actuele implementatiestatus en resterende externe prelaunch-taken staan in `docs/prelaunch-status.md`.

## Testdekking (basis)

De huidige testbasis bevat smoke/gedragstests voor:

- `CTAButton`
- `Navbar`
- `Join` waitlist-flow

Testconfiguratie staat in `vitest.config.ts` en `src/test/setup.ts`.

## Opmerking over fonts

De app gebruikt lokale TT Norms fallbacks (`local(...)`) zodat builds niet afhangen van ontbrekende binaire fontbestanden in de repository.
