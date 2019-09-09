module.exports = `
<style>
:root {
  --available-color: #0b6623;
  --occupied-color: #b80f0a;
  --none-hotdesks: #0047ab;
  --grey: #858585;
  --andela-blue: #3359df;
}

* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

/* * {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  --available-color: #00cd00;
  --occupied-color: #ff0000;
  --none-hotdesks: #0000ff;
  --grey: #858585;
  --andela-blue: #3359df;
} */

html, body {
  width: 980px;
}

body {
  padding-right: 25px;
}

.floor {
  min-width: 980px;
  max-height: 600px;
  border: 8px solid black;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
  background-color: #eff0f1;
}

.row {
  display: grid;
  align-items: flex-start;
  min-height: 220px;
}

.section {
  display: flex;
  justify-content: space-evenly;
  padding: 0.2rem;
  border-right: 8px solid black;
}

.section:last-of-type {
  border-right: none;
}

.table {
  display: grid;
  grid-auto-flow: dense;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  min-width: 80px;
  max-width: 150px;
  margin: 0 1.5%;
}

.table.horizontal .seat {
  grid-row: 1;
  grid-column: inherit;
}

.table.horizontal .seat.right {
  grid-row: 2;
  grid-column: inherit;
}

.title {
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: var(--grey);
  font-weight: bold;
  height: 100%;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 8px 8px 0 0;
}

.seat {
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  background-color: var(--available-color);
  border: 1px solid #fff;
}

.seat.right {
  grid-column: 2;
}

.seat.taken {
  background-color: var(--occupied-color);
  position: relative;
}

.pointer {
  position: absolute;
  top: -130%;
  border-radius: 50%;
  border: 8px solid var(--andela-blue);
  width: 30px;
  height: 30px;
  z-index: 3;
  background-color: white;
  background-size: contain;
}

.pointer::after {
  content: "";
  position: absolute;
  bottom: -43px;
  left: -3px;
  border: 18px solid transparent;
  border-top: 25px solid var(--andela-blue);
}

.highlight {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 2px solid white;
  box-shadow: 0 0 0 1000em rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.none-hotdesks {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: var(--andela-blue);
  min-height: 100px;
  min-width: 70px;
  padding: 0 0.5rem;
  border-radius: 8px;
}

.legend {
  margin: 2% 10%;
}

.legend .content {
  display: flex;
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
  background-color: var(--available-color);
}

.legend .occupied {
  background-color: var(--occupied-color);
}

.legend .nh {
  background-color: var(--andela-blue);
}

.blank {
  background-color: transparent;
  color: transparent;
}

.wide {
  width: 130px;
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
      <div class="content">
        <div class="info">
          <span class="indic available"></span>
          <p>Available seats</p>
        </div>
        <div class="info">
          <span class="indic occupied"></span>
          <p>Occupied seats</p>
        </div>
        <div class="info">
          <span class="indic nh"></span>
          <p>Landmarks</p>
        </div>
      </div>
    </div>
  </body>
  <script src="../index.js"></script>
</html>
`;
