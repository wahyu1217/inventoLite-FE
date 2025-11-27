# 📦 InventoLite — Frontend
**Modern Inventory Management System (Lite Version)**  
Built with **Next.js 16**, **React 19**, **Tailwind v4**, and **TypeScript**.

InventoLite is a lightweight and fast inventory management system designed for small to medium businesses.  
This frontend application provides clean UI components for stock management, goods receipt, picking, and inventory dashboards.

---

## 🚀 Features

### ✅ Core UI Modules
- Dashboard (KPIs: low stock, inbound/outbound, activity timeline)
- Items Management (list, detail, search, barcode-ready)
- Stock Movements (in/out/adjust)
- Goods Receipt UI
- Picklist page (mobile-friendly for warehouse workers)
- Inventory Count (cycle count & reconcile)

### 🎨 UI/UX
- Fully responsive
- Manrope as primary typography
- Modern SaaS design
- Tailwind CSS v4 (zero-config)
- Dark mode-ready

### 🧰 Dev Tools
- ESLint 9 (flat config)
- Prettier 3
- Husky pre-commit hooks
- TypeScript
- Zustand state management

---

## 🛠️ Tech Stack

| Category | Technology |
|---------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| State Mgmt | Zustand |
| Validation | Zod |
| Auth/Storage (optional) | Firebase |
| Tooling | ESLint 9, Prettier, Husky |

---

## 📂 Project Structure

```
inventolite-fe/
│── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── (routes)/
│       ├── dashboard/
│       ├── items/
│       ├── stock/
│       └── ...
│
│── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── shared/
│
│── lib/
│   ├── api/
│   ├── formatter/
│   ├── hooks/
│   └── constants/
│
│── store/
│── public/
│── .husky/
│── .gitignore
│── package.json
│── postcss.config.mjs
│── eslint.config.mjs
│── tsconfig.json
└── README.md
```

---

## 📦 Installation & Setup

### 1. Clone Repo
```sh
git clone https://github.com/wahyu1217/inventoLite-FE.git
cd inventolite-fe
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run Development
```sh
npm run dev
```

### 4. Build for Production
```sh
npm run build
npm start
```

Runs on port **3001** as configured in package.json.

---

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (port 3001) |
| `npm run build` | Build the Next.js app |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run prepare` | Initialize Husky hooks |

---

## 🎨 Fonts

Using **Manrope** via `next/font/google`.

```tsx
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
```

---

## 🧪 Code Quality

Pre-commit hook:

- ESLint auto-fix  
- Prettier formatting  
- No warnings allowed (`--max-warnings=0`)  

Configured via:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --max-warnings=0",
    "prettier --write"
  ]
}
```

---

## 👥 Contributors

### **Core Developers**
| Name | Role | GitHub |
|------|------|--------|
| **Wahyu Ramadhan** | Frontend Developer & Technical Architect | https://github.com/wahyu1217 |
| **Muhammad Ilmi Alimudin** | Frontend Contributor | https://github.com/ilmialimudins |

---

## 🏗️ Backend Repository (Coming Soon)
InventoLite Backend (NestJS + PostgreSQL) — soon to be released.
---