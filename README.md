# BIST 100 Signal Dashboard

A real-time BIST 100 trading signal dashboard that combines RSI, Bollinger Bands, MACD, swing signals, EMA cross, Stoch RSI, volume spikes, and VWAP into a single technical analysis view.

## Features

- Composite signal score from 8 technical indicators
- Buy and sell price levels based on Bollinger Band support and resistance
- Live trade flow panel in the right sidebar
- TradingView Lightweight Charts with candlestick, RSI, Stoch RSI, and MACD views
- Dark and compact Ant Design v5 interface
- TypeScript-based React frontend with Vite

## Setup

### Backend

```bash
cd backend
pip install -r ../requirements.txt
python app.py
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend development server usually opens at `http://localhost:5173`.

### Type Check

```bash
cd frontend
npm run typecheck
```

### Production Build

```bash
cd frontend
npm run build
```

The production build runs TypeScript validation first, then creates the Vite build. The generated frontend can be served by the Flask backend.

Application URL: `http://localhost:5000`

## Tech Stack

- Backend: Python, Flask
- Frontend: TypeScript, React, Vite, Ant Design
- Charts: TradingView Lightweight Charts
- Analysis: RSI, MACD, Bollinger Bands, EMA Cross, Stoch RSI, VWAP, volume signals
