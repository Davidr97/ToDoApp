import actionConstants from '../actions/constants';

const studentCourse = (state = [], action) => {
    switch(action.type){
        case actionConstants.ADD_COURSE_TO_STUDENT:
            return [
                ...state,
                {
                    id: action.id,
                    studentId: action.studentId,
                    courseId: action.courseId
                }
            ];
        default:
            return state
    }
};

export default studentCourse;
