# Arctic Travels — Codebase Overview for New Contributors

This document is a practical orientation guide for engineers who are new to this repository.

## 1) What this app is

Arctic Travels is a React single-page app (SPA) built with Create React App, React Router v6, and Tailwind CSS. The current product behavior is mostly front-end driven with local browser storage (not a real backend integration yet).

## 2) Stack and runtime

- **Framework:** React 18
- **Build tooling:** `react-scripts` (Create React App)
- **Routing:** `react-router-dom` v6
- **Styling:** Tailwind CSS + custom arctic theme tokens
- **Animation:** `react-reveal`

Core scripts:

- `npm start` — local dev server
- `npm run build` — production build
- `npm test` — CRA/Jest test runner

## 3) Folder map

- `public/` — static assets (images, base HTML)
- `src/index.js` — React app bootstrap
- `src/App.js` — route map + top-level providers
- `src/context/` — shared context state (auth)
- `src/pages/` — route-level screens
- `src/components/` — reusable UI and feature blocks
- `src/navBar/` — navbar component
- `src/index.css` + `tailwind.config.js` — global styling and design tokens

## 4) App shell and routing flow

App startup and layout composition is straightforward:

1. `index.js` mounts `<App />`
2. `App.js` wraps routes with `AuthProvider` and `BrowserRouter`
3. `Layout` surrounds every page with:
   - Navbar
   - Main content area
   - Footer
   - Floating live chat widget

Routes currently wired:

- `/` → Home
- `/about` → About
- `/support` → Support
- `/faq` → FAQ
- `/signin` → SignIn
- `/signup` → SignUp

## 5) Auth model (important)

Authentication is **mocked client-side** in `AuthContext`:

- `login(email, password)` simulates async success if fields are present
- `signup(email, password, name)` does the same
- active user is persisted in `localStorage` under `arctic_user`
- `logout()` clears local state + storage

This is useful for UI wiring but should be replaced with real API-backed auth before production use.

## 6) Key feature components

### Home page composition

`Home` composes these sections:

- **Hero** with social/copy-link actions
- **BookTrip**: booking form + local validation + success alert
- **Passes**: pass catalog with filtering, slider timing, details modal, and reviews
- **Resort**: destination card grid
- **FooterHero**: visual CTA block

### Other notable components

- **Reviews**: per-item review storage in localStorage (`reviews_${type}_${id}`)
- **Newsletter**: localStorage-backed email list (`newsletter_emails`)
- **LiveChat**: sessionStorage-backed ephemeral chat (`live_chat`)
- **Button / Input**: shared UI primitives used across auth and page forms

## 7) Styling system

Styling uses Tailwind utility classes with custom theme tokens like:

- `arctic-blue`
- `arctic-dark`
- `text-primary`
- `text-secondary`

Global base styles are in `src/index.css` and include an Inter font import and body gradient.

## 8) Realistic expectations for contributors

- Many interactions are currently local-state/localStorage only.
- Several UI sections are marketing-heavy and animation-driven.
- Some files/components may be legacy or not part of active route composition.

When changing behavior, verify whether the feature is route-mounted or currently unused.

## 9) Suggested learning path (first week)

1. Read `src/App.js`, `src/components/Layout.jsx`, and `src/navBar/Navbar.jsx`
2. Study `src/context/AuthContext.jsx` to understand current user/session assumptions
3. Trace `src/pages/Home.jsx` into each composed component
4. Run app and inspect flows: sign in/out, book trip, pass details + reviews
5. Propose a first cleanup PR:
   - remove dead components or wire them intentionally
   - convert direct `alert()` usage to UI feedback
   - document storage keys and data shapes

## 10) Good “next upgrades”

- Replace mock auth with real backend auth
- Add API-backed booking and reviews
- Introduce route protection for account-specific pages
- Add automated tests for auth flows and high-traffic UI paths
- Improve project-level docs (README should include app-specific setup and architecture)

---

If you are onboarding, start by running the app and tracing one end-to-end path:

**Landing → Sign Up → Home → Open pass details → Add a review → Sign out**

That one flow touches routing, context, reusable components, and browser persistence patterns used across the codebase.
