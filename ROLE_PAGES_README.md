# Role Category Pages

## Overview
This project uses a reusable template component for creating role category pages. Each category page (Executive Assistant, Software Development, etc.) uses the same layout and styling but with customized content.

## Structure

### Template Component
- **Location**: `src/components/RoleTemplate/`
- **Files**: 
  - `RoleTemplate.tsx` - Reusable template component
  - `RoleTemplate.css` - Shared styling
  - `index.ts` - Export file

### Category Pages
Each category page is a simple wrapper that provides custom content to the template.

#### Executive Assistant (OurRoles)
- **Location**: `src/screens/OurRoles/`
- **Content**: EA-specific hero section and profile categories

#### Software Development
- **Location**: `src/screens/SoftwareDevelopment/`
- **Content**: Developer-specific hero section and technical categories

## How to Create a New Category Page

1. **Create a new folder** in `src/screens/` (e.g., `Marketing/`)

2. **Create the component file** (e.g., `Marketing.tsx`):

```tsx
import React from 'react';
import { RoleTemplate } from '../../components/RoleTemplate';

const Marketing: React.FC = () => {
  const heroTitle = "Your hero title here";
  const heroDescription = "Your hero description here";
  const profilesSectionTitle = "Best-in-class [Role] Profiles";
  const profilesSectionDescription = "Description of the profiles";
  
  const categories = [
    {
      title: "Category 1",
      description: "Description of category 1"
    },
    {
      title: "Category 2",
      description: "Description of category 2"
    },
    // Add more categories...
    {
      title: "And More...",
      description: "Description for additional specializations"
    }
  ];

  const profileData = {
    name: "Profile Name",
    subtitle: "Profile Subtitle"
  };

  return (
    <RoleTemplate
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      profilesSectionTitle={profilesSectionTitle}
      profilesSectionDescription={profilesSectionDescription}
      categories={categories}
      profileData={profileData}
    />
  );
};

export default Marketing;
```

3. **Create index.ts** in the same folder:
```tsx
export { default as Marketing } from './Marketing';
```

4. **Export from screens/index.ts**:
```tsx
export { default as Marketing } from './Marketing';
```

## Template Props

| Prop | Type | Description |
|------|------|-------------|
| `heroTitle` | string | Main heading for the hero section |
| `heroDescription` | string | Description text in the hero section |
| `profilesSectionTitle` | string | Title for the profiles section |
| `profilesSectionDescription` | string | Description for the profiles section |
| `categories` | CategoryItem[] | Array of category objects |
| `profileData` | ProfileData | Profile card data |

### CategoryItem Interface
```tsx
{
  title: string;        // Category title
  description: string;  // Category description
}
```

### ProfileData Interface
```tsx
{
  name: string;         // Profile name
  subtitle: string;     // Profile subtitle (e.g., university, experience)
}
```

## Sections Included

The template includes these sections (all are identical across pages):
1. ✅ Hero Section - **Customizable content**
2. ✅ Best-in-class Profiles Section - **Customizable content**
3. ✅ Testimonial Section (same for all)
4. ✅ How We Do It Carousel (same for all)
5. ✅ Why Oceans Benefits Grid (same for all)
6. ✅ Common Questions FAQ (same for all)
7. ✅ Final CTA Section (same for all)

## Styling

All styling is centralized in `RoleTemplate.css`. No need to create separate CSS files for each category page unless you need page-specific overrides.

## Benefits of This Structure

- ✅ **DRY Principle**: Code reusability - write once, use everywhere
- ✅ **Maintainability**: Update template once, affects all pages
- ✅ **Consistency**: All pages look and behave the same
- ✅ **Easy to Scale**: Add new categories in minutes
- ✅ **Type Safety**: TypeScript interfaces ensure correct prop usage
- ✅ **Clean Code**: Separation of concerns - content vs. presentation
