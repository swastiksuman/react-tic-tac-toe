import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

const GridBox = (props) => (
  <div className="box" onClick={() => props.onClick(props.value)}>{props.status}</div>
);

function App() {
  const gridLength = 3;
  const grids = [];
  const [xSelected, setXSelected] = useState([]);
  const [ySelected, setYSelected] = useState([]);
  const [gridValue, setGridValues] = useState(['', '', '', '', '', '', '', '', '']); 
  const [currentUser, setCurrentUser] = useState('x');
  const winningGroups = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '5', '9'], ['3', '5', '7'], ['1', '4', '7'], ['3', '6', '9']];
  const setGridValue = (i) => {
    console.log(gridValue);
    if(!(xSelected.includes(i) || ySelected.includes(i))){
      var tempGridValue = gridValue;
    if(currentUser == 'x'){
      xSelected.push(i);
      setXSelected(xSelected);
      setCurrentUser('y');
      tempGridValue[i-1] = 'X';
    }else{
      ySelected.push(i);
      setYSelected(ySelected);
      setCurrentUser('x');
      tempGridValue[i-1] = 'Y';
    }
    setGridValues(tempGridValue);
    console.log(xSelected);
    console.log(ySelected);
    winningGroups.map((x) => {
      var c = 0;
      x.forEach(element => {
        if(xSelected.includes(element)){
          c=c+1;
        }
      });
      if(c == 3){
        console.log('wins');
      }
    });
  }
  };

  const getGridStatus = (i) => {
    console.log(i);

    if(xSelected.includes(i)){
      return 'x';
    }

    return '';
  };
  return (
    <div className="App">
      <div className="game-board">
        <GridBox value='1' status={gridValue[0]} onClick={setGridValue}/>
        <GridBox value='2' status={gridValue[1]} onClick={setGridValue}/>
        <GridBox value='3' status={gridValue[2]} onClick={setGridValue}/>
        <GridBox value='4' status={gridValue[3]} onClick={setGridValue}/>
        <GridBox value='5' status={gridValue[4]} onClick={setGridValue}/>
        <GridBox value='6' status={gridValue[5]} onClick={setGridValue}/>
        <GridBox value='7' status={gridValue[6]} onClick={setGridValue}/>
        <GridBox value='8' status={gridValue[7]} onClick={setGridValue}/>
        <GridBox value='9' status={gridValue[8]}onClick={setGridValue}/>
      </div>
    </div>
  );
}

export default App;
