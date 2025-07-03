# React Native Weather App

A simple weather forecast application built with Expo and TypeScript. It demonstrates clean architecture using repositories, DTOs, and custom hooks. The app fetches data from the OpenWeatherMap API and requests user location to show local weather.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env` and insert your OpenWeather API key.
3. Run the project:
   ```bash
   npm start
   ```

## Project Structure

- `src/components` – Reusable UI components.
- `src/screens` – Application screens.
- `src/services` – Repository to handle API calls.
- `src/dtos` – Data transfer objects for typed API responses.
- `src/hooks` – Custom hooks for location and weather fetching.
- `src/utils` – Helper utilities.

## Notes

This project is a starting point. Additional features such as better error handling, offline caching, and unit tests can be implemented for a production-ready application.
