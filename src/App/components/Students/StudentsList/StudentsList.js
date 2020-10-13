import React, { Component } from 'react';
import './StudentList.css';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  render() {
    return (
      <div className="student-lists">
        <h2>
          学员列表
        </h2>
        <ul className="student-list">
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
          <li>1.成吉思汗</li>
        </ul>
      </div>
    );
  }
}

export default StudentsList;
