// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux'

const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const result = document.querySelector('#result')

const Add = 'Add'
const Minus = 'Minus'

// reducer : reducer modifies stored data
// reducer가 return 하는 값이 데이터에 저장됨
const reducer = (state = 0, action) => {
  switch (action.type) {
    case Add:
      return state + 1
    case Minus:
      return state - 1
    default:
      return state
  }

}

const store = createStore(reducer)

// subscribe : 변화된 state를 감자하게 해준다
const handleChange = () => {
  result.innerText = store.getState()
}

store.subscribe(handleChange)


store.dispatch({type: 'init'})
add.addEventListener('click', () => store.dispatch({type: Add}))
minus.addEventListener('click', () => store.dispatch({type: Minus}))