# Deployment & Quick Start Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd "c:\Users\PC\Downloads\ASP website"
npm install
```

### 2. Start the Application
```bash
npm start
```

**What happens:**
- Backend starts on http://localhost:5000
- Frontend starts on http://localhost:3000
- SQLite database auto-initializes

### 3. Open in Browser
Navigate to: **http://localhost:3000**

### 4. Test the Application
1. Click "Sign Up" and create an account
2. Create a new post with the "+ New Post" button
3. Submit the contact form
4. View all community posts

---

## Project Files Overview

### Core Files
| File | Purpose |
|------|---------|
| `index.html` | Main HTML page with semantic structure |
| `backend/server.js` | Express server entry point |
| `js/app.js` | Main application logic (1000+ lines) |
| `js/api.js` | Centralized API service |
| `js/ui-manager.js` | UI utilities and helpers |
| `.env` | Environment configuration |
| `package.json` | Dependencies and scripts |

### Backend Files
| File | Purpose |
|------|---------|
| `backend/controllers/*` | Handle HTTP requests |
| `backend/services/*` | Business logic layer |
| `backend/routes/*` | API endpoints |
| `backend/config/database.js` | SQLite setup & queries |
| `backend/middleware/auth.js` | JWT verification |
| `backend/utils/errors.js` | Error handling |

### Frontend Styles
| File | Size | Purpose |
|------|------|---------|
| `css/design-system.css` | 200 lines | CSS variables & reset |
| `css/components.css` | 400 lines | Reusable components |
| `css/layout.css` | 300 lines | Layout & sections |
| `css/styles.css` | 50 lines | Main imports & utilities |

---

## Key Features Reference

### Authentication Flow
```
User → Sign Up Form → Backend Validation → Hash Password → Store User
     ↓
     Login Form → Backend Auth → Generate JWT → localStorage → Access Protected APIs
```

### Post Creation Flow
```
User (Authenticated) → New Post Button → Modal Form → Submit → API Call
  ↓
Backend → Validate Title → Insert into DB → Return Post → Render on Frontend
```

### Contact Form Flow
```
Any User → Contact Form → Submit → Backend Validate → Insert Submission → Success Message
```

---

## API Quick Reference

### Authentication
```bash
# Sign Up
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'

# Sign In
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get Current User
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Posts
```bash
# Create Post
curl -X POST http://localhost:5000/api/posts \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Post","content":"Content here"}'

# Get All Posts
curl http://localhost:5000/api/posts

# Get Single Post
curl http://localhost:5000/api/posts/1

# Delete Post
curl -X DELETE http://localhost:5000/api/posts/1 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## Common Tasks

### Run Backend Only
```bash
npm run server
```
Backend runs on http://localhost:5000

### Run Frontend Only
```bash
npm run client
```
Frontend runs on http://localhost:3000

### Reset Database
```bash
# Delete the database file
rm data.db

# Restart server (auto-creates new database)
npm start
```

### Check API Health
```bash
curl http://localhost:5000/api/health
```
Returns: `{"status":"ok","timestamp":"2026-01-08T...}"}`

---

## Environment Configuration

### Development (.env)
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
JWT_SECRET=dev-secret-key
CORS_ORIGIN=http://localhost:3000
```

### Production Changes
```env
PORT=5000
NODE_ENV=production
CLIENT_URL=https://yourdomain.com
JWT_SECRET=your-long-random-secret-key-here
CORS_ORIGIN=https://yourdomain.com
```

---

## Project Statistics

```
Total Files: 30+
Backend Code: ~2000 lines
Frontend Code: ~1500 lines
CSS Code: ~950 lines
Total: ~4500 lines of production code

Architecture Layers: 3 (Controllers, Services, Middleware)
Reusable Components: 15+
API Endpoints: 12
Database Tables: 4
CSS Custom Properties: 40+
```

---

## Architecture Visualization

```
┌─────────────────────────────────────────────┐
│           Frontend (Browser)                │
├─────────────────────────────────────────────┤
│  HTML (index.html)                          │
│  ↓                                          │
│  CSS (design-system, components, layout)    │
│  ↓                                          │
│  JavaScript (app.js + api.js + ui-manager)  │
└────────────┬────────────────────────────────┘
             │ HTTP Requests
             ↓
┌─────────────────────────────────────────────┐
│         Backend (Node.js/Express)           │
├─────────────────────────────────────────────┤
│  Routes → Controllers → Services → Utils    │
│           ↓                                 │
│  Database Layer (SQLite)                    │
│  ↓                                          │
│  Users | Posts | Submissions | Comments     │
└─────────────────────────────────────────────┘
```

---

## Debugging Tips

### Check Backend Logs
Look for:
- "✓ Connected to SQLite database"
- "✓ Database tables initialized"
- "🚀 Server running on http://localhost:5000"

### Check Frontend Logs
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for API calls

### Common Issues

**Port Already in Use**
```bash
# Find process
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

**CORS Error**
- Check `CORS_ORIGIN` in `.env`
- Verify frontend URL matches
- Restart server

**Database Error**
- Delete `data.db`
- Restart server
- Check file permissions

**Auth Token Expired**
- Sign out
- Sign in again
- Token lasts 24 hours

---

## Performance Notes

- Posts load: 10 per page (pagination)
- Images load from URLs only (no upload)
- Form submissions are async with loading states
- Modal animations use CSS transforms
- No framework overhead (vanilla JS)
- Static assets served directly

---

## Security Checklist for Deployment

- [ ] Change `JWT_SECRET` to random 32+ character string
- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS (SSL certificate)
- [ ] Update `CORS_ORIGIN` to production domain
- [ ] Enable rate limiting on API
- [ ] Set up database backups
- [ ] Configure firewall rules
- [ ] Use environment variables for secrets
- [ ] Enable request size limits
- [ ] Set up monitoring/logging

---

## Next Steps

1. **Test Thoroughly**
   - Create multiple users
   - Test post CRUD
   - Test form submission
   - Test mobile responsiveness

2. **Customize**
  - Update brand name ("ASP Global Solutions")
   - Change colors in design-system.css
   - Add your logo
   - Update footer links

3. **Extend Features**
   - Add post comments (table exists)
   - Add user profiles
   - Add search functionality
   - Add real-time updates (WebSocket)

4. **Deploy**
   - Choose hosting (Heroku, AWS, DigitalOcean, etc.)
   - Follow hosting provider's Node.js guide
   - Set up HTTPS/SSL
   - Configure domain
   - Set up backups & monitoring

---

## Support Resources

- **Express.js Docs**: https://expressjs.com
- **SQLite Docs**: https://www.sqlite.org/docs.html
- **MDN Web Docs**: https://developer.mozilla.org
- **JWT Info**: https://jwt.io

---

## License
MIT - Free to use and modify

**Happy coding! 🚀**
