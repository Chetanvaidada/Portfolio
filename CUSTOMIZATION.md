# How to Add Your Company Logos

## Quick Guide

### Step 1: Prepare Your Logo Images
- Save your company logos as image files (PNG, SVG, or JPG)
- Recommended: Square images (200x200px or similar)
- Name them clearly, e.g., `company1-logo.png`, `company2-logo.png`

### Step 2: Add Logos to Your Project
Place the logo files in the `public` folder:
```
portfolio/
  public/
    company1-logo.png
    company2-logo.png
```

### Step 3: Update Experience Component
Open `src/components/Experience.jsx` and update the logo paths:

**Before:**
```javascript
{
  role: 'Software Development Intern',
  company: 'Company Name 1',
  ...
  logo: null
}
```

**After:**
```javascript
{
  role: 'Software Development Intern',
  company: 'Tech Company',
  ...
  logo: '/company1-logo.png'  // ← Add this path
}
```

### Example with Both Internships:
```javascript
const experiences = [
  {
    id: 1,
    role: 'Backend Developer Intern',
    company: 'Google',
    duration: 'June 2025 - August 2025',
    description: 'Your description here...',
    skills: ['Python', 'Go', 'Kubernetes'],
    logo: '/google-logo.png'  // ← Your logo here
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'Microsoft',
    duration: 'January 2025 - April 2025',
    description: 'Your description here...',
    skills: ['React', 'TypeScript', 'Azure'],
    logo: '/microsoft-logo.png'  // ← Your logo here
  }
];
```

## Alternative: Using External URLs

You can also use logos from the internet:
```javascript
logo: 'https://example.com/company-logo.png'
```

## No Logo? No Problem!

If you don't have a logo, leave it as `null`:
```javascript
logo: null
```

The component will show a nice gradient placeholder with the company's first letter.

## Tips for Best Results

1. **Square Images**: Use square or near-square logos for best appearance
2. **Transparent Backgrounds**: PNG files with transparent backgrounds work best
3. **Consistent Size**: Try to keep all logos roughly the same dimensions
4. **File Size**: Optimize images to keep them under 100KB for faster loading

That's it! Your company logos will now appear next to your experience entries. 🎉
