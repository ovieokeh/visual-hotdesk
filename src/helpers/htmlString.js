module.exports = `
<style>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.floor {
  max-height: 600px;
  border: 8px solid black;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
  margin: 5% auto 5% auto;
  background-color: #eff0f1;
}

.row {
  display: grid;
  align-items: flex-start;
}

.section {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0.5rem 0.2rem;
  border-right: 10px solid black;
  position: relative;
}

.section:last-of-type {
  border-right: none;
}

.table {
  display: grid;
  grid-auto-flow: dense;
  justify-content: center;
  align-items: center;
  margin: 0 2%;
}

.table.horizontal .seat {
  grid-row: 1;
  grid-column: inherit;
}

.table.horizontal .seat.right {
  grid-row: 2;
  grid-column: inherit;
}

.seat {
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background-color: rgb(77, 153, 77);
  border: 2px solid black;
}

.seat.right {
  grid-column: 2;
}

.seat.taken {
  background-color: rgb(156, 3, 3);
}

.legend {
  margin: 2% 10%;
}

.legend h2 {
  text-transform: uppercase;
  color: #555;
}

.legend .info {
  display: flex;
  align-items: center;
  width: 180px;
}

.legend .indic {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10%;
}

.legend .available {
  background-color: rgb(77, 153, 77);
}

.legend .occupied {
  background-color: rgb(156, 3, 3);
}

.legend p {
  display: inline-block;
}
</style>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
    <style type="text/css"></style>
  </head>
  <body>
    <div class="floor"></div>
    <div class="legend">
    <h2>Legend</h2>
    <div class="info">
      <span class="indic available"></span>
      <p>Available seats</p>
    </div>
    <div class="info">
      <span class="indic occupied"></span>
      <p>Occupied seats</p>
    </div>
  </div>
  </body>
  <script src="../index.js"></script>
</html>
`;
