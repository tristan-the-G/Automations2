# Language Context Usage Guide

## Overview
A minimal bilingual language system with localStorage persistence for English/German support.

## Implementation Details

### 1. Context File (`contexts/LanguageContext.tsx`)
- **State Management**: Manages current language ('en' | 'de')
- **localStorage Persistence**: Automatically saves and retrieves user preference
- **SSR/SSG Compatible**: Works with Next.js static export

### 2. Root Layout Integration
The `LanguageProvider` wraps all application content in `app/layout.tsx`:

```tsx
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
```

### 3. Usage in Components

Import and use the hook in any client component:

```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/app/content';

export function MyComponent() {
  const { language, setLanguage } = useLanguage();
  const t = getTexts(language);

  return (
    <div>
      <h1>{t.hero.mainTitle}</h1>
      <button onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}>
        Toggle Language
      </button>
    </div>
  );
}
```

## How localStorage Works

1. **Initial Load**: Context checks localStorage for saved preference
2. **Language Switch**: Updates both state and localStorage simultaneously
3. **Persistence**: User preference persists across browser sessions
4. **SSR Safety**: Uses `typeof window !== 'undefined'` check for server compatibility

## Example: Navigation Component

See `components/sections/Navigation.tsx` for a working implementation that:
- Displays current language in button (EN/DE)
- Toggles between languages on click
- Persists preference automatically
