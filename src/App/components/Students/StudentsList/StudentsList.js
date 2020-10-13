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
      <div>
        <h3>
          学员列表
        </h3>
        <div className="student-list">
          <ul>
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
      </div>
    );
  }
}

export default StudentsList;
