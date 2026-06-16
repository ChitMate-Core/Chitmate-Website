# ChitMate Pre-Launch Website

## What is included
- Responsive one-page launch website
- Mobile navigation
- Feature and product showcase sections
- Netlify-compatible waitlist form
- Privacy and Terms placeholders
- SEO and social-sharing metadata
- Reusable images and logo assets

## Before publishing
1. Replace `hello@yourdomain.com` in `index.html`.
2. Update the Privacy Policy and Terms with legal counsel.
3. Confirm all product claims and launch wording.
4. Replace or optimize images if desired.
5. Connect the waitlist form:
   - Netlify: deploy as-is and enable form detection.
   - Formspree/custom backend: replace the form action.
6. Add analytics only after updating your cookie/privacy disclosures.

## Deploy to your custom domain

### Netlify
1. Drag this folder into Netlify Drop or connect a GitHub repository.
2. In **Domain management**, add your custom domain.
3. Update your registrar DNS records using Netlify's instructions.
4. Enable HTTPS.

### Vercel
1. Upload the folder to GitHub.
2. Import the repository into Vercel.
3. Add your domain under **Settings → Domains**.
4. Follow the provided DNS instructions.

### Traditional hosting / cPanel
Upload all files and the `assets` folder to `public_html`.

## Local preview
Open `index.html` directly or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
