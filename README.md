# Netflix Clone

A modern Netflix clone built with React, Firebase, and Tailwind CSS. This project demonstrates a fully functional streaming platform with user authentication, movie browsing, and personal watchlists.

![Demo](https://user-images.githubusercontent.com/14861253/193696115-a341f5bc-da9b-4574-8668-f51272a8c06a.gif)

## 🌟 Features

- **User Authentication**: Secure signup and login functionality using Firebase
- **Dynamic Content**: Real-time movie and TV show data from TMDB API
- **Trailer Integration**: Watch trailers directly in the app (when available)
- **Personal Watchlist**: Add and remove movies from your list
- **Responsive Design**: Fully responsive layout for all devices
- **Modern UI**: Netflix-like interface with hover effects and smooth animations
- **Movie Trailers**: Watch official trailers when available through the TMDB API
- **Video Player** {#video-player}: Netflix-style intro animation with automatic redirection <br>(<i>Note: Due to licensing restrictions, clicking play on any movie initiates a 4-second Netflix-style intro animation before redirecting to the browse page, as we cannot stream actual movie content<i>)

## 🔄 Recent Updates

- **Enhanced Video Player**:
  - Improved controls visibility with hover effects
  - Smooth navigation with back button integration
  - Optimized video playback experience
  - For more details about the video player functionality, see [Video Player](#video-player)

- **UI Improvements**:
  - Redesigned navigation buttons with custom styling
  - Consistent color scheme across components
  - Enhanced user feedback during video playback
  - Improved responsive behavior

## 🚀 Live Demo

Visit the live application: [Netflix Clone](https://anotherflix-fef2b.web.app/)

## 🛠️ Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Backend/Auth**: Firebase
- **API**: The Movie Database (TMDB)
- **Routing**: React Router
- **Icons**: React Icons
- **HTTP Client**: Axios

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd netflix-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```env
   # TMDB API
   REACT_APP_IMDB_API_KEY=your_tmdb_api_key

   # Firebase
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER=your_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📱 Responsive Design

The application is fully responsive across all devices:

![Responsive Design](https://user-images.githubusercontent.com/14861253/193696191-4a2c5b73-4856-4928-a2ce-5dda72d26d3b.gif)

## 🎯 Key Features Showcase

### 🎬 Trailer Integration
Watch trailers directly in the application:<br>
![Trailer Demo](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm5xbnNjdXFxOWoybWp2aWFxeXN1bzkyMDdnZW1va2J0dThyMG10YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QgGdoOZSYiv6W49IoO/giphy.gif)

### 🎬 Movie Management
Add and remove movies from your personal list:<br>
![Adding-Removing](https://user-images.githubusercontent.com/14861253/193696864-e22c41ce-2286-4a2e-9516-38b7b32d0e5a.gif)

## 📝 Project Structure

```
netflix-clone/
├── src/
│   ├── components/     # Reusable components
│   ├── context/       # Auth context and providers
│   ├── pages/         # Page components
│   ├── firebase.js    # Firebase configuration
│   └── Request.js     # API endpoints
├── public/
└── package.json
```

## 🔒 Security

- Secure user authentication through Firebase
- Protected routes for authenticated users
- Environment variables for sensitive data
- Firestore security rules implementation

## 🌐 API Integration

This project uses The Movie Database (TMDB) API. You can find the documentation here:
[TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

## 📄 License

This project is intended for educational purposes only. All content and images belong to their respective owners.

## 🤝 Contributing

While this is primarily a portfolio project, suggestions and feedback are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

For any questions or feedback, please reach out through:
- GitHub Issues
- aitorsantaeugenia@gmail.com

---

**Note**: This is a portfolio project created for educational purposes. It is not affiliated with Netflix.
