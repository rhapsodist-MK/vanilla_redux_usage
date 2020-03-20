// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));



const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const result = document.querySelector('#result')

let count = 0


const updateText = () => {
  result.innerText = count
}


updateText()

const handleAdd = () => {
  count += 1
  updateText()
}

const handleMinus = () => {
  count -= 1
  updateText()
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)