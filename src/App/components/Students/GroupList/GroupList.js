import React, { Component } from 'react';
import { getGroupingStudents } from '../../../_services/students.service';
import './GroupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  handleGroupingStudent = () => {
    getGroupingStudents()
      .then(result => {
        console.log(result);
        this.setState({
          groups: result.data
        })
      })
      .catch(error => {
        alert(error);
      })
  };

  render() {
    return (
      <div className="groups">
        <div className="groups-header">
        <h2>
          分组列表
        </h2>
        <button onClick={this.handleGroupingStudent}>分组学员</button>
        </div>
        {
          this.state.groups.map(group => (
            <div key={group.groupId} className="group">
              <h2 key={group.groupId} className="group-name">
                {group.groupId} 组
              </h2>
              <div className="group-list">
                {group.groupList.map(student => (
                  <ul key={student.studentId} className="group-student-list">
                    <li key={student.studentId}>{student.studentId}.{student.studentName}</li>
                  </ul>
                ))}
              </div>
            </div>
            ))
        }

      </div>
    );
  }
}

export default GroupList;
