# ASP Global Solutions - Production Ready Full-Stack Application

## Overview
A modern, professional full-stack web application built with Express.js backend and vanilla JavaScript frontend. Includes CRUD operations, form handling, and responsive design.

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 4.18
- **Database**: SQLite3
- **Validation**: Custom validators

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern design system with variables
- **JavaScript**: Vanilla (no frameworks)
- **Architecture**: MVC-inspired with services and utilities

## Project Structure

```
root/
├── backend/
│   ├── controllers/          # Request handlers
│   │   ├── postController.js
│   │   └── formController.js
│   ├── services/            # Business logic
│   │   ├── postService.js
│   │   └── formService.js
│   ├── routes/              # API endpoints
│   │   ├── posts.js
│   │   └── forms.js
│   ├── middleware/          # Error handling
│   ├── config/              # Configuration
│   │   └── database.js
│   ├── utils/               # Utilities
│   │   ├── errors.js
│   │   └── validators.js
│   ├── models/              # Database models
│   └── server.js            # Entry point

├── css/                     # Stylesheets
│   ├── styles.css           # Main stylesheet
│   ├── design-system.css    # Design tokens & reset
│   ├── components.css       # Reusable components
│   └── layout.css           # Layout & sections

├── js/                      # Frontend JavaScript
│   ├── app.js              # Main application logic
│   ├── api.js              # Centralized API service
│   ├── ui-manager.js       # UI utilities & helpers
│   └── pages/              # Page-specific scripts
│       ├── common.js
│       ├── contact-page.js
│       ├── posts-page.js
│       └── services-page.js

├── assets/                  # Static assets
│   └── logo.jpeg

├── index.html              # Main HTML file
├── about.html              # About page
├── contact.html            # Contact page
├── posts.html              # Posts page
├── services.html           # Services page
├── package.json            # Dependencies & scripts
├── package-lock.json       # Lock file
├── server.js               # Root server file
├── bs-config.json          # BrowserSync config
├── run.bat                 # Windows run script
├── .env                    # Environment variables
└── .gitignore             # Git ignore rules
```

## Features

### ✅ Post Management
- Create, read, update, delete posts
- User-specific post filtering
- Pagination support
- Rich content with images
- Author information display

### ✅ Form Handling
- Contact form with validation
- Submission storage in database
- Status tracking (read/unread)
- Email validation

### ✅ Security
- Input validation & sanitization
- CORS protection

### ✅ User Experience
- Modern, responsive design
- Loading states & spinners
- Error handling with user-friendly messages
- Form validation with field-level feedback
- Modal dialogs for post creation
- Smooth scrolling & transitions

### ✅ Frontend
- Mobile-first responsive design
- Design system with CSS variables
- Reusable components
- Accessibility attributes
- Progressive enhancement

## Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. **Navigate to project:**
```bash
cd "c:\Users\PC\Downloads\ASP website"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the application:**
```bash
npm start
```

This will start:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

## API Documentation

### Post Endpoints

**POST /api/posts**
- Create post
- Body: `{ title, content?, imageUrl? }`

**GET /api/posts**
- Get all posts
- Query: `?limit=20&offset=0`

**GET /api/posts/:id**
- Get single post

**PUT /api/posts/:id**
- Update post

**DELETE /api/posts/:id**
- Delete post

### Form Endpoints

**POST /api/forms/contact**
- Submit contact form
- Body: `{ name, email, subject?, message }`

## Environment Variables

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3000
```

## Best Practices Implemented

✅ Clean architecture with separation of concerns
✅ Input validation on frontend & backend
✅ CORS configuration for security
✅ Comprehensive error handling
✅ User-friendly error messages
✅ Loading indicators & spinners
✅ Form validation with feedback
✅ Responsive mobile-first design
✅ Accessibility attributes
✅ Performance optimization

## Production Checklist

1. Set `NODE_ENV=production`
2. Update `CLIENT_URL` and `CORS_ORIGIN`
3. Enable HTTPS
4. Set up database backups
5. Configure rate limiting
6. Enable compression middleware
7. Set up monitoring & logging

## Development Commands

```bash
npm start          # Start development server
npm run server     # Run backend only
npm run client     # Run frontend only
npm test           # Run tests
npm run lint       # Run linter
```

## Database Schema

**Posts**: id, title, content, image_url, status, created_at, updated_at
**Submissions**: id, name, email, subject, message, status, created_at

## Architecture

### Backend Layer
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Routes**: Define API endpoints
- **Middleware**: Error handling
- **Database**: SQLite with async/promise-based queries

### Frontend Layer
- **API Service**: Centralized API communication
- **UI Manager**: Utilities for UI interactions
- **Application**: Main logic & event handling
- **CSS System**: Design tokens & reusable components

## Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Database Issues
```bash
# Reset database
rm data.db
npm start
```

### CORS Errors
Check `CORS_ORIGIN` in `.env` matches your frontend URL

## License
MIT

## Support
For issues, please check the documentation or create an issue.
