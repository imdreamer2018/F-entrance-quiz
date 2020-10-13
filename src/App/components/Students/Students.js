import React, { Component } from 'react';
import StudentsList from './StudentsList/StudentsList';
import './Students.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="students">
        <StudentsList/>
      </div>
    );
  }
}

export default Students;
