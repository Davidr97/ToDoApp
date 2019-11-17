import { connect } from 'react-redux';
import { addStudent, passStudent} from '../../redux/actions';
import StudentsList from '../presentational/StudentsList';

const mapStateToProps = state => ({
    students: state.students
});

const mapDispatchToProps = dispatch => ({
   addStudent: (firstName,secondName,age,passed) => dispatch(addStudent(firstName,secondName,age,passed)),
   passStudent: id => dispatch(passStudent(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentsList)
