import { defineConfig } from 'astro/config';

// Remplacez 'fmmaf' par le nom de votre dépôt GitHub
export default defineConfig({
  site: 'https://votre-username.github.io',
  base: '/fmmaf',
  output: 'static',
  trailingSlash: 'never',
});
