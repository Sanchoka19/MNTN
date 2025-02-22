# MNTN
Project Setup

This project uses GSAP for animations, the Live SASS Compiler extension in VSCode, and Vite as the development server.

Prerequisites

Ensure you have the following installed:

Node.js (latest LTS recommended)

VSCode

Live SASS Compiler extension (install from VSCode marketplace)

Installation

1. Clone the Repository

git clone https://github.com/Sanchoka19/MNTN
cd ./MNTN


2. Install Dependencies

On Linux

npm install
npm install gsap
npm install vite --save-dev

On Windows

To use npm in VSCode on Windows, follow these steps:

Open VSCode and launch the terminal (Ctrl + ~)

Ensure Node.js is installed and added to the system's PATH:

node -v
npm -v

If these commands do not return a version number, install Node.js from Node.js official website

Run the following commands:

npm install
npm install gsap
npm install vite --save-dev

3. Configure package.json

Add the following script in package.json:

"scripts": {
  "dev": "vite"
}

4. Run the Development Server

npm run dev

Additional Notes

Ensure the Live SASS Compiler is enabled in VSCode for real-time SCSS compilation.

If you encounter permission issues on Linux, try running:

sudo npm install -g vite

The project should now be accessible at http://localhost:5173/ (default Vite port)
