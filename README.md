# Y2Z Travel - Interactive Itinerary Planner

Y2Z Travel is a modern web application that helps users plan and organize their travel itineraries with an interactive drag-and-drop interface and integrated map view.

## Features

- 🗺️ Interactive map view alongside itinerary planning
- 📝 Drag-and-drop activity organization
- ⭐ Activity cards with ratings and reviews
- 🖼️ Visual activity previews with images
- ✏️ Edit and delete functionality for activities
- 📱 Responsive design for all devices

## Tech Stack

- React 19
- Vite
- TailwindCSS
- @dnd-kit (for drag-and-drop functionality)
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd Y2Z-Travel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Y2Z-Travel/
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # React components
│   ├── data/          # Mock data and constants
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Public assets
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Activity Management
- View activities in a card format with images
- Drag and drop to reorder activities
- Edit activity details
- Delete activities from the itinerary

### Map Integration
- Side-by-side view of itinerary and map
- Google Maps integration
- Responsive layout that adapts to screen size

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Maps integration powered by Google Maps
- Drag and drop functionality by [@dnd-kit](https://dndkit.com/)
