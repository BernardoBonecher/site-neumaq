# Site Neumaq — one-page institutional site (study project)

> **Study project.** This is not the official website of Neumaq Máquinas e Equipamentos and has no
> affiliation with the company. Contacts and address are fictitious. Photos are placeholders taken
> from public sources and will be replaced by license-free images.

A one-page institutional website for a hydraulic-cylinder manufacturer, built as a front-end exercise:
how to present a B2B industrial company with a clear product hierarchy and a short path to a quote request.

**Live:** https://bernardobonecher.github.io/site-neumaq/

## What it covers

- Sticky header with anchor navigation
- Hero, company story, four product lines, differentiators
- Contact section with WhatsApp and e-mail links that open with a pre-filled quote template
  (application, bore, stroke, mounting, quantity)
- Responsive layout, no build step

## Decisions

- **No framework, no build.** A single static page does not need one; it opens directly in the browser
  and deploys on GitHub Pages as-is.
- **Tailwind via CDN** for fast iteration on the layout. For a production site, the CSS would be
  compiled to drop the runtime script.
- **Pre-filled quote message.** Industrial buyers ask for quotes with technical data; asking for it up front
  saves one round of back-and-forth.
- **Contact data in one place.** The WhatsApp number and e-mail live as constants at the top of
  [`script.js`](script.js).

## Run locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Stack

HTML · Tailwind CSS (CDN) · vanilla JavaScript · Google Fonts (Manrope, Inter) · GitHub Pages
