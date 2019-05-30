
// define initial state and shallow-merge initial data
const initialState = {
};

// define reducers
const reducers = {
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers

// merge all reducers with globalReducer


// create store
const store = initialState;

export default store;
