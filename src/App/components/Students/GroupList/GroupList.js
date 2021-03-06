import React, { Component } from 'react';
import { getGroupingStudents, groupingStudents } from '../../../_services/students.service';
import './GroupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    getGroupingStudents()
      .then(result => {
        this.setState({
          groups: result
        })
      })
      .catch(error => {
        alert(error);
      })
  }

  handleGroupingStudent = () => {
    groupingStudents()
      .then(result => {
        this.setState({
          groups: result
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
        <button type="button" onClick={this.handleGroupingStudent}>分组学员</button>
        </div>
        {
          this.state.groups.map(group => (
            <div key={group.id} className="group">
              <h2 key={group.id} className="group-name">
                {group.name}
              </h2>
              <div className="group-list">
                {group.studentList.map(student => (
                  <ul key={student.id} className="group-student-list">
                    <li key={student.id}>{student.id}.{student.name}</li>
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
