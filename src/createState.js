//I wish to use this here but cant figure out how to pass to base.js. Leaving here as reminder.
import {newArr, inputList} from './arrayCreator';


  const NextState = newArr.reduce((state, key, index) => {
    const inputId = inputList[index];
    console.log(inputId);
    const input = document.getElementById(inputId);
    console.log(input);
    if (!input) {
      // avoid error by try getting value from undefined input
      return state;
    }
    const value = input.value;
    
    return { ...state, [key]: value };
    
  }, {});

export {NextState};