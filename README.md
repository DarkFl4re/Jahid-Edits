# 3D ID Card Portfolio

A responsive portfolio starter inspired by a hanging developer ID card.

## Run locally
Open `index.html` in a browser. For best results, use VS Code Live Server or:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Customize
1. Replace `assets/profile.jpg` with your portrait (keep the same filename).
2. In `index.html`, edit `JAHID HASAN`, `JAHID PLAYZ`, role text, intro, and social links.
3. In `script.js`, update the `words` array.
4. Replace the decorative QR pattern with a real QR-code image that points to your portfolio or social profile.
5. Change colors in `style.css`.

## Deploy
Upload the project files to a GitHub repository and import it into Vercel. This is a static site; no build command is required and the output directory is the project root.

## Notes
The card front/back are HTML/CSS layers animated in 3D with JavaScript. The lanyard and clip are CSS-built, so you can customize them without a 3D modeling app. External Google Fonts are loaded from Google Fonts.
