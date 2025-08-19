# Livestream App

A web application that allows you to stream live video using **HLS/RTSP URLs** and add **custom text overlays** at any position on the video.

---
#  Features
- Play live video streams (HLS/RTSP).
- Add custom text overlays at specific (X, Y) positions.
- Manage overlays (create, update, delete).
- Dark theme UI with styled inputs and buttons.

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/<your-username>/livestream-app.git
cd livestream-app


## Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate # Mac/Linux

pip install -r requirements.txt
python app.py


## Frontend Setup
cd frontend
npm install
npm start


## Notes
- Use FFmpeg to convert RTSP to HLS (.m3u8) for browser playback
- MongoDB must be running locally

# How to Use
Open http://localhost:3000 in your browser.
Enter a stream URL (example):
NASA Stream:
https://nasatv-lh.akamaihd.net/i/NASA_101@319270/master.m3u8
Test Stream:
https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8

Enter Overlay Text (example: Breaking News).
Enter X and Y coordinates:
Example: X = 50, Y = 100 → text appears near top-left.
Click Add Overlay → text shows on top of the video.