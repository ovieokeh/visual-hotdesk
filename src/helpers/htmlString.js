module.exports = `
<style>
  * {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  html, body {
    width: 1440px;
  }

  .floor {
    max-height: 600px;
    width: 1440px;
    border: 8px solid black;
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 5% auto 10% auto;
  }

  .row {
    display: grid;
    align-items: flex-start;
    background-color: #eff0f1;
  }

  .section {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 1rem 0;
    border-right: 10px solid black;
    position: relative;
  }

  .section:last-of-type {
    border-right: none;
  }

  .table-row {
    display: flex;
    margin: 0 1rem;
  }

  .seats-col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20px;
  }

  .table {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: inherit;
    margin: 0 -0.5rem;
    background-color: #cbbeb1;
    background-image: url('./assets/wood-pattern.png');
    border: 2px solid #a0958a;
    border-radius: 5px;
    position: relative;
    z-index: 10;
  }

  .one-sided {
    width: 35%;
  }

  .seat,
  .seat-right {
    width: 20px;
    height: 20px;
    background-image: url('./assets/chair.jpg');
    background-size: cover;
    cursor: pointer;
    transform: rotate(-90deg);
    z-index: 9;
    position: relative;
  }

  .seat-right {
    transform: rotate(90deg);
  }

  .seat-id {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: green;
    border: 1px solid white;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    position: absolute;
    top: -35px;
    left: -8px;
    font-size: 0.5rem;
  }

  .seat-id.taken {
    cursor: not-allowed;
    background-color: red;
  }

  .legend {
    margin: 10%;
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
    background-color: green;
  }

  .legend .occupied {
    background-color: red;
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
