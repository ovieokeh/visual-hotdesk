# visual-hotdesk

The Visual Hotdesk API generates floorplan images of hotdesk zones. To use the API, follow the steps below:

### How to use the API
- Send a POST request with the following in the request body
  - floorId (id of the floor to generate a plan for, i.e HD)
  - takenSeats (an array of seats on that floor that have been occupied)

The API returns a URL of the floorplan image.