# Ontario Cyber Resilience Authority - Training Platform

A comprehensive cybersecurity and AI training platform built with React, designed for Ontario organizations to earn their Certified CyberSecure Ontario Practitioner (CCOP) certification.

## 🚀 Live Demo

Visit the live training platform: [https://harmartim-oss.github.io/Training/](https://harmartim-oss.github.io/Training/)

## 📋 Features

- **Interactive Training Modules**:
  - Privacy and Data Management in Ontario (FIPPA, MFIPPA, PIPEDA)
  - Cybersecurity Fundamentals for Organizations
  - AI Usage Guidelines and Ethical Considerations

- **Progressive Learning**: Unlockable modules based on completion
- **Quiz System**: Comprehensive assessments with detailed feedback
- **Progress Tracking**: Local storage-based progress persistence
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: WCAG compliant with keyboard navigation support
- **PWA Support**: Offline capability and app-like experience

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0 with React Router
- **UI Components**: Custom UI library with Tailwind-inspired styling
- **Icons**: Lucide React
- **Markdown**: React Markdown with GitHub Flavored Markdown support
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages with automated CI/CD

## 📁 Project Structure

```
src/
├── assets/           # Image assets (SVG, PNG, JPG)
├── components/       # Reusable UI components
│   └── ui/          # Basic UI components (Button, Card, etc.)
├── App.js           # Main application component
├── App.css          # Custom styles
├── index.js         # Application entry point
└── index.css        # Global styles

public/
├── index.html       # HTML template
├── 404.html         # GitHub Pages SPA routing support
├── manifest.json    # PWA manifest
└── *.png            # App icons and favicon

.github/
└── workflows/
    └── deploy.yml   # GitHub Actions deployment workflow
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harmartim-oss/Training.git
   cd Training
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000/Training](http://localhost:3000/Training) in your browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory, optimized for production deployment.

## 🚢 Deployment

### Automatic Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Trigger**: Pushes to the `main` branch automatically trigger deployment
2. **Build**: The workflow installs dependencies and builds the project
3. **Deploy**: Built files are deployed to GitHub Pages

### Manual Deployment

To deploy manually using gh-pages:

```bash
npm run deploy
```

## 🎯 Key Components

### Training Modules

Each module includes:
- Multiple lessons with markdown content
- Progress tracking
- Interactive quizzes
- Completion certificates

### UI Components

- `Card`: Content containers with consistent styling
- `Button`: Interactive elements with multiple variants
- `Progress`: Visual progress indicators
- `Badge`: Status and achievement indicators
- `Tabs`: Organized content sections
- `Alert`: Important information display

### Asset Management

All image assets are:
- Stored in `src/assets/` directory
- Imported as ES6 modules
- Optimized during build process
- Served with proper cache headers

## 🔧 Configuration

### GitHub Pages Setup

The project is configured for GitHub Pages deployment:
- `homepage` field in `package.json` points to the GitHub Pages URL
- HashRouter is used for client-side routing compatibility
- 404.html provides SPA routing support

### Environment Variables

No environment variables are required for basic functionality. All configuration is handled through the package.json and build process.

## 📱 Progressive Web App (PWA)

The application includes PWA features:
- Service worker for offline caching
- Web app manifest for installability
- Responsive design for all screen sizes
- Optimized performance metrics

## 🧪 Testing

Run the test suite:
```bash
npm test
```

For CI environments:
```bash
npm test -- --watchAll=false --passWithNoTests
```

## 📊 Performance

Build output (gzipped):
- JavaScript: ~116 KB
- CSS: ~949 B
- Total assets: ~6.7 MB (including images)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the Ontario Cyber Resilience Authority team

---

**Ontario Cyber Resilience Authority** - Building a more secure digital Ontario