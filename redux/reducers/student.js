import actionConstants from '../actions/constants';
import createReducer from './createReducer';

const addStudentReducer = (state = [], action) => {
    return [
        ...state,
        {
            id: action.id,
            firstName: action.firstName,
            secondName: action.secondName,
            age: action.age,
            passed: action.passed
        }
    ]
};

const passStudentReducer = (state = [], action) => {
    return state.map(student => student.id === action.id ? ({
        ...student,
        passed: true
    }) : student);
};

export const student = createReducer([], {
    [actionConstants.ADD_STUDENT] : addStudentReducer,
    [actionConstants.PASS_STUDENT] : passStudentReducer()
});
