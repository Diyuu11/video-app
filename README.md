# Video App

A React-based application to manage and display educational videos. Users can add, edit, search, and delete videos. The app fetches video data from a local JSON server and displays video thumbnails generated from YouTube URLs.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Live server](#live-server)
- [Contributors](#contributors)
- [License](#License)

## Project Description
Video App is designed to allow users to:
- Add new videos with title, description, and YouTube URL.
- Edit existing videos.
- Search videos by title.
- Display a list of videos with their thumbnails.
- Delete a video.
- Watch a video.

The app interacts with a local JSON server to store and retrieve video data.

## Features
- **Add Video**: Users can add new educational videos by providing a title, description, and YouTube URL.
- **Edit Video**: Users can edit existing videos.
- **Delete Video**: Users can delete videos from the app.
- **Search Functionality**: Users can search for videos by title.
- **Thumbnail Generation**: Thumbnails are automatically generated for each video from the provided YouTube URL.

## Technologies Used
- **React**: Frontend JavaScript library for building the user interface.
- **React Router**: For navigating between pages.
- **React Toastify**: For displaying success and error notifications.
- **Bootstrap**: For styling and responsive design.
- **FontAwesome**: For social media icons in the footer.
- **JSON Server**: For simulating a backend API to store video data.

## File Structure
/video-app
│
├── /public
│   └── index.html                     # Main HTML file
│
├── /server
│   └── db.json                        # Mock database for video data
│
├── /src
│   ├── /components
│   │   ├── AddVideoForm.js            # Form to add or edit videos
│   │   ├── Footer.js                  # Footer component with links
│   │   ├── Header.js                  # Header with the app's title and logo
│   │   ├── Layout.js                  # Layout component for wrapping pages
│   │   ├── NavBar.js                  # Navigation bar with search functionality
│   │   ├── VideoCard.js               # Video card to display video details
│   │   └── VideoList.js               # List of all videos with action buttons
│   │
│   ├── /pages
│   │   ├── About.js                   # About page
│   │   ├── Home.js                    # Home page with video management
            privacy policy
│   │
│   ├── /styles
│   │   └── App.css                    # Main CSS file for styling components
│
├── /assets
│   └── Image.webp                     # Placeholder or logo image
│
├── package.json                       # Project dependencies and metadata
└── README.md                          # Project documentation

## Installation
### 1. Clone the repository


git clone https://github.com/yourusername/video-app.git
cd video-app

### 2. Install dependencies

Run the following command to install all required dependencies:

bash
Copy code
npm install

### 3. Start the development server
You need to start the JSON server and React development server:

To start the JSON Server (mock backend):
bash
Copy code
npm run server

To start the React development server:
bash
Copy code
npm start

The React app will be available at http://localhost:3000, and the mock API at http://localhost:5000 (or whichever port your JSON Server is running on).

## Usage
Home Page: Displays a list of all videos with options to search, edit, or delete a video.
Add/Edit Video: A form to add a new video or edit an existing one, with fields for video title, URL, and description.
Search: Use the search bar in the navbar to filter videos by title.
Footer: Contains links or general app information.
Navbar: user can navigate both home page and about page.

## API
Endpoint: GET /videos
Returns a list of all videos.

Endpoint: POST /videos
Add a new video by providing the following data:

title (string)
description (string)
url (string - YouTube video URL)
Endpoint: PUT /videos/:id
Edit an existing video by updating its title, description, and url.

Endpoint: DELETE /videos/:id
Delete a video by ID.

## contributors
- Luqman Bashir
- Hamdi Aden
- Faith Njau

## License
[MIT LICENSE](https://github.com/luqman-bashir/video-app/blob/master/LICENSE.MD)
