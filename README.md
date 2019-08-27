# visual-hotdesk

The Visual Hotdesk API generates floorplan images of hotdesk zones. To use the API, follow the steps below:

### How to use the API
- Send a POST request with the following in the request body
  - floorId (id of the floor to generate a plan for, i.e HD)
  - takenSeats (an array of seats on that floor that have been occupied)
  
The API returns a URL of the floorplan image.

For example, POSTing this as a request body:

```
{
  "floorId": "HD",
  "takenSeats": ["HD/105", "HD/121", "HD/123"]
}
```

returns the following: `https://hcti.io/v1/image/adef9eef-ea58-42b1-a251-162884d37fae`
  
