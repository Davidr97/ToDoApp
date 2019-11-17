import md5 from "md5";
import actionConstants from './constants';


const addStudent = (firstName, secondName, age, passed) => ({
    type: actionConstants.ADD_STUDENT,
    firstName,
    secondName,
    age,
    passed,
    id: md5(firstName + secondName + age)
});

const addCourse = (name, semester) => ({
    type: actionConstants.ADD_COURSE,
    name,
    semester,
    id: md5(name)
});

const passStudent = (id) => ({
    type: actionConstants.PASS_STUDENT,
    id
});

const addCourseToStudent = (studentId, courseId) => ({
    type: actionConstants.ADD_COURSE_TO_STUDENT,
    studentId,
    courseId,
    id: md5(studentId + courseId)
});

export {addStudent, addCourse, passStudent, addCourseToStudent};
