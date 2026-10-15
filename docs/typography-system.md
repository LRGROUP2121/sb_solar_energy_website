# 📐 SB Solar Energy - Typography & Font System Guide

## 1. Issue Analysis (Current State)
Currently across pages (`Home`, `AboutUs`, `Products`, `Services`, `EmiSolarPlan`, `Contact`), arbitrary tailwind classes like `text-[12px]`, `text-[13px]`, `text-[14px]`, `text-[15px]`, `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, with inconsistent `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, and `font-black` are scattered randomly. This leads to:
- Inconsistent visual weight across headings and body copy
- Cluttered UI without a crisp typographic hierarchy
- Non-standardized line heights and letter tracking

---

## 2. Proposed Typography Families for Selection

| Font Family | Character & Feel | Best For | Industry Example |
| :--- | :--- | :--- | :--- |
| **Option A: Inter** *(Current Standard)* | Neutral, clean, exceptionally legible at micro & macro sizes | Global clean SaaS & modern corporate tech | Apple, Stripe, Linear |
| **Option B: Outfit** *(Modern Geometric)* | High visual energy, tech-forward, energetic curved terminals | Clean energy, climate tech, modern renewable brands | Tesla, SolarCity, Enphase |
| **Option C: Plus Jakarta Sans** *(Editorial Modern)* | Premium, warm, friendly corporate feel with crisp legibility | Modern Indian startups & premium infrastructure | FinTech, Clean Energy Apps |
| **Option D: Montserrat (Headings) + Inter (Body)** | Strong, authoritative industrial headings + hyper-readable body | Industrial EPC, manufacturing, engineering | L&T, Tata Power, EPC Contractors |

---

## 3. Standardized Scale & Hierarchy Token System

To eliminate arbitrary font sizes, all pages will use these standardized typography roles:

| Role | Class Standard | Size / Weight / Line-Height | Intended Usage |
| :--- | :--- | :--- | :--- |
| **Hero Display / H1** | `text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight` | ~32px – 48px | Page Hero main heading |
| **Section Title / H2** | `text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug` | ~24px – 30px | Main Section headings |
| **Card / Subsection / H3** | `text-lg sm:text-xl font-bold text-slate-800 leading-snug` | ~18px – 20px | Feature cards, modal titles, key blocks |
| **Subheading / H4** | `text-base font-semibold text-slate-800 leading-snug` | ~16px | Small card headings, list headers |
| **Badge / Eyebrow** | `text-xs font-bold uppercase tracking-widest text-primary` | ~12px | Section category pill, kicker tag |
| **Body Large (Lead)** | `text-base sm:text-lg text-slate-600 leading-relaxed font-normal` | ~16px – 18px | Hero subtitles, section intros |
| **Body Base** | `text-sm sm:text-base text-slate-600 leading-relaxed font-normal` | ~14px – 16px | General paragraphs, descriptions |
| **Body Small** | `text-xs sm:text-sm text-slate-500 leading-relaxed font-normal` | ~12px – 14px | Card subtext, form hints, footer notes |
| **Caption / Fine Print** | `text-[11px] sm:text-xs text-slate-400 font-medium` | ~11px – 12px | Timestamps, legal disclaimers, status badges |
| **Primary Button** | `text-sm sm:text-base font-semibold px-5 py-2.5 rounded-xl` | ~14px – 16px | CTA buttons, submit actions |
| **Metric / Number Highlight** | `text-2xl sm:text-3xl font-black tracking-tight text-slate-900` | ~24px – 30px | Stat counters, EMI amounts, kW stats |

---

## 4. Next Step: Visual Testing Page
We created the testing laboratory page at:
👉 **`/typography-test`** (`http://localhost:5173/typography-test`)

On this testing page, you can:
1. Switch live between the 4 font pairings (**Inter**, **Outfit**, **Plus Jakarta Sans**, **Montserrat + Inter**).
2. Switch live between **Comfortable (Default)**, **Compact**, and **Bold Tech** scale presets.
3. Preview real-life components:
   - Hero banner preview
   - Section heading & lead text preview
   - Feature & stats cards
   - EMI calculator snippet & buttons
4. Pick the winner, after which we will systematically propagate this standard to the entire project!
