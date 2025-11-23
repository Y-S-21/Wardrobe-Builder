# 🧥 Wardrobe Builder
### AI-Powered Wardrobe, Outfit Planner & Virtual Styling App
**Built using Tauri + React + TailwindCSS + Zustand + FastAPI**

A modern, offline-first wardrobe management and outfit generation app.  
Designed to give users a clean, intelligent, and intuitive way to:
- Upload clothes
- Clean backgrounds
- Create outfits manually
- Generate AI-powered outfit suggestions
- Plan daily fits
- And evolve into AR/mannequin styling in future phases

---

## 🌟 Vision
To create the ultimate digital wardrobe companion for all types of people — practical, aesthetic, AI-enhanced, and future-ready.

---

## 🧩 Core MVP Features
✔️ Upload wardrobe items with auto background removal  
✔️ Clean, standardized wardrobe grid  
✔️ Manual outfit builder (drag & drop / tap assemble)  
✔️ AI outfit generator using items user already owns  
✔️ Basic weather + occasion-aware suggestions  
✔️ Offline-first using local storage (cloud optional later)

Full feature list is maintained in `/docs`.

---

## 🛠 Tech Stack

### Frontend (Desktop App)
- Tauri – lightweight, secure, native desktop wrapper
- React (Vite) – fast, modular UI
- TailwindCSS – utility-first styling
- Zustand – minimal, powerful state management
- TypeScript – safer code, scalable

### Backend (Phase 1+)
- FastAPI – lightweight Python backend
- Local storage first, optional cloud sync later
- AI modules may run locally or via backend depending on feature

---

## 📁 Project Structure

```
Wardrobe-Builder/
│
├── app/                   # Tauri + React frontend
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/               # FastAPI backend (later)
│   ├── app/
│   └── ...
│
├── docs/                  # Documentation folder
│   ├── README.md
│   ├── MVP.md
│   ├── ROADMAP.md
│   ├── FEATURE-LIST.md
│   └── ARCHITECTURE.md
│
└── README.md              # This file
```

---

## 📚 Documentation
All project planning and specifications live inside the `/docs` directory.

| File | Purpose |
|------|---------|
| MVP.md | Defines exact MVP features & scope |
| ROADMAP.md | Phase 1 → Phase 2 → Phase 3 development plan |
| FEATURE-LIST.md | Master list of all features (core + optional) |
| ARCHITECTURE.md | Technical design decisions & flow diagrams |
| README.md (docs) | Additional notes & planning structure |

---

## 🚀 Development Status
Phase 0 — Repository Initialization  
- [x] Folder structure  
- [ ] MVP documentation  
- [ ] Frontend boilerplate  
- [ ] Backend skeleton  
- [ ] AI processing pipeline  

---

## 🎯 Goals for Next Steps
1. Finalize MVP specification (in `/docs/MVP.md`)
2. Set up Tauri + React + Tailwind + Zustand base project
3. Prepare FastAPI backend skeleton
4. Implement wardrobe upload & background removal pipeline
5. Build manual outfit builder UI
6. Add basic AI outfit suggestion logic

---

## 🤝 Contributing
This is an evolving project. Contributions, issues, and suggestions are welcome once core architecture is established.

---

## 📄 License
To be determined.
