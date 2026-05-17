# USD Halo

Frontend voor USD Halo, gebouwd met React, TypeScript, Vite en Tailwind v4.

De repository bevat nu ook een Node.js backend API voor waitlist-signups en health-checks.

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

Backend variabelen:

- `API_PORT`: poort voor de backend API (default `8787`).
- `API_HOST`: host-binding voor de backend API (default `0.0.0.0`).
- `WAITLIST_STORAGE_PATH`: pad naar JSON-opslag voor waitlist data.
- `API_CORS_ORIGIN`: toegestane origin(s), komma-gescheiden.
- `API_ADMIN_TOKEN`: token voor admin export endpoint (`/api/admin/waitlist`).
- `API_SERVE_STATIC`: `true` om ook `dist/` als statische site te serveren.
- `API_RATE_LIMIT_WINDOW_MS`: rate-limit venster in milliseconden.
- `API_RATE_LIMIT_MAX`: max requests per IP+pad per venster.

Runtime-resolutie loopt via `src/config/runtime.ts`.

## Backend API

De backend staat in `server/`.

Endpoints:

- `GET /api/health`: health check.
- `POST /api/waitlist`: accepteert `{ "email": "..." }`.
	- Response `201 { status: "created" }` voor nieuwe signup.
	- Response `200 { status: "exists" }` voor bestaande signup.
- `GET /api/admin/waitlist`: lijst van signups (vereist header `x-admin-token`).

Opslag:

- Waitlist entries worden persistent opgeslagen in een lokale JSON-file.
- Dedupe gebeurt op genormaliseerd e-mailadres (lowercase + trim).
- Runtime-bestanden onder `data/*.json` worden niet gecommit.

## Scripts

- `npm run dev`: start development server.
- `npm run backend:dev`: start backend API in watch mode.
- `npm run backend:start`: start backend API (production mode).
- `npm run backend:test`: draait backend API tests.
- `npm run lint`: lint alle bronbestanden.
- `npm run test`: start Vitest in watch mode.
- `npm run test:run`: draait tests eenmalig (CI-vriendelijk).
- `npm run typecheck`: voert TypeScript project-check uit.
- `npm run build`: typecheck + productiebuild.
- `npm run preview`: serve productiebuild lokaal.
- `npm run deploy:check`: lint + frontend tests + backend tests + build.

## Lokale full-stack flow

1. Start frontend in terminal 1: `npm run dev`.
2. Start backend in terminal 2: `npm run backend:dev`.
3. Zet in je `.env` voor frontend:
	- `VITE_WAITLIST_ENDPOINT=http://localhost:8787/api/waitlist`

Dan gebruiken Join/News direct de backend in plaats van localStorage fallback.

## Deploy advies

1. Bouw frontend: `npm run build`.
2. Start backend met statische serving:
	- `API_SERVE_STATIC=true npm run backend:start`
3. Configureer productievariabelen:
	- `API_CORS_ORIGIN` op je frontend domein.
	- `API_ADMIN_TOKEN` op een sterke geheime waarde.
	- `WAITLIST_STORAGE_PATH` op een persistente volume-locatie.

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
