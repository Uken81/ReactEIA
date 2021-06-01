let inputList = [];
function MakeArr() {   
    const inputArray = Array.from(document.getElementsByClassName('input-field'));
    console.log(inputArray);
    inputArray.forEach(function (entry) {
        inputList.push(entry.id);
    });
    console.log(inputList);
    //Any point in using return here for this app??? I dont use it for CreateValuesArray and it works as intended.
    return inputList;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/-/g, '');
  }

  const changeStateArray = []
  const CreateLabelArray = () => {
    inputList.forEach(function(entry) {
        changeStateArray.push(camelize(entry));       
  })
  console.log(changeStateArray);
}

function titleize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toUpperCase() : word.toUpperCase();
    }).replace(/-/g, ' ');
  }

const valuesArray = [];
  const CreateValueslArray = () => {
  inputList.forEach(function(entry) {
  valuesArray.push(titleize(entry));
  })
  console.log(valuesArray);
}

export {MakeArr, CreateLabelArray, changeStateArray, CreateValueslArray, valuesArray, inputList};