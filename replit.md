# Tennis 919 Website Project

## Project Overview
Tennis 919 is Durham's inclusive tennis organization website featuring winter-themed apparel showcase, Calendly-integrated booking, professional tennis analytics playbook system, and fundraising product integration.

## Tech Stack
- **Frontend**: React + TypeScript, Wouter (routing), TanStack Query, Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Styling**: Shadcn UI components, retro-modern design with teal/navy winter palette
- **Deployment**: Prepared for Squarespace export with static HTML strategy

## Recent Changes (Session Nov 25, 2025)

### Emoji Replacement - Design System Compliance
✅ **Shop.tsx**: Replaced icon emoji rendering with Lucide icons
- Lines 305-346: Converted manufacturer icons from emoji strings to proper Icon components
- Added dynamic icon rendering with styled badge backgrounds

✅ **Playbook.tsx**: Replaced all emoji with Lucide icons
- Stats Grid (Lines 40-59): Replaced 📊🎾🏆⭐ with BarChart2, Target, Trophy, Star
- Skill Matrix (Lines 71-99): Replaced 🚀💪🔄⚡👟 with Rocket, Dumbbell, Repeat, Zap, Footprints
- All icons now use bg-primary/10 circular backgrounds with proper sizing

### Link Corrections
✅ **ServicesGrid.tsx**: Fixed Duos Coaching Calendly link
- Changed from `calendly.com/tennis919/duos-lesson` to `calendly.com/tennis919/duos` (line 27)
- Ensures consistency with Lessons.tsx routing

### Verified Links & Functionality
✅ **Calendly Integration**: All routes properly configured
- General: calendly.com/tennis919
- Private lessons: calendly.com/tennis919/privates
- Duos: calendly.com/tennis919/duos
- Beginner clinic: calendly.com/tennis919/beginner-clinic
- Intermediate: calendly.com/tennis919/intermediate

✅ **External Links**: 
- Email: coach.tennis919@gmail.com (mailto)
- Phone: 919-667-6994 (tel)
- Manufacturing partners: Amazon Merch, Printful, Bonfire, CustomInk, Teespring

✅ **No Emoji**: Comprehensive audit confirmed zero emoji in codebase - all replaced with Lucide icons

## Page Structure Standardization
All pages follow consistent pattern:
- Wrapper: `flex flex-col min-h-screen bg-background`
- Sections: `py-12 md:py-20`
- Containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Pages Implemented
1. **Home** - Hero, Services, Winter Collection, Newsletter, Testimonials, Mission
2. **Lessons** - Lesson cards (Privates, Duos, Beginner, Intermediate) with Calendly CTAs
3. **Shop** - Winter apparel showcase, fundraising products, manufacturing partners
4. **About** - Founder story, community showcase, core values
5. **Playbook** - Performance dashboard, skill progression, feature cards

## Component Inventory
- **Reusable**: Navigation, Footer, Hero, ServicesGrid, ProductCard, WinterCollection
- **Dashboard**: Mission, Testimonials, Newsletter
- **Shadcn UI**: Full suite (50+ components) from ui/ folder

## Design Guidelines
- **Color Palette**: Teal (#0d9488) / Navy (#1e3a8a) with cream/white accents
- **Typography**: Custom heading font + readable sans-serif
- **Icons**: Lucide React only (no emoji)
- **Spacing**: Consistent 12-20px section padding
- **Hover States**: hover-elevate + active-elevate-2 utilities

## Deployment Readiness
✅ Responsive mobile design verified across all pages
✅ All navigation links tested and functional
✅ Calendly booking integration confirmed
✅ Static HTML export ready for Squarespace
✅ No console errors or styling issues

## Next Steps
- User can publish via Replit deploy button
- Site will be live on replit.app domain
- Can be connected to custom domain
- Squarespace export available via SQUARESPACE_DEPLOYMENT.md

## Contact Info
- **Email**: coach.tennis919@gmail.com
- **Phone**: 919-667-6994
- **Location**: Rock Quarry Park, Durham, NC
- **Calendly**: calendly.com/tennis919

## Key Features
- ✅ Inclusive LGBTQ+ owned branding
- ✅ Winter-themed apparel showcase with product images
- ✅ Full Calendly booking integration
- ✅ Professional analytics playbook system
- ✅ Fundraising product ecosystem
- ✅ Manufacturing partner integrations (5 platforms)
- ✅ Mobile responsive design
- ✅ Retro-modern aesthetic with teal/navy palette
