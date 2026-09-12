# westwoodsolarcar.org

Website for Westwood Solar Car, the student solar car team at Westwood High School in Austin, Texas.

SvelteKit, built as a static site and deployed to GitHub Pages on every push to `main`
(see `.github/workflows/deploy.yml`). No backend, no CMS.

## Editing content

Nearly everything lives in one file: `src/lib/data.ts`.

| What | Where |
| --- | --- |
| Email, school, city, competition | `site` |
| Team roster, roles, groups | `teamMembers`, `teamCategoryOrder` |
| Team photos | Add a JPEG to `static/team-images/` and list it in `memberImages`, keyed by first name in lowercase. Anyone without a photo gets an initials tile. |
| Car specifications | `carSpecs` |
| What the team is working on | `buildAreas` |
| Sponsorship tiers | `sponsorTiers` |

Page copy is in `src/routes/*/+page.svelte`. Colours, type, and shared layout are in `src/app.css`.

### The car page

`carSpecs` ships with every value empty on purpose. The car is not built, and the numbers that
were here before (weight, top speed, battery size, a model name) were invented placeholders that
nobody on the team had agreed to. Fill a value in and its row appears on the car page; leave it
empty and the row stays hidden. While every value is empty the page says the specifications are
not settled yet.

Same rule applies to the rest of the site: do not publish a number or a claim the team cannot
stand behind. An honest gap reads better to a sponsor than a confident guess.

### Photos

Keep them under roughly 1000 px on the long edge. On macOS:

```sh
sips -s format jpeg -s formatOptions 82 -Z 900 photo.png --out static/team-images/name.jpg
```

## Developing

```sh
npm install
npm run dev -- --port 5199
```

Port 5173 is avoided on purpose. Other projects on this machine use it, and because localhost is
a single browser origin, a stale tab from one of them will hot-reload against this server and
render a broken, unstyled page.

## Checks and build

```sh
npm run check   # Svelte + TypeScript
npm run build   # static output in build/
npm run preview
```
