import {handleResponse} from "../_helpers/handle-response";
import React from "react";

// TODO feedback: 重复export了
export const studentsService = {
  getAllStudents
};

export function getAllStudents() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
  };
  // TODO feedback: 建议把URL定义为常量
  return fetch(`http://127.0.0.1:8080/students`, requestOptions).then(handleResponse);
}

export function createStudent(request) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
    body: JSON.stringify(request)
  };
  return fetch(`http://127.0.0.1:8080/students`, requestOptions).then(handleResponse);
}

export function getGroupingStudents() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
  };
  return fetch(`http://127.0.0.1:8080/students/group`, requestOptions).then(handleResponse);
}
