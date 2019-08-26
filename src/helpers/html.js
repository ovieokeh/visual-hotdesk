module.exports = `
<style>
  .floor {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-height: 600px;
    border: 8px solid black;
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 10% auto;
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
  </body>
  <script src="../index.js"></script>
</html>
`;
