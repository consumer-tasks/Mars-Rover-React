import React, { useState } from 'react';
import ContainedButtons from "./Button";
import produce from 'immer';
const width = 10;
const height = 10;

function App() {
  function getRover() {
    return {
      position: {
        x: 0,
          y: 0
      },
      direction: "N",
        blocked: false
    };
  }

  const [rover, setRover] = useState(getRover());

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < width; i++){
      let row = [];
      for (let j = 0; j < height; j++){
        if ((rover.position.x === height - i - 1) && (rover.position.y === j)){
          row.push(1);
        }else{
          row.push(0);
        }
      }
      rows.push(row);
    }
    return rows;
  });


  return (
    <>
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${height}, 20px)`,
      margin: 40
    }}>
      { grid.map((rows, i) =>
        rows.map((col, k) => (
          <div key={`${i}-${k}`}
               style={{
        width: 20,
        height: 20,
        backgroundColor: grid[i][k] ? 'pink' : undefined,
        border: 'solid 1px black'
      }}/>
          ))
      )}
    </div>
      <ContainedButtons />
      </>
  );
}

export default App;
