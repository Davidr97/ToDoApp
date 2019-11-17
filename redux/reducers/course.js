import actionConstants from '../actions/constants';

const course = (state = [], action) => {
    switch(action.type){
        case actionConstants.ADD_COURSE:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    semester: action.semester
                }
            ];
        default:
            return state
    }
};

export default course;
