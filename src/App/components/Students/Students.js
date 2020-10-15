import React, { Component } from 'react';
import StudentsList from './StudentsList/StudentsList';
import './Students.css';
import GroupList from './GroupList/GroupList';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // TODO feedback: 不建议用id
      <div id="students">
        <GroupList/>
        <StudentsList/>
      </div>
    );
  }
}

export default Students;
