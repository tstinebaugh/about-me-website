# Travis Stinebaugh: portfolio site

Personal portfolio and resume site for Travis Stinebaugh, Senior Full Stack & Backend Engineer.

**Stack:** Next.js (Pages Router), TypeScript, MUI, Framer Motion, deployed on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Content

- Projects: `src/data/projects.ts` (screenshots go in `public/`)
- Resume: `src/data/resume.ts` and `public/resume.pdf`

## Environment variables

| Variable | Used by |
| --- | --- |
| `NEXT_EMAIL_USER`, `NEXT_EMAIL_PASSWORD`, `NEXT_EMAIL_RECIPIENT` | Contact form email (Gmail SMTP) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA widget on the contact form |
| `RECAPTCHA_SECRET_KEY` | Optional. When set, the contact API verifies the reCAPTCHA token server-side |
| `NEXT_PUBLIC_ENCODED_EMAIL` | Base64-encoded address for the email button |
