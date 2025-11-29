# Wardrobe Builder — System Architecture

This document defines the **high-level architecture**, platform structure, technology choices, and communication flows for the MVP and long-term product.

---

# 🧱 1. Architecture Goals

- Build a **desktop-first** product with fast UX and local storage.
- Keep backend flexible so it can evolve from local → hybrid → full cloud.
- Provide a clean separation between **frontend (React)** and **backend (FastAPI)**.
- Support long-term expansion (web, mobile, AR, VR) without rewriting core logic.

---

# 🏗 2. High-Level Architecture Diagram

```
     ┌───────────────────────────────┐
     │        Desktop Client         │  (Tauri + React + Zustand)
     │  - UI Rendering               │
     │  - State Management           │
     │  - Outfit Builder Canvas      │
     │  - Local-First Storage        │
     └───────────────────────────────┘
                    │
                    │ Tauri IPC (Local)
                    ▼
     ┌───────────────────────────────┐
     │           Backend              │  (FastAPI)
     │  - Upload API                 │
     │  - Background Removal Engine  │
     │  - Image Processing           │
     │  - AI Suggestion Engine       │
     │  - Weather Integration        │
     └───────────────────────────────┘
                    │
                    │ File I/O / Local FS
                    ▼
     ┌───────────────────────────────┐
     │        Local Storage          │
     │  - JSON DB / SQLite (MVP)    │
     │  - Wardrobe Items            │
     │  - Outfits                   │
     └───────────────────────────────┘
```

Later phases add:

- Cloud DB  
- Web API  
- Mobile app  
- AR/VR engines  

---

# ⚙️ 3. Technology Stack

## Frontend (Desktop)
| Component | Tech |
|----------|------|
| Shell | Tauri |
| UI | React + TypeScript |
| Styling | TailwindCSS |
| State | Zustand |
| Routing | React Router |
| Image Canvas | Custom HTML5 + Fabric.js (future possibility) |

---

## Backend
| Feature | Tech |
|---------|------|
| API Framework | FastAPI |
| Image Processing | Python (Pillow, OpenCV, rembg) |
| AI | OpenAI or LLM via API |
| Weather API | OpenWeather or Tomorrow.io |
| Storage | SQLite (local), S3 in future |

---

## File Storage
| Stage | Storage |
|-------|---------|
| MVP | Local filesystem (`/Wardrobe/AppData`) |
| Future | Supabase or AWS S3 |

---

# 📁 4. Folder Structure (Proposed)

## Frontend (Tauri + React)
```
/src
  /pages
  /components
  /state (Zustand)
  /utils
  /hooks
  /assets
  /styles
/tauri
  tauri.conf.json
```

---

## Backend (FastAPI)
```
/backend
  /api
    upload.py
    outfits.py
    suggestions.py
  /services
    image_processing.py
    ai_engine.py
    weather.py
  /models
    item.py
    outfit.py
  /db
    database.py
  main.py
```

---

# 🔌 5. Communication Flows

## A. Upload Clothing Item
```
Frontend → Tauri → FastAPI (/upload)  
FastAPI → background removal  
FastAPI → save item to local DB  
Frontend → refresh wardrobe grid
```

---

## B. AI Outfit Suggestion
```
Frontend → /suggest  
FastAPI → LLM with wardrobe inventory  
FastAPI → return outfit structure  
Frontend → render suggested outfit
```

---

## C. Weather-Based Suggestion
```
Frontend → /weather-suggestion  
Backend → Weather API call  
Backend → LLM  
Frontend → Display results
```

---

## D. Manual Outfit Saving
```
Frontend → Save JSON layout → /save-outfit  
Backend → store JSON + thumbnail in local DB  
Frontend → display in Outfit Gallery
```

---

# 🧩 6. Storage Architecture

## MVP Storage
- Clothing images → Local filesystem  
- Metadata → SQLite or JSON  
- Outfits → JSON + image  

## Cloud (Future)
- Move images → S3 or Supabase  
- Move DB → Postgres  
- Add authentication  

---

# 🔐 7. Security Architecture (Planned)
- Local IPC only  
- No exposed public APIs in MVP  
- Sandbox within Tauri app  
- Secrets stored in environment files  

Future:
- JWT auth  
- OAuth for users  
- Role-based access control (stylists, brands, users)

---

# 🚀 8. Scalability Architecture (Future)

## Expand to:
- Web API  
- CDN for clothing images  
- Microservices (AI, image processing)  
- Job queue for heavy tasks  

---

# 🧭 9. Architecture Principles

1. **Local-first, cloud-later**  
2. **UI–Backend clear separation**  
3. **Offline-friendly**  
4. **Incrementally upgradeable**  
5. **API-first future roadmap**  
6. **Simple → scalable**  

---

# 📌 10. Versioned Architecture Strategy

## MVP (Now)
- Local image processing  
- Local DB  
- No accounts  
- Desktop only  

## V1.0 (Next)
- Cloud sync  
- User accounts  
- Mobile app  

## V2.0
- Social networking  
- Stylists  
- Marketplace  

## V3.0
- AR try-on  
- VR wardrobes  
- Virtual shops  

---

# ✅ End of Architecture Document

