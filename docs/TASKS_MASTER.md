# Wardrobe Builder — MASTER TASK BLUEPRINT
This is the complete multi-phase task structure of the project.  
It defines all work from MVP → Full Vision.

Team:
- **You** – Product Lead + Frontend Lead  
- **Friend** – Backend + AI Lead

Status codes:
- **P0** = Critical / must-do first  
- **P1** = Important  
- **P2** = Nice-to-have  
- **P3** = Future expansion  

---

# ============================
# 1. PHASE 0 — Preparation
# ============================

### P0 — Vision & Architecture (DONE)
- Finalize vision document  
- Finalize development plans  
- Finalize needs document  
- Protect main branch  
- Set up repo structure  

### P0 — Create Branching Strategy
- Create `main` → protected  
- Create `dev` branch  
- Create feature branches per topic  

---

# ============================
# 2. PHASE 1 — Wireframes
# ============================

### YOU (Lead/UI)
#### P0 — Wireframe Structure
- Define screen list  
- Define navigation structure  
- Define layout grid system (4–6 columns)  

#### P0 — Core Wireframes
- Wardrobe Page  
- Outfit Builder Page  
- AI Suggestions Page  
- Settings Page  

#### P1 — Optional Wireframes
- Onboarding Page  
- Item Editor Modal  

#### P2 — Future Wireframes
- Social Feed  
- Stylist Dashboard  
- Brand Pages  
- Marketplace  
- AR Try-On Screen  

---

# ============================
# 3. PHASE 2 — UI Skeleton (React + Tailwind)
# ============================

### YOU
#### P0 — UI Framework Setup
- Page routes  
- Navbar/Sidebar  
- Layout components  

#### P0 — Core Page Shells
- WardrobePage.tsx  
- OutfitBuilderPage.tsx  
- SuggestionsPage.tsx  
- SettingsPage.tsx  

#### P1 — Shared Components
- Card  
- Button  
- Input  
- Modal  
- Dropdown  
- Tabs  

#### P2 — Responsive Layout (Desktop-primary)
- Grid scaling  
- Sidebar collapse  

---

# ============================
# 4. PHASE 3 — Wardrobe Core
# ============================

### YOU (Frontend)
#### P0 — Upload UI
- File picker  
- Drag-and-drop zone  
- Preview before saving  

#### P0 — Wardrobe Grid
- Multi-column grid  
- Item card component  
- Tags display  

#### P1 — Item Editor
- Color picker  
- Category selector  
- Tag editor  

#### P1 — Filtering & Sorting
- Category filters  
- Color filters  
- Search bar  

---

### FRIEND (Backend)
#### P0 — FastAPI Setup
- Create project structure  
- Enable CORS  
- Create `/upload` endpoint  

#### P1 — Image Processing
- Background removal pipeline  
- Resize/compress  
- Generate thumbnails  

#### P1 — Metadata Extraction
- Color extraction  
- Basic category tagging  

#### P2 — Local Database Model
- item_id  
- path  
- tags  
- color  
- category  

---

# ============================
# 5. PHASE 4 — Outfit Builder
# ============================

### YOU (Frontend)
#### P0 — Canvas Implementation
- Drag items from wardrobe  
- Resize/position items  
- Delete / undo / clear canvas  

#### P1 — Save Outfit
- Save as JSON layout  
- Save generated outfit preview  

#### P2 — Outfit Templates
- Basic templates  
- Layout presets  

---

### FRIEND (Backend)
#### P0 — Save Outfit API
- POST /outfits  
- GET /outfits  
- Delete outfit  

#### P1 — Generate Outfit Preview
- Composite items into single image  

---

# ============================
# 6. PHASE 5 — AI Suggestion Engine
# ============================

### FRIEND (Backend/AI)
#### P0 — Base LLM Prompt Engine
- Provide list of wardrobe items  
- Ask AI to generate outfit combinations  

#### P1 — Weather Integration
- Fetch weather based on city  
- Add “weather” to AI context  

#### P1 — Occasion Logic
- Casual  
- Formal  
- Date  
- Work  

#### P2 — Preference Memory
- Learn user’s color/style preferences  

---

### YOU (Frontend)
#### P0 — AI Suggestions UI
- Show outfit suggestions  
- Allow user to save them  
- Allow user to edit them in builder  

#### P1 — Smart Filters
- “Only wardrobe items”  
- “Include missing items”  

---

# ============================
# 7. PHASE 6 — Polishing & MVP Release
# ============================

### YOU
- Clean UI  
- Add shortcuts  
- Add loading states  
- Finalize theme  

### FRIEND
- Optimize APIs  
- Clean logging  
- Error handling  

---

# ============================
# 8. PHASE 7 — Web Version (React)
# ============================
### Both (Later)

- Convert desktop UI → responsive web UI  
- Move storage to cloud  
- User authentication  
- Basic social share links  

---

# ============================
# 9. PHASE 8 — Social Graph
# ============================

### Future Expansion

### FRIEND
- Feed system (paginated)  
- Post model  
- Like/comment APIs  

### YOU
- Social UI  
- Creator profiles  
- Explore feed  

---

# ============================
# 10. PHASE 9 — Stylist Ecosystem
# ============================

### FRIEND
- Client wardrobe access  
- Permissions system  
- Booking engine  

### YOU
- Stylist dashboard  
- Client view  
- Lookbook export  

---

# ============================
# 11. PHASE 10 — Commerce Layer
# ============================

### FRIEND
- Brand API integration  
- Product listing  
- Affiliate links  

### YOU
- “Buy missing items” UI  
- Product cards  

---

# ============================
# 12. PHASE 11 — AR & VR (Long Term)
# ============================

### FRIEND
- AR garment pipeline  
- Avatar system  

### YOU
- AR try-on UI  
- VR room UI  

---

# ============================
# END — MASTER BLUEPRINT COMPLETE
# ============================

