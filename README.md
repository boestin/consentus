# Consentus

This repository contains the compiled `main.js` file that powers the demo in `index.html`. The original JavaScript/React source files used to build `main.js` are not included. If you have access to those sources, place them in the `src/` directory.

## Build

Install dependencies once with `npm install` (requires Node.js). To rebuild `main.js` from the source files in `src/`, run:

```bash
npm run build
```

The build script uses Browserify and Babel to bundle React components from `src/index.js` and its imports into `main.js`.
