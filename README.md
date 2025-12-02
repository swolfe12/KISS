# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Decap CMS + Netlify Identity Setup (Important)

This project uses **Decap CMS** with **Netlify Identity + Git Gateway**.  
Because this is a Vite/React site, extra configuration is required for login and invitations to work properly.

This guide ensures everything functions correctly on Netlify.

---

## 1. Required Files

### `public/index.html`

Must include the Netlify Identity widget so invite tokens can be detected:

```html
<script
  defer
  src="https://identity.netlify.com/v1/netlify-identity-widget.js"
></script>
public/admin/index.html Loads the Decap CMS app:

<script src="https://unpkg.com/decap-cms@3.0.0/dist/decap-cms.js"></script>
<script>
  window.CMS_MANUAL_INIT = true;
  CMS.init();
</script>

public/_redirects Must contain exactly: /admin/* /admin/index.html 200
/.netlify/identity/* /.netlify/identity/:splat 200 /* /index.html 200 Order
matters. Spacing matters. Only one /* rule allowed. These redirects ensure:
/admin loads the CMS correctly Identity URLs are not intercepted by the Vite SPA
router All other routes fall back to index.html 2. Netlify Identity
Configuration Inside the Netlify dashboard: Enable Identity Site → Identity →
Enable Identity Registration Mode Set to Invite Only (recommended) Enable Git
Gateway Identity → Services → Git Gateway → Enable This allows CMS edits to
commit back to the GitHub repository. 3. Adding Yourself as a CMS User Go to
Identity → Users Click Invite User Enter your email address You will receive an
invite link like: https://<yoursite
  >.netlify.app/#invite_token=XXXX Open this link in an Incognito/Private
  browser window. If everything is configured correctly you will see: “Set Your
  Password” After setting your password you can log in at: https://<yoursite
    >.netlify.app/admin/ 4. Troubleshooting If the password modal does not
    appear: Ensure public/index.html includes the Identity widget script Ensure
    _redirects contains only the three rules shown above Delete the user from
    Netlify Identity and send a new invite Open the invite link in a
    private/incognito window Clear Netlify cache and redeploy (Deploys → Trigger
    Deploy → Clear cache and deploy site) Netlify Identity must load before the
    Vite/React app in order for invite tokens to be processed correctly. Summary
    To make Decap CMS work with Vite on Netlify: Load the Identity widget on the
    root page Add CMS to /public/admin Enable Netlify Identity and Git Gateway
    Add the correct Netlify redirect rules Use invite links to create CMS users
    Once configured, Decap CMS works reliably and edits will commit directly to
    your repository. ---</yoursite
  ></yoursite
>
```
