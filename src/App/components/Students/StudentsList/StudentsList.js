import React, { Component } from 'react';
import './StudentList.css';
import { createStudent, getAllStudents } from '../../../_services/students.service';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    // TODO feedback: studentName值不需要存储在state中，同步到后台数据就可以了
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

  // TODO feedback: handleFiledChange命名不表意
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
        // TODO feedback: 需求里没有alert
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
              <li key={student.studentId}>{student.studentId}.{student.studentName}</li>
            ))
          }
          <li id="input-student">
            {/*// TODO feedback:不需要添加form*/}
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
