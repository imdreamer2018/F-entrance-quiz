import React, { Component } from 'react';
import './StudentList.css';
import { getAllStudents } from '../../../_services/students.service';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    getAllStudents()
      .then(result => {
        this.setState({
          students: result.data
        });
      })
      .catch(error => {
        alert(error);
      })

  }

  render() {
    return (
      <div className="student-lists">
        <h2>
          学员列表
        </h2>
        <ul className="student-list">
          {
            this.state.students.map(student => (
              <li key={student.studentId}>{student.studentId}.{student.studentName}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default StudentsList;
