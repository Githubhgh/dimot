# DiMoT project page

Live website: https://githubhgh.github.io/dimot/

Uses the existing **Githubhgh/umf** Academic Project Page Template, preserving its Bulma layout and original `static/css/index.css` styling. Template credits and license links are retained in the footer.

## Edit

- `index.html`: title, authors, affiliations, resource buttons, manuscript abstract, figure captions and BibTeX.
- `static/css/index.css`: original UMF template stylesheet.
- `static/css/dimot.css`: small DiMoT-specific layout adjustments.
- `static/js/index.js`: copy-citation and scroll-to-top interactions.
- `static/images/fig1_panel_a_csa.png`, `fig1_panel_b_amd.png`: the two panels of manuscript Figure 1.
- `static/images/fig2_tr.png`: manuscript Figure 2, the full method overview.

Figures come from the current Overleaf project source. PNGs are recompressed losslessly; dimensions, RGBA mode and decoded pixel bytes are verified unchanged. Click a figure to view it at full resolution.

Replace the disabled code status with a real code link when released. Add future motion videos as new sections using the template's existing section classes.

## Preview and deploy

Run `python3 -m http.server 8765` in this directory, then visit http://localhost:8765/.

GitHub Pages deploys from `main`, `/(root)`. Committing changes to main updates the live website. Keep the original UMF repository unchanged.

## Motion gallery

Eight DiMoT-only, six-second GIF crops and matching still posters are in static/gifs/. Six regular examples and two limitation examples are shown separately. Source timings and crop coordinates are recorded in the downloadable GIF manifest. GIFs play automatically when loaded. The gallery uses short captions and separates failure cases.
