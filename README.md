# Livestream App

## Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

## Frontend Setup
cd frontend
npm install
npm start

## Notes
- Use FFmpeg to convert RTSP to HLS (.m3u8) for browser playback
- MongoDB must be running locally