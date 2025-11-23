# 🧩 MVP Specification – Wardrobe Builder

## 🎯 Purpose of MVP
This MVP focuses on delivering the simplest, most useful version of the app:
- Upload clothes
- Clean backgrounds
- Manually create outfits
- Generate AI-powered outfit suggestions
- Basic weather-aware recommendations

This core loop makes the app functional and valuable from day 1.

---

# ✅ Core MVP Features

## 1. 🧥 My Wardrobe
### Functional Requirements:
- Add items via photo upload or screenshot
- Auto background removal + center cropping
- Auto-detect category (top, bottom, shoes, accessory)
- Manually edit categories/tags
- Standardized image background
- Wardrobe grid view with filters (category, color)

### Technical:
- Local processing or backend API for segmentation
- Store metadata locally (Zustand or local DB)

---

## 2. 🎨 Manual Outfit Builder
### Functional Requirements:
- Select multiple wardrobe items and assemble an outfit
- Display outfit preview (2D layered)
- Save outfit under a name (e.g., “Office Casual 1”)
- Show saved outfits list

### Technical:
- Use drag-drop or tap-to-add components
- Save outfits in local storage

---

## 3. 🤖 AI Outfit Generator
### Functional Requirements:
- Suggest outfits using **items user already owns**
- Basic weather-driven logic (hot, warm, cold, rain)
- Occasions: Work / Casual / Date / Gym
- Provide 1–3 suggestions

### Technical:
- Simple rule-based logic + lightweight ML
- No chatbot/LLM mode in MVP

---

## 4. 🌤 Weather + Occasion Smart Suggestions
### Features:
- Ask permission for location OR enter city manually
- Fetch temperature + condition
- Adjust outfit suggestions:
  - Hot → light fabrics
  - Cold → layering pieces
  - Rain → shoes suggestions
- Combine with occasion tag

---

## 5. 💾 Local Storage Mode (Offline-first)
- All items saved locally
- Outfits saved locally
- No cloud requirement
- Maintain structured local data

---

# 🚫 Out of Scope for MVP

- Template-based mannequin preview  
- Full AR or 3D try-on  
- Calendar usage tracking  
- Cost-per-wear analytics  
- Missing items + buy links  
- Social/influencer features  
- AI stylist chat mode  
- Cloud sync  
- Trend analysis  
- Body scanning

These belong to Phase 2 or Phase 3.

---

# 🧪 MVP Success Criteria

1. User can digitize at least 10–20 wardrobe items easily  
2. Background removal is clean enough for daily use  
3. Manual outfit creation is smooth and enjoyable  
4. AI suggestions feel practical, not gimmicky  
5. Weather/occasion suggestions work reliably  
6. App runs offline without issues

---

# 🏁 End of MVP Spec
