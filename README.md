# Luis Alexis Calvillo Deveze — Portfolio

A responsive, dark-themed one-page portfolio for [Luis Alexis Calvillo Deveze](https://github.com/Alexis-c-d), built with plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. For example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Portfolio content

- The hero features a locally stored portrait (`assets/luis-alexis-calvillo.jpg`) alongside a prominent LinkedIn connection link.
- Each rounded project card is a single link to its source repository: [Rocky Pentapod Robot](https://github.com/Alexis-c-d/rocky-pentapod-robot), [UE5 Digital Twin Research](https://github.com/Alexis-c-d/ue5-digital-twin-research), and [Emergency BPM Beacon](https://github.com/Alexis-c-d/emergency-bpm-beacon).
- The Rocky prototype photo (`assets/rocky-build.jpg`) is from the Rocky project repository. The UE5 Digital Twin Research and Emergency BPM Beacon repositories do not contain project photos or screenshots; their card photos are clearly labeled illustrations, not project imagery.
- Illustrative photo credits: [autonomous delivery robots](https://www.pexels.com/photo/delivery-robots-beside-building-8566538/) by Kindel Media (`assets/ue5-illustrative-mobile-robots.jpg`) and [electronics breadboard](https://www.pexels.com/photo/close-up-of-an-electronics-breadboard-circuit-32894960/) by Bmonster Lab (`assets/beacon-illustrative-electronics.jpg`). Both are used under the [Pexels License](https://www.pexels.com/photo-license/), which permits free personal and commercial use without attribution; the cards credit the photographers.
- The resume section embeds `assets/Luis-Alexis-Calvillo-Deveze-Resume.pdf`, sourced from [Alexis_Calvillo_Resume](https://github.com/Alexis-c-d/Alexis_Calvillo_Resume). Replace this local PDF when publishing an updated resume.

## Deploy to GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on pushes to `main` and on manual workflow dispatch. In the repository's **Settings → Pages**, the build and deployment source should be **GitHub Actions**.

The site URL is <https://alexis-c-d.github.io/alexis-portfolio/>.
