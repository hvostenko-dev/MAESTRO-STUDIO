<div align="center">

# 🎬 MAESTRO STUDIO

**Cinematic Visuals • Premium Production • Bold Identity**

A modern, multilingual landing page for **MAESTRO STUDIO** (by Maestro Prod.) — a photo, video, and podcast production & equipment rental studio in Ashdod, Israel. Built with **React 19**, **Framer Motion**, **i18next**, and **Swiper**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-maestro--studio--phi.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://maestro-studio-phi.vercel.app)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-EN_%7C_RU_%7C_HE_(RTL)-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://react.i18next.com/)

</div>

---

## ✨ Key Features

- 🌐 **Full Multilingual & RTL Support (`EN` / `RU` / `HE`)** — Powered by `i18next` and `react-i18next` with automatic browser language detection and dynamic `LTR` ↔ `RTL` document direction switching for Hebrew.
- 🎞️ **Smooth Motion & Micro-Interactions** — Staggered hero reveals, interactive service cards, and scroll-aware animations crafted with **Framer Motion**, respecting system `prefers-reduced-motion` preferences.
- 🖼️ **Interactive Portfolio Gallery** — Touch-friendly work showcase powered by **Swiper**.
- 🧭 **Seamless Single-Page Navigation** — Sticky glassmorphic navbar with active section spying (`react-scroll`), keyboard-accessible mobile drawer (`Escape` & outside-click support), and direct cross-link to [**MAESTROWEB**](https://maestro-web-nine.vercel.app/).
- ♿ **Built-in Accessibility (a11y) Suite** — Persistent `localStorage`-backed accessibility controls including font scaling, high contrast mode, color inversion, animation disabling, link underlining, and an Accessibility Statement modal.
- 💬 **Direct WhatsApp Booking Flow** — Instant booking CTAs and contact integration for studio & equipment rental or full-service production.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19 (`react`, `react-dom`) |
| **Animations** | Framer Motion (`framer-motion`) |
| **Internationalization** | `i18next`, `react-i18next`, `i18next-browser-languagedetector` |
| **Carousels & UI** | `swiper`, `react-scroll`, `react-icons`, `lucide-react` |
| **Styling** | Custom Modular CSS, Responsive Breakpoints, RTL-aware Layouts |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```text
MAESTRO-STUDIO/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── maestro-icon.png
├── src/
│   ├── assets/                        # Studio & portfolio gallery images (gallery-1..9.png)
│   ├── components/
│   │   ├── NavBar.jsx / .css          # Sticky header, mobile drawer & MAESTROWEB link
│   │   ├── LanguageSwitcher.jsx.jsx   # EN / RU / HE switcher
│   │   ├── Hero.jsx / .css            # Animated hero section with WhatsApp booking CTA
│   │   ├── Gallery.jsx / .css         # Portfolio showcase
│   │   ├── Services.jsx / .css        # Studio Rental & Full Production service cards
│   │   ├── FAQ.jsx / .css             # Accordion FAQ section
│   │   ├── Contact.jsx / .css         # Studio address, map/details & WhatsApp contact
│   │   ├── Footer.jsx / .css          # Site footer
│   │   ├── AccessibilityMenu.jsx      # Persistent a11y toolbar (contrast, font size, etc.)
│   │   ├── AccessibilityStatement.jsx # Legal & compliance accessibility statement
│   │   └── Responsive.css             # Global responsive utilities
│   ├── locales/
│   │   └── translations.json          # Centralized EN, RU, and HE dictionary
│   ├── i18n.js                        # i18next initialization & language detector setup
│   ├── App.js                         # Root component & dynamic document dir (LTR/RTL)
│   └── index.js                       # Application entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ilyajavadeveloper/MAESTRO-STUDIO.git
   cd MAESTRO-STUDIO
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```
Generates an optimized production bundle in the `build/` directory.

---

## 🌍 Localization (`i18n`)

All copy is managed in [`src/locales/translations.json`](src/locales/translations.json) under three top-level locale keys:
- `en` — English (LTR)
- `ru` — Russian (LTR)
- `he` — Hebrew (RTL — automatically updates `document.documentElement.dir = "rtl"`)

---

## 🔗 Live Links

- **Live Website:** [maestro-studio-phi.vercel.app](https://maestro-studio-phi.vercel.app)
- **Digital Agency Partner:** [MAESTROWEB](https://maestro-web-nine.vercel.app/)

---

<div align="center">
  <sub>© 2025–2026 MAESTROSTUDIO by Maestro Prod. All rights reserved.</sub>
</div>
