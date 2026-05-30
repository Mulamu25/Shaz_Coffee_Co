# SHAZ COFFEE CO. ☕

## Project Description

SHAZ COFFEE CO. is a conceptual coffee shop website developed as part of the WEDE5020 Web Development module. The website showcases the brand's identity, menu offerings, and provides customers with essential information such as contact details, location, and an enquiry form.

The brand is inspired by modern café culture, focusing on comfort, community, and premium beverages.

---

## How to View the Website

1. Clone or download this repository to your local machine
2. Open the `index.html` file in any web browser (Chrome, Edge)
3. Navigate through the pages using the menu links

**No internet connection required** after download - all assets are local.

---

## Pages Included

| Page | File Name | Description |
|------|-----------|-------------|
| Home | `index.html` | Hero image, welcome message, customer favourites |
| Menu | `Pages/menu.html` | Coffee, cold drinks, and snacks with prices |
| About Us | `Pages/about_us.html` | Story, mission, vision, and target audience |
| Enquiry | `Pages/enquiry.html` | Contact form with validation |
| Contact | `Pages/contact_us.html` | Address, hours, phone, email, and Google Map |

---

## Technologies Used

- **HTML5** - Pure HTML (no CSS used as per assignment requirements)
- **Tables** - For layout structure
- **Forms** - For enquiry page with validation
- **Google Maps Embed** - For location display

---

## Folder Structure
SHAZ_COFFEE_/
│
├── Assets/
│   └── images/
│       ├── cold-brew.jpg
│       ├── croissant.jpg
│       ├── desktop.ini
│       ├── espresso.jpg
│       ├── frappuccino.jpg
│       ├── hero-image.jpg
│       ├── iced-coffee.jpg
│       ├── iced-latte.jpg
│       ├── latte.jpg
│       ├── lemon-cake.jpg
│       ├── lemonade.jpg
│       ├── logo.png
│       ├── mocha.jpg
│       ├── muffin.jpg
│       ├── red-velvet.jpg
│       └── shop-interior.jpg
│
├── Assets/js
├── Assets/media
├── Assets/Components
│
├── Miscellaneous/
│   └── README.md
│
├── Pages/
│   ├── about_us.html
│   ├── contact_us.html
│   ├── enquiry.html
│   └── menu.html
│
├── .gitattributes
│
└── index.html

---

## Features

- 5 fully linked HTML pages
- Consistent navigation menu on all pages
- Enquiry form with required field validation
- Embedded Google Maps iframe on contact page
-  Customer favourites section on homepage
-  Menu page with organised categories (Coffee, Cold Drinks, Snacks)
- Back to Top links on all inner pages

---

## Assignment Details

| Detail | Information |
|--------|-------------|
| **Course** | WEDE5020 - Web Development |
| **Student Name** | Mulamuleli Mungadi |
| **Student Number** | ST10498756 |
| **Module** | DISD1 MID YEAR INTAKE |
| **Lecturer** | Lefa Malatji |
| **Submission Date** | 20 April 2026 |

---

## References

- Chaffey, D. (2022) *Digital Business and E-Commerce Management*. 7th ed. Pearson Education Limited.
- Krug, S. (2014) *Don't Make Me Think: A Common-Sense Approach to Web Usability*. 3rd ed. New Riders.
- Nielsen, J. (2012) *Usability 101: Introduction to Usability*. Available at: https://www.nngroup.com/articles/usability-101-introduction-to-usability/
- W3Schools (2026) *HTML Tutorial*. Available at: https://www.w3schools.com/html/
- MDN Web Docs (2026) *HTML: Hypertext Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML

---

## Author

**Mulamuleli Mungadi**  
Student Number: ST10498756  
Email: mmulamuleli@icloud.com

---

© 2026 SHAZ COFFEE CO. All rights reserved.
###2026-05-16-Logo Animation
- Added 360- degree rotation animation to logo on hover 
- Used CSS transfor, and transition properties
- Enhances user interactiom amd visual appeal
###2026-05-17-Typography Enhancement
- Changed font from monospace to Poppins (Google Fonts)
- Improved readability with better font-weight and line-height
- Added consistent font across all 5 pages

#  SHAZ COFFEE CO. - Complete Website Project

**Student Name:** Mulamuleli Mungadi  
**Student Number:** ST10498756  
**Course:** DISD1 MID YEAR INTAKE  
**Module:** Web Development  

---

## Part 1: Project Proposal & HTML Structure

[KEEP ALL YOUR EXISTING PART 1 CONTENT HERE]
- Organization Overview
- Website Goals and Objectives
- Proposed Features
- Wireframes
- Sitemap
- Budget
- Technical Requirements
- Timeline
- Part 1 Changelog

---

## Part 2: CSS Styling and Responsive Design

### Color Palette

Based on the SHAZ COFFEE CO. proposal, the following color scheme was implemented:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Coffee Brown | `#3E2723` | Header, Footer, Navigation background |
| Burnt Orange | `#E67E22` | Buttons, Links, Active page indicator |
| Warm Cream | `#FFF8E7` | Main page background |
| Soft Grey | `#757575` | Secondary text |
| White | `#FFFFFF` | Text on dark backgrounds |

### Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling, animations, and responsive design
- **Google Fonts** - Poppins font family
- **CSS Grid** - Footer layout
- **CSS Flexbox** - Navigation layout
- **Media Queries** - Responsive design

### Features Implemented

| Feature | Implementation |
|---------|----------------|
| CSS Reset | `* { margin:0; padding:0; box-sizing: border-box; }` |
| CSS Variables | Color palette stored in `:root` |
| External Stylesheet | Single `style.css` linked to all 5 pages |
| Flexbox Navigation | Horizontal, stacks on mobile |
| CSS Grid Footer | 3 columns desktop → 2 tablet → 1 mobile |
| Pseudo-classes | `:hover`, `:active`, `:focus` |
| Active Page Indicator | Orange text + underline |
| Logo Animation | 360° rotation on hover |
| Sticky Header | `position: sticky; top: 0;` |

### Responsive Design Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| Desktop (>1024px) | 3-column footer, horizontal navigation |
| Tablet (768px - 1024px) | 2-column footer, horizontal navigation |
| Mobile (<768px) | 1-column footer, logo on top, wrapped navigation |

### Part 2 Changelog

| Date | Version | Description |
|------|---------|-------------|
| 2026-05-16 | v2.0 | Created external CSS with variables and reset |
| 2026-05-17 | v2.1 | Added Flexbox navigation and Grid footer |
| 2026-05-24 | v2.2 | Added responsive media queries for tablet/mobile |
| 2026-05-27 | v2.3 | Added logo animation and active page styling |
| 2026-05-28 | v2.4 | Fixed mobile navigation (horizontal wrap) |
| 2026-05-29 | v2.5 | Final polish, form styling, hover effects |

### References

- Google Fonts. (2026). *Poppins Font Family*.
- MDN Web Docs. (2026). *CSS Grid Layout*.
- MDN Web Docs. (2026). *CSS Flexbox*.
- MDN Web Docs. (2026). *Media Queries*.

### Rubric Compliance Checklist

| Requirement | Status |
|-------------|--------|
| External CSS Stylesheet 
| CSS Reset 
| CSS Variables 
| Typography Styling 
| Flexbox Layout 
| Grid Layout 
| Pseudo-classes 
| Media Queries 
| Responsive Layout 
| Responsive Navigation 
| Responsive Images 
| Active Page Indicator 

---

## Conclusion

SHAZ COFFEE CO. website successfully demonstrates all Part 1 and Part 2 requirements, including professional branding, responsive design, and modern CSS techniques.

---

**© 2026 SHAZ COFFEE CO. All rights reserved.**