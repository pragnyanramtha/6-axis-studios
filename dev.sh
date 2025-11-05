#!/bin/bash

# Start both API server and Vite dev server
echo "🚀 Starting development servers..."
echo ""

# Start API server in background
node server.js &
API_PID=$!

# Wait a moment for API to start
sleep 2

# Start Vite dev server
npm run dev:frontend

# Cleanup on exit
trap "kill $API_PID" EXIT
