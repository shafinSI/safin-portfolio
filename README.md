# Shafin's Portfolio — with a Live Contact Form Backend

## What it does, and for whom

This is my personal developer portfolio, built to show my projects, skills, and background to
recruiters, collaborators, and anyone interested in my work. Unlike a static portfolio, it
includes one real, working feature: a **contact form with a functioning backend**. When a
visitor fills it in and hits Send, the message is actually delivered to my inbox — not just
displayed on screen.

**Who it's for:** recruiters, potential collaborators, internship reviewers, and anyone who
wants a low-friction way to reach me directly from the site.

## Live site

- Production URL: https://safin-portfolio.vercel.app
- Source code: https://github.com/shafinSI/safin-portfolio

## Setup (a stranger could follow this)

```bash
git clone https://github.com/shafinSI/safin-portfolio.git
cd safin-portfolio
npm install
```

Create a `.env.local` file in the project root with:

```
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-16-character-gmail-app-password
CONTACT_TO_EMAIL=where-you-want-messages-delivered@gmail.com
```

(A Gmail app password is generated at https://myaccount.google.com/apppasswords — it requires
2-Step Verification to be turned on first. Never use your normal Gmail password here.)

Run it locally:

```bash
npm run dev
```

Open `http://localhost:3000`.

To deploy: push to GitHub, connect the repo to Vercel, and add the same three environment
variables in Vercel's Project Settings → Environment Variables.

## Usage example

1. Visit the Contact section of the site.
2. Fill in name, email, and a message.
3. Click **Send Message**.
4. The message arrives as an email in the inbox configured by `CONTACT_TO_EMAIL`, with the
   visitor's email set as the reply-to address so I can respond directly.

## Architecture

```
[Visitor's browser]
   ContactForm.tsx (React, client-side)
        |
        |  fetch POST /api/contact  { name, email, message }
        v
[Vercel serverless function]  <-- the backend
   app/api/contact/route.ts
        |  - validates fields aren't empty
        |  - validates email format
        |  - caps message length
        |  - escapes HTML in all fields (prevents injected script/markup
        |    from breaking the email or executing anywhere)
        |
        |  Nodemailer, authenticated via Gmail app password
        |  (stored as an environment variable, never in code)
        v
[Gmail SMTP server]
        |
        v
[My inbox]
```

No database is involved. Nothing is stored — the message passes straight through the server
into an email.

## v2 eval results (hardening pass)

After the feature first worked end-to-end, I deliberately tried to break it and ran it through
PageSpeed Insights. Before/after:

| Check | v1 | v2 (after fixes) |
|---|---|---|
| PageSpeed Accessibility | 94/100 | improved — added `<main>` landmark, fixed low-contrast text |
| Contact form input validation | client-side only (`required` attr) | added server-side email regex validation + message length cap |
| Message field HTML safety | raw user input inserted into email HTML | all fields HTML-escaped before building the email |
| Broken links found | LinkedIn link → generic homepage; one project card → wrong GitHub repo | both fixed to correct URLs |
| PageSpeed Performance / Best Practices / SEO | 99–100 across the board | unchanged — already strong |

**How I tested it:** submitted the form empty, submitted it with an invalid email and a
`<script>` tag in the message, double-clicked Send Message to check for duplicate sends,
clicked every link on the site, tested on mobile and a second browser, and visited a fake URL
to confirm the 404 page works.

## Limitations (known, not hidden)

- **No CAPTCHA or rate-limiting** on the contact form. A script could technically submit it
  repeatedly. Adding real protection would need a paid service or more infrastructure than fits
  a free-tier project at this stage — accepted as a known limitation for now.
- **New-site SEO lag.** The site isn't indexed by Google yet under a direct search for its own
  domain — normal for a brand-new deployment; sitemap/robots files are already in place to help
  that happen over the coming days/weeks.
- **Minor accessibility nitpick.** Two links on the page both read "GitHub" for different
  destinations, which is ambiguous to screen readers navigating by link text alone. Left as-is
  since it's low severity and doesn't block usage.

## Built with AI

I built this with Claude as my pair-programming and debugging partner across the whole
feature: designing the form/backend architecture, writing the Nodemailer integration,
debugging Next.js App Router file placement and PowerShell/paste-corruption issues, running the
PageSpeed accessibility audit, and fixing the flagged issues. I tested every change myself —
locally, then on the live deployed site, with real submissions that reached my actual inbox —
and reviewed the diffs before pushing each one, rather than accepting code without checking it
ran.