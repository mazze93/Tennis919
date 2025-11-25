# Tennis 919 Squarespace Deployment Guide

## Overview
This Tennis 919 website is built with React and can be deployed to Squarespace by exporting the built static files. This guide walks you through the process.

## Architecture: Static + Dynamic Hybrid

Tennis 919 uses a **hybrid architecture** for Squarespace compatibility:

### Static Pages (Squarespace-Hosted)
These pages export cleanly as static HTML to Squarespace:
- **Home** - Hero, services overview, winter collection showcase
- **Lessons** - Lesson offerings, pricing, Calendly booking CTAs
- **Shop** - Product showcase, fundraising items, manufacturing partner links
- **About** - Team story, community info, values

### Dynamic Features (Replit-Hosted)
These features require server-side functionality and stay on Replit:
- **Playbook** - User profiles, performance tracking, progress analytics (requires authentication)
- **User Authentication** - Login via Google, GitHub, Apple, or email

### Why This Matters
Squarespace is a static site builder and cannot:
- Run backend authentication services
- Manage user sessions or databases
- Store/retrieve user-specific data

Tennis 919 keeps these features on Replit while static marketing pages export to Squarespace.

---

## Prerequisites
- Squarespace account with website editor access
- The built files from this project (`dist/public/` folder)
- Replit app running at `tennis919.replit.dev` for Playbook/auth access

## Deployment Steps

### Option 1: Export Individual Pages (Recommended)

1. **Build the Project**
   ```
   npm run build
   ```
   This creates optimized files in `dist/public/`

2. **Extract Assets**
   - Navigate to `dist/public/assets/`
   - These are your CSS, JavaScript, and image files
   - Keep these organized in Squarespace (recommended in a `/assets` folder)

3. **Squarespace Setup**
   - Log into your Squarespace site editor
   - Create pages matching your site structure:
     - Home (/)
     - Lessons (/lessons)
     - Shop (/shop)
     - About (/about)
     - Playbook (/playbook) - Points to Replit app

4. **Import Content**
   - Copy the HTML structure from `dist/public/index.html`
   - For each page, extract the relevant section and paste into the corresponding Squarespace page
   - Update all image paths to match where you uploaded assets

### Option 2: Use Custom Code Blocks

1. Go to each Squarespace page
2. Add a **Custom Code** block
3. Copy the content section of each page's HTML
4. Link to external assets (CSS, images) stored in Squarespace File Manager

---

## Routing & Linking Strategy

### Navigation Links
Use Squarespace's native navigation:
- Home → /
- Lessons → /lessons
- Shop → /shop
- About → /about
- Playbook → /playbook (links to Replit app or iframe)

### External Links (No Changes Needed)
These work as-is and don't require backend:
- **Book Lessons**: https://calendly.com/tennis919
- **Manufacturing Partners**:
  - Amazon Merch: https://merch.amazon.com
  - Printful: https://www.printful.com
  - Bonfire: https://www.bonfire.com
  - CustomInk: https://www.customink.com
  - Teespring/Spring: https://www.spring.com

### Contact Links
- **Phone**: 919-667-6994
- **Email**: coach.tennis919@gmail.com

---

## Asset Management

### Images
All images are in `dist/public/assets/`:
- `logo.jpg` - Tennis 919 logo
- Product images (beanie, windbreaker, polo, sweatpants, tote, headband)
- Community photos (matt, group)

Upload these to Squarespace's File Manager and reference them in your pages.

### CSS & Styling
The entire CSS is bundled in:
- `dist/public/assets/index-*.css`

Include this in your Squarespace page header or use Squarespace's CSS Editor.

### JavaScript
All interactive functionality is in:
- `dist/public/assets/index-*.js`

Include this in your page footer or use Squarespace's custom code blocks.

---

## User Authentication & Profiles (Playbook)

### Why Playbook Stays on Replit
The Playbook feature requires:
- User login (Google, GitHub, Apple, email/password)
- Session management
- Database storage of user progress data
- Real-time skill tracking and analytics

**Squarespace cannot provide these backend features.** Therefore, Playbook is hosted on Replit.

### Integration Options

#### Option A: Separate Replit Subdomain (Recommended)
Point `playbook.tennis919.com` to your Replit app:
1. In your DNS registrar, add a CNAME record:
   - `playbook` → `tennis919.replit.dev` (or your custom Replit domain)
2. Users click "Playbook" in Squarespace nav → redirects to playbook.tennis919.com
3. Full authentication and data storage on Replit

**Pros**: Clean separation, full control, no security issues
**Cons**: Requires subdomain setup

#### Option B: Squarespace Iframe Embed
Embed the Replit Playbook in Squarespace via iframe:
```html
<iframe src="https://tennis919.replit.dev/playbook" width="100%" height="600px"></iframe>
```

**Pros**: Stays within tennis919.com
**Cons**: Limited iframe features, potential cross-origin issues

#### Option C: Playbook Landing Page on Squarespace
Create a static landing page on Squarespace that:
- Shows Playbook features overview
- Has a "Log In to Track Progress" button
- Links to Replit Playbook: https://tennis919.replit.dev/playbook

**Pros**: Simplest, no backend needed on Squarespace
**Cons**: Two separate domains for user experience

### Recommended: Option A + Static Landing Page
1. Create a Playbook landing page on Squarespace showing features
2. "Start Tracking Now" button links to `playbook.tennis919.com` (Replit auth)
3. Users log in and access full Playbook functionality
4. Branding remains unified under tennis919.com

---

## Squarespace-Specific Considerations

### Navigation Menu
1. In Squarespace, set up your main navigation with these pages:
   - Home
   - Lessons
   - Shop
   - About
   - Playbook
   - Book Now (links to calendly.com/tennis919)

2. Style the navigation to match the design:
   - Gold accent color (#F6C20C) for active states
   - Teal primary (#0d9488) for buttons
   - Include logo in top-left
   - Use Shrikhand font for headings, Bitter for body text

### Mobile Optimization
The site is fully responsive. Squarespace handles mobile viewing automatically, but ensure:
- Navigation menu collapses on mobile (Squarespace does this by default)
- Images scale properly (Squarespace handles this)
- Touch interactions work on buttons
- Product cards stack properly on mobile

### SEO
Each page includes:
- Unique title tags
- Meta descriptions
- Open Graph tags for social sharing

Squarespace will use these automatically when you set page titles and descriptions.

### Custom Domain (tennis919.com)
1. Update your DNS settings in your domain registrar
2. For main site: Point `@` and `www` to Squarespace nameservers
3. For Playbook: Point `playbook` subdomain to Replit
4. SSL certificates are auto-configured by both platforms

---

## Static Content Checklist

Before exporting to Squarespace, verify all these static elements:

- [ ] All external links (Calendly, manufacturers) are correct
- [ ] Contact info (email, phone) is accurate
- [ ] Product images are high-quality and optimized
- [ ] Pricing information is current
- [ ] Team photos are uploaded
- [ ] Logo files are in place
- [ ] Meta tags are set for each page
- [ ] No React state or authentication code in exported HTML

---

## Troubleshooting

### Links Don't Work After Export
- Check all image/asset paths use absolute URLs or Squarespace file URLs
- Update internal navigation to use Squarespace page paths
- Test all external links (Calendly, manufacturers)

### Styling Looks Different
- Ensure CSS file is uploaded and linked correctly
- Check color values match the new brand palette (gold/teal)
- Test in multiple browsers for consistency

### Responsive Design Issues
- Verify viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Test on actual mobile devices, not just browser DevTools
- Squarespace may override some CSS—use !important if needed

---

## Alternative: Keep Everything on Replit

If you prefer not to use Squarespace, you can:
1. Keep the entire site on Replit
2. Point tennis919.com to Replit directly
3. Implement Replit Auth natively in the same app
4. Skip any Squarespace export process

This gives you full control and simpler deployment but requires Replit's paid deployment options.

---

## Support Resources
- Squarespace Help: https://support.squarespace.com/
- Replit Docs: https://docs.replit.com/
- Calendly Integration: https://calendly.com/
