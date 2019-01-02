// clear all data from console when start 
console.clear()

// ACTION CREATORS
// people dropping off a from 
const createPolicy = (name, amount) => {
  return { // ACTION  - a form in our analogy 
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { // ACTION  - a form in our analogy 
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

const deletePolicy = (name) => {
  return { // ACTION  - a form in our analogy 
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};