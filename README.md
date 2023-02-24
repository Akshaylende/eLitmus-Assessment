### eLitmus Chrome Extension
## Introduction
The eLitmus Chrome Extension is a tool designed to prevent cheating during online exams. It is used by eLitmus, a recruitment and assessment company that conducts tests across the globe.

## Features
The eLitmus Chrome Extension has the following features:

A frontend Chrome extension that allows users to input their details through a form.
Upon clicking the "Start Test" button, the user's information is sent to the backend server.
The extension performs audio and video requirement checks and displays the candidate's live webcam feed on the page.
It also sends images of the user from the browser to the server at configurable intervals.
An admin dashboard is provided to display all user information and stored images.

## Installation
To install the eLitmus Chrome Extension, follow these steps:

Clone the repository to your local machine.
Open Chrome and go to chrome://extensions/.
Turn on "Developer mode" on the top right corner.
Click on "Load unpacked" and select the folder where the repository is cloned.
The eLitmus Chrome Extension will be installed and ready to use.

## Usage
To use the eLitmus Chrome Extension, follow these steps:

Open the assessment website for the eLitmus test.
The extension will automatically activate and open a form for you to input your details.
Input your name, email, and test invitation code into the form.
Click on the "Start Test" button to begin the exam.
The extension will perform a camera and audio check and display your live webcam feed.
The extension will also capture images of you at configurable intervals and send them to the backend server.
After completing the exam, the admin dashboard will display your information and stored images.

## Technologies Used
The eLitmus Chrome Extension is built with the following technologies:

HTML
CSS
JavaScript
Node.js
Express.js
MySQL
Multer
Socket.io

# Your directory structure could look something like this:
eLitmus-Proctoring-Extension
│   README.md
│   package.json   
│   server.js    
│   config.js    
│   .env        
│
└───public
│   │   index.html
│   │
│   └───css
│   │   │   style.css
│   │
│   └───js
│       │   popup.js
│
└───server
│   │   db.js
│   │   routes.js
│   │   imageProcessor.js
│   │
│   └───uploads
│       │   [image files]
│   
└───node_modules
Where eLitmus-Proctoring-Extension is the root directory, public contains the client-side code, server contains the server-side code and node_modules contains the installed dependencies.

server.js is the main entry point for the backend and config.js contains the configuration details for the database and image processing. .env contains the environment variables for the application.

db.js contains the database connection details and helper functions for querying the database. routes.js contains the API routes for the application. imageProcessor.js contains the code for capturing and processing images. The uploads folder is where the captured images will be stored.

In public, index.html is the main HTML file, style.css contains the styles and popup.js contains the client-side code for the extension.

package.json contains the metadata for the project and the list of dependencies needed to run the application


## Contributing
If you wish to contribute to the eLitmus Chrome Extension, feel free to fork the repository and submit a pull request.
