# 💕 Valentine's Day Special - For My Best Friend

A beautiful, interactive Valentine's Day website to propose to your best friend. Full of memories, games, love quotes, and special moments!

## ✨ Features

### 🎨 Interactive Sections
- **Hero Section** - Beautiful welcome with floating hearts
- **Memory Timeline** - Journey through special moments with photos
- **Photo Gallery** - Collection of beautiful memories with lightbox
- **Inside Jokes** - Flip cards with your special jokes
- **Love Quotes** - Auto-rotating inspirational quotes
- **Love Calculator** - Fun game to calculate love percentage
- **Countdown Timer** - Days until next Valentine's Day
- **Heart Catch Game** - Interactive game before the big question
- **Celebration Page** - Beautiful confetti celebration when they say yes!

### 🎵 Music Player
- Background romantic music
- Easy play/pause toggle
- Smooth volume control

### 🎮 Mini Games
- Love Calculator with animations
- Heart catching game
- Interactive flip cards

### 📱 Responsive Design
- Works perfectly on mobile, tablet, and desktop
- Smooth animations throughout
- Beautiful gradient themes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Start the development server
```bash
npm run dev
# or
bun dev
```

4. Open your browser and visit `http://localhost:8080`

## 🎨 Customization

### Add Your Own Photos
Replace the Unsplash URLs in `src/components/MemoryTimeline.tsx` and `src/components/PhotoGallery.tsx` with your own photo URLs.

### Customize Text
Edit the following files to personalize:
- `src/components/HeroSection.tsx` - Welcome message
- `src/components/MemoryTimeline.tsx` - Memory descriptions
- `src/components/InsideJokes.tsx` - Your inside jokes
- `src/components/LoveQuotes.tsx` - Add your favorite quotes

### Add Music
The app uses a default romantic tune. To add your own:
1. Add an MP3 file to the `public` folder
2. Update the music URL in `src/components/MusicToggle.tsx`

## 🛠️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Canvas Confetti** - Celebration effects

## 📦 Project Structure

```
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── HeroSection.tsx
│   │   ├── MemoryTimeline.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── InsideJokes.tsx
│   │   ├── LoveQuotes.tsx
│   │   ├── LoveCalculator.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── HeartGame.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   ├── lib/             # Utilities
│   └── main.tsx         # Entry point
├── index.html
└── package.json
```

## 🎯 How to Use

1. **Customize the content** with your own memories and photos
2. **Test everything** to make sure it works perfectly
3. **Deploy** to a hosting service (Vercel, Netlify, etc.)
4. **Share the link** with your special person
5. **Wait for the magic** to happen! ✨

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 💡 Tips

- Test on mobile devices before sharing
- Make sure all photos load properly
- Customize the countdown date to your special date
- Add your own music for a personal touch
- Practice the flow to ensure smooth experience

## 📝 License

This project is open source and available for personal use.

## 💖 Made with Love

Created with React, TypeScript, and lots of love! Perfect for proposing to your best friend on Valentine's Day or any special occasion.

**Remember:** The best proposals come from the heart. Use this as a starting point and make it uniquely yours! 💕
