import React, { Component } from 'react';
import './StudentList.css';
import { createStudent, getAllStudents } from '../../../_services/students.service';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentName: '',
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

  handleFiledChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const request = {
      'studentName': this.state.studentName,
    };
    createStudent(request)
      .then(result => {
        console.log(result);
        alert(`添加${result.data.studentName}学员成功`);
      })
      .catch(error => {
        alert(error);
      })
  };

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
          <li id="input-student">
            <form onSubmit={event => this.handleSubmit(event)}>
              <input
                placeholder="+ 添加学员"
                defaultValue={this.state.studentName}
                onChange={event => this.handleFiledChange("studentName", event)}/>
            </form>
          </li>

        </ul>
      </div>
    );
  }
}

export default StudentsList;
