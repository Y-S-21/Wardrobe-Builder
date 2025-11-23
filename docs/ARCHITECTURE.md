# 🏗️ Technical Architecture – Wardrobe Builder

This document describes the technical design for the app.

---

# 🛠 Tech Stack Overview

## Frontend (Desktop App)
- Tauri (Rust + JS bridge)
- React + Vite
- TailwindCSS
- Zustand (state management)
- TypeScript

## Backend
- FastAPI (Python)
- Local storage first
- Optional cloud DB (Phase 2+)

## AI / Image Processing
- Background removal (ONNX, ML model, or external API)
- Image preprocessing pipeline
- Simple rule-based AI for outfit generation
- Later: more advanced ML

---

# 📁 Folder Structure (Planned)

```
Wardrobe-Builder/
│
├── app/                     # Tauri + React
│   ├── src/
│   ├── public/
│   └── tauri.conf.json
│
├── backend/                 # FastAPI backend
│   ├── app/
│   ├── main.py
│   └── requirements.txt
│
├── docs/                    # Documentation
│
└── README.md
```

---

# 🔄 Data Flow

## Wardrobe Upload
User → React UI → Image Preprocess → Background Removal  
→ Save processed image locally → Add metadata (category/tags)

## Manual Outfit Builder
User selects items → React UI layers multiple images  
→ Save outfit config (IDs and positions)

## AI Outfit Generator
Wardrobe items → AI logic → Suggest outfit → Show preview → Save if accepted

---

# 🧠 MVP AI Logic (Simple)
- Score tops/bottoms/shoes by:
  - occasion tag  
  - weather suitability  
  - color compatibility  
- Combine highest-scoring combinations

Later phases will introduce ML models for:
- color matching  
- body type  
- personal preference  

---

# 🧵 Backend Workflow (Phase 2+)
- FastAPI handles:
  - image processing  
  - cloud sync  
  - AI inference (if needed)  

- Database (future):
  - SQLite → PostgreSQL (cloud)

---

# 📦 Local Storage (Phase 1)
Use:
- IndexedDB  
- filesystem access (Tauri FS API)  
- JSON structures for metadata  
- Zustand store for runtime state  

---

# 🛠 Dev Principles
- Offline-first  
- Modular AI pipeline  
- Scalable folder structure  
- Separation of concerns  
- Easy to port to mobile later (React Native)

---

# 🏁 End of Architecture Doc
