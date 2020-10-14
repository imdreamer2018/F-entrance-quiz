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
          students: result
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
      'name': this.state.studentName,
    };
    createStudent(request)
      .then(result => {
        alert(`添加${result.data.studentName}学员成功`);
      })
      .catch(error => {
        console.log(error);
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
              <li key={student.id}>{student.id}.{student.name}</li>
            ))
          }
          <li id="input-student">
            <form onSubmit={event => this.handleSubmit(event)}>
              <input
                placeholder="+ 添加学员"
                defaultValue={this.state.name}
                onChange={event => this.handleFiledChange("studentName", event)}/>
            </form>
          </li>

        </ul>
      </div>
    );
  }
}

export default StudentsList;
