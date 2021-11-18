# Evokko website

This is based on [SvelteKit](https://kit.svelte.dev).

## Developing

To install dependencies 
```bash 
npm install
```

To start a development server and live update:
```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

The app deployment currently lives on [Digital Ocean](https://www.digitalocean.com). Pushing to the main branch on github will deploy the new app using a docker image of the Node app.
