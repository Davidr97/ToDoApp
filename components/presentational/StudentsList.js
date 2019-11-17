import React from 'react';
import { View, Text, Button } from 'react-native';

class StudentsList extends React.Component{

    render() {
        const {addStudent, passStudent, students} = this.props;
        console.log(addStudent);
        console.log(passStudent);
        console.log(students);

        return (
            <View style={{flex: 1}}>
                {
                    students.map(student => <Text>
                        {student.firstName}
                        {student.secondName}
                        {student.age}
                        {student.passed ? 'passed' : 'not passed'}
                    </Text>)
                }
                <Button title={'Add student'} onPress={() => addStudent('David','Ristov',22,true)}/>
            </View>
        );
    }
}

export default StudentsList;
