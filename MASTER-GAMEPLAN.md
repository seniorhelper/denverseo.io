# denverseo.io · MASTER GAMEPLAN
Last updated 2026-11-08 (overnight marketing session). Network-level plan: `Desktop\01 SEARCH CONVERTS LLC\Search Converts Website Network\00 MASTER PLAN & STRATEGY\` and `DENVER-SEO-WIN-PLAN-2026-10-19.md`. Hub handoff: `01 BOSS & HUB - eyetoad.com, searchconverts.com\HANDOFF.md`.

## Role in the network
The engineering-angle shot at "denver seo" (eyetoad.com is the agency-angle shot). Separate publication owned by Eye To Ad Media. Phone 1-800-481-8638. Never guarantees rankings.

## State (Nov 8, 2026)
- Search Console (Oct 25–Nov 6, read Nov 8): home average position 4.8 for "denver seo" (2.1 on Nov 6), 518 impressions, 2 clicks (0.4% CTR). Site: 15 clicks / 8,750 impressions; top clicked pages are the technical audit checklist and the schema validator. The ranking is fine; the problem is about 40 impressions a day and almost no clicks, then a developer-angle page for a buyer query. Manual actions: none.
- Forms: all forms (callback form, 60-second scope, every `data-lead` form) now POST JSON to `https://clients.eyetoad.com/lead/send.php` (the network lead catcher). CSP connect-src/form-action updated on every page. Endpoint confirmed `{"ok":true,"saved":true,"id":...}` on Nov 8. Email notification for denverseo.io leads was NOT observed in Gmail during the test window; verify where denverseo.io leads are delivered (see overnight report).
- New commercial pages (additive, home content/title/H1 untouched): `/denver-seo-pricing/` (revived from a redirect stub) and `/how-to-choose-a-denver-seo-company/`. Linked from the home "Where this connects" cards and the footer on every page; in sitemap.xml and llms.txt.
- GA4 G-BVEFB4V1LG loads deferred (first interaction or 5 s) on every page. Search Console property exists; GA4↔SC link still pending in the registry.
- Lighthouse mobile (local lab, Nov 8): home 83 perf / 98 a11y / 96 BP / 100 SEO; pricing page 93/100/96/100. Live PSI numbers are usually higher than this PC.

## Keyword lanes (do not cross)
- Home: "denver seo" (engineering angle). Hold still: no title, H1, hero or nav rewrites.
- `/denver-seo-pricing/`: denver seo pricing, how much does seo cost in denver, seo pricing denver.
- `/how-to-choose-a-denver-seo-company/`: how to choose a denver seo company, denver seo companies (buyer-guide intent).
- eyetoad.com owns: denver seo company, denver seo agency, denver seo companies (comparison), denver marketing agency. Link to those pages once per page where a reader needs them; never duplicate them here.
- Technical lanes stay: technical SEO, JS SEO, migration, AI/LLM SEO, agent-ready, tools.

## Next 5 steps
1. CTR: the home title/description must speak to a business owner comparing companies (price, proof, phone) without changing the H1 or body. One careful rewrite in January at the earliest; measure CTR in Search Console for 4 weeks.
2. Request indexing for the two new pages; watch impressions for "denver seo pricing" and "denver seo companies".
3. Confirm lead delivery: submit one real-looking test on `/contact/`, check the lead catcher's inbox/dashboard and that zach@eyetoad.com gets it. Add denverseo.io to the catcher's notification routing if missing.
4. Conversion: add a named strategist photo/bio and the 60-review count near the first form; publish one Denver case study with before/after numbers and a referee (biggest gap vs. Thrive/Get Found Fast page-1 competitors).
5. Speed: fix the footer heading order (h4 after h2) and the Authorize.net seal image sizing flag; keep the home intro but keep it off the critical path.

## Rules
- Never `git add -A` here (webp names differ only by case). Add paths explicitly.
- No self-serving review schema, no fake stats, every price range sourced.
- One nofollow/sponsored rule: links to eyetoad.com stay followed only where contextual (About + a few posts); never sitewide.
