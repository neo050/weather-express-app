# Weather Express App

A simple Node.js and Express application that fetches weather data from the OpenWeatherMap API and displays it in a web page.

## Prerequisites

- Node.js (>=14.x)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/weather-express-app.git
   ```
2. **Navigate into the project directory**
   ```bash
   cd weather-express-app
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```

## Configuration

The app requires an OpenWeatherMap API key to function. Supply it via an environment variable.

- **Locally**: create a file named `.env` in the project root with the content:

  ```env
  API_KEY=your_openweathermap_api_key
  ```

  Then install the `dotenv` package and add `require('dotenv').config();` at the top of `index.js` (if not already).

- **On Render**: go to your Web Service settings → Environment → Add Variable:

  - **Key**: `API_KEY`
  - **Value**: `your_openweathermap_api_key`

## Available Scripts

- **Start the server**

  ```bash
  npm start
  ```

  Runs `node index.js`.

- **Start in development mode** (with auto-restart using nodemon)

  ```bash
  npm run dev
  ```

  Runs `nodemon index.js` (requires `nodemon` installed either locally or globally).

## Usage

You can also find the live application at: [https://weather-express-app-5dp9.onrender.com](https://weather-express-app-5dp9.onrender.com)



1. Open your browser and visit:
   ```
   http://localhost:3008
   ```
2. Enter a country and city in the form and click **Find the weather**.
3. The page will display the current weather description, temperature (°C), feels-like temperature, and min/max values.

## Project Structure

```
weather-express-app/
├── public/              # Static assets (CSS, images)
│   └── styles/main.css
├── views/               # EJS templates
│   └── index.ejs
├── .env                 # Environment variables (API_KEY)
├── index.js             # Main application file
├── package.json         # Project metadata and scripts
└── README.md            # This file
```

## License

This project is licensed under the MIT License.

