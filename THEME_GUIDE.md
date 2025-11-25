# Theme System Documentation

## 📁 Location
Theme file: `/src/styles/theme.css`

## 🎨 How to Use

All colors are now controlled from a single file using CSS variables. Simply import the theme in your component CSS and use the variables.

### Available Theme Variables

#### Primary Colors (Current: Green Theme)
```css
var(--primary)              /* #10b981 - Main green */
var(--primary-dark)         /* #059669 - Darker green */
var(--primary-light)        /* #34d399 - Lighter green */
var(--primary-pale)         /* #d1fae5 - Very light green */
```

#### Text Colors
```css
var(--text-primary)         /* #1a2332 - Main headings */
var(--text-secondary)       /* #475569 - Body text */
var(--text-tertiary)        /* #64748b - Light text */
```

#### Gradients
```css
var(--gradient-bg-light)    /* Background gradient */
var(--gradient-card)        /* Card gradient */
var(--gradient-primary)     /* Button gradient */
var(--gradient-top-accent)  /* Top accent stripe */
```

#### Shadows
```css
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--shadow-xl)
var(--shadow-2xl)
```

#### Overlays
```css
var(--overlay-primary-light)   /* rgba(16, 185, 129, 0.04) */
var(--overlay-primary-medium)  /* rgba(16, 185, 129, 0.08) */
var(--overlay-primary-dark)    /* rgba(16, 185, 129, 0.12) */
```

#### Border Radius
```css
var(--radius-sm)    /* 8px */
var(--radius-md)    /* 12px */
var(--radius-lg)    /* 16px */
var(--radius-xl)    /* 20px */
```

#### Transitions
```css
var(--transition-fast)  /* 0.2s ease */
var(--transition-base)  /* 0.3s ease */
var(--transition-slow)  /* 0.5s ease */
```

## 🔄 How to Switch Themes

### Option 1: Edit the theme.css file
Simply change the color values in `/src/styles/theme.css`:

```css
:root {
  /* Change these values */
  --primary: #10b981;  /* Change to your color */
  --primary-dark: #059669;
  /* ... etc */
}
```

### Option 2: Use the pre-made Blue Theme
Uncomment the blue theme section in `theme.css` (lines 80-100)

### Option 3: Create a New Theme
Add a new color scheme by creating additional CSS variable sets.

## 📝 Example Usage in Components

```css
/* Before (hardcoded) */
.my-button {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #1a2332;
  border-radius: 12px;
}

/* After (using theme) */
.my-button {
  background: var(--gradient-primary);
  color: var(--text-primary);
  border-radius: var(--radius-md);
}
```

## ✅ Files Already Updated
- ✅ `/src/screens/HowWeHire/Process/HireProcess.css`
- ✅ `/src/screens/Pricing/TalentCategory/TalentCategory.css` (partial)
- 🔄 More files need manual conversion

## 🚀 Benefits
1. **Single Source of Truth** - All colors in one place
2. **Easy Theme Switching** - Change entire site theme instantly  
3. **Consistency** - Same colors across all components
4. **Maintainability** - Update once, applies everywhere
5. **Future-proof** - Easy to add dark mode or multiple themes

## 🎯 Next Steps
To complete the theme system migration, update remaining CSS files to use variables instead of hardcoded colors. Replace color hex codes with appropriate variables from theme.css.
