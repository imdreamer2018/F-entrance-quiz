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
        // TODO feedback: no console log
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
      // TODO feedback: 建议使用语义化标签
      <div className="groups">
        <div className="groups-header">
        <h2>
          分组列表
        </h2>
        <button onClick={this.handleGroupingStudent}>分组学员</button>
        </div>
        {
          this.state.groups.map(group => (
            // TODO feedback: 组件可以进一步抽象
            // TODO feedback: 列表用ul li更符合语义
            <div key={group.groupId} className="group">
              // TODO feedback: h2不需要添加key
              <h2 key={group.groupId} className="group-name">
                {group.groupId} 组
              </h2>
              <div className="group-list">
                {/*// TODO feedback: group中是student list，那用groupList命名不合适*/}
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
