# DiMoT project page

Buildless research project page for **Improving the Diffusability of Motion Tokenizer**, NeurIPS 2026 Spotlight.

Intended URL: https://githubhgh.github.io/dimot/

## Customize

- `index.html`: title, authors, resource links, abstract, method explanation and citation. Comments beginning with `EDIT:` mark the main customization points.
- `style.css`: all styling, responsive layout and colors.
- `script.js`: copy-citation interaction.
- `assets/`: add the final overview figure, images and videos here, then reference them with relative paths in `index.html`.
- The overview currently uses an HTML diagram. No UMF figures or motion videos are presented as DiMoT results.
- The code link is intentionally a non-clickable “coming soon” status. Replace it with the actual public code URL when available.
- The abstract is a condensed project-page summary, not a verbatim copy of the final manuscript. Update it from the camera-ready abstract when desired.

## Preview

Run `python3 -m http.server 8765` from this directory and visit http://localhost:8765/.

## GitHub Pages

1. Upload this directory's contents to the root of the `Githubhgh/dimot` repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Wait for the Pages deployment to finish. The expected website address is https://githubhgh.github.io/dimot/.

Keep the existing `umf` repository for the UMF project.
