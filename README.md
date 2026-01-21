# Portfolio Website

A modern, minimalistic portfolio website built with React and Vite, featuring smooth scroll animations and elegant design.

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.jsx`)
- Replace `"Your Name"` with your actual name
- Update the description to reflect your skills and expertise

### 2. About Section

**About Component** (`src/components/About.jsx`)
- Edit the paragraphs to tell your story
- Keep it concise and engaging

### 3. Experience Section

**Experience Component** (`src/components/Experience.jsx`)

To add your internship experiences:

1. **Update the experiences array** with your actual information:
```javascript
{
  role: 'Your Job Title',
  company: 'Company Name',
  duration: 'Start Date - End Date',
  description: 'Brief description of your responsibilities and achievements',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  logo: '/company-logo.png' // or null for placeholder
}
```

2. **Adding Company Logos:**
   - Place your company logo images in the `public` folder (e.g., `public/company1-logo.png`)
   - Update the `logo` field with the path: `logo: '/company1-logo.png'`
   - Supported formats: PNG, SVG, JPG
   - Recommended size: Square images (e.g., 200x200px)
   - If no logo is provided (`logo: null`), a nice gradient placeholder with the company initial will be shown

### 4. Education Section

**Education Component** (`src/components/Education.jsx`)

To add your educational qualifications:

1. **Update the education array** with your details:
```javascript
{
  degree: 'B.Tech in Computer Science',
  institution: 'Your University Name',
  duration: '2022 - 2026',
  description: 'Brief description of your studies and achievements',
  achievements: ['CGPA: 8.5/10', 'Dean\'s List', 'Technical Club Lead'],
  logo: '/university-logo.png' // or null for placeholder
}
```

2. **Adding Institution Logos:** Same process as Experience logos - place them in `public` folder

### 5. Projects Section

**Projects Component** (`src/components/Projects.jsx`)
- Update the `projects` array with your actual projects
- Add project titles, descriptions, tags, and links
- Each project has a unique gradient color that you can customize

### 6. Skills Section

**Skills Component** (`src/components/Skills.jsx`)
- Modify the `skillCategories` array with your technologies
- Add or remove skill categories as needed
- Update the emoji icons for each category

### 7. Contact Section

**Contact Component** (`src/components/Contact.jsx`)
- The form is functional and captures user input
- To connect it to a backend, update the `handleSubmit` function
- Consider integrating with services like FormSpree, EmailJS, or your own backend

### 7. Styling & Colors

**Global Styles** (`src/index.css`)
- Customize color variables in `:root` to match your brand
- Adjust spacing, typography, and other design tokens
- The design uses a minimalistic light theme with purple/blue gradients

## 🎨 Design Features

- **Scroll Reveal Animations**: Elements fade in as you scroll
- **Gradient Accents**: Modern gradient touches throughout
- **Smooth Interactions**: Hover effects and transitions
- **Responsive Design**: Mobile-friendly layout
- **Timeline Visualization**: Professional experience timeline

## 📱 Responsive

The portfolio is fully responsive and works great on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## 🛠️ Tech Stack

- React 19
- Vite 7
- CSS3 with CSS Variables
- Google Fonts (Inter)

## 📄 License

Free to use for your personal portfolio.
