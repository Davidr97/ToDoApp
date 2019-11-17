import {combineReducers} from 'redux';
import student from './student';
import course from './course';
import studentCourse from './studentCourse';

const studentsApp = combineReducers({
    students: student,
    courses: course,
    studentCourses: studentCourse
});

export default studentsApp;
