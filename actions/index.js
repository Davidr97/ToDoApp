
let counter = 0;

const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

const addToDo = text => ({
    type: "ADD_TODO",
    id: counter++,
    text
});

const setVisibilityFilter = filter => ({
   type: "SET_VISIBILITY_FILTER",
   filter
});

const toggleToDo = id => ({
   type: "TOGGLE_TODO",
   id
});

export {VisibilityFilters, addToDo, setVisibilityFilter, toggleToDo};




