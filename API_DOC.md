Livestream App – API Documentation

This API manages video overlays for the livestream app.  

## Endpoints

### 1. Get All Overlays
**GET** `/overlays`

**Response Example**
[
  { "id": 1, "text": "Live", "x": 50, "y": 100 },
  { "id": 2, "text": "Breaking News", "x": 200, "y": 150 }
]

# Add Overlay
POST /overlays
Request Body
{
  "text": "Hello World",
  "x": 100,
  "y": 200
}
Response Example
{
  "id": 3,
  "text": "Hello World",
  "x": 100,
  "y": 200,
  "message": "Overlay added successfully"
}

# Update Overlay

PUT /overlays/<id>

Request Body
{
  "text": "Updated Text",
  "x": 150,
  "y": 220
}

Response Example
{
  "id": 1,
  "text": "Updated Text",
  "x": 150,
  "y": 220,
  "message": "Overlay updated successfully"
}

# Delete Overlay

DELETE /overlays/<id>

Response Example
{
  "message": "Overlay deleted successfully"
}
