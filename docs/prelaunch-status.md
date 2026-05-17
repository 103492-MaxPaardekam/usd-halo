# Prelaunch Status USD Halo

## Geimplementeerd in code

1. Join waitlist-flow met validatie, loading/succes/foutstatus en lokale fallback.
2. ErrorBoundary en 404-pagina met route-afhandeling.
3. SEO-basis: route-specifieke title/description, Open Graph, Twitter tags, canonical URL.
4. Robots en sitemap in public.
5. FAQ-zoekfunctie op Help-pagina.
6. Copy-to-clipboard utility op Wallet-pagina.
7. Placeholder-secties voor loading/empty/error in Wallet, Rewards en Commerce.
8. Analytics-wrapper met provider-keuze via environment (`none`, `gtm`, `posthog`, `auto`).
9. Tracking hooks voor page views, CTA-clicks en navigatie-clicks.
10. Accessibility-pass: skip-link, landmarks, ARIA uitbreidingen, status live regions, button type-correcties.
11. Runtime config-contract in `src/config/runtime.ts`.
12. Waitlist service-laag met API endpoint ondersteuning en lokale fallback.
13. Testfundering met Vitest + Testing Library (smoke/behavior tests).
14. CI-workflow voor lint, test en build op push en pull request.
15. Video-optimalisatie met poster en preload-hints.
16. Projectdocumentatie bijgewerkt in README (Nederlands).

## Handmatig of extern (niet volledig in code af te ronden)

1. Definitieve productie-domein controleren in:
   - `VITE_SITE_URL`
   - `public/robots.txt`
   - `public/sitemap.xml`
2. Backend endpoint voor waitlist configureren via `VITE_WAITLIST_ENDPOINT`.
3. Analytics provider daadwerkelijk aansluiten (GTM container of PostHog snippet).
4. Font-waarschuwingen verifiëren op productiehost (`public/fonts` paden en deploy-output).
5. Lighthouse baseline draaien in target-omgeving en scoregrenzen vastleggen.

## Definition of Done voor prelaunch

1. `npm run lint` slaagt.
2. `npm run test:run` slaagt.
3. `npm run build` slaagt.
4. CI-workflow slaagt op de hoofdbranch.
5. Externe configuraties hierboven zijn ingevuld en gevalideerd.
