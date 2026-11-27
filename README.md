# Alexis — Personal portfolio

A lightweight, responsive, one-page portfolio for GitHub user [Alexis-c-d](https://github.com/Alexis-c-d). It uses plain HTML, CSS, and JavaScript with no build step or runtime dependencies.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. For example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Make it yours

- Replace the starter copy in `index.html` with your own introduction, real skills, and project details.
- Update project links to point to each project's live demo or repository.
- Add your preferred contact method in the contact section when you are ready.
- Adjust colors, spacing, and typography in `styles.css`.

The project titles and descriptions are deliberately generic placeholders; they do not represent real projects or credentials.

## Deploy to GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on pushes to `main` and on manual workflow dispatch. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The workflow needs `pages: write` and `id-token: write` permissions.

For this repository, the expected site URL is <https://alexis-c-d.github.io/alexis-portfolio/>.
