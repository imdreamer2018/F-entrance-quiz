import {handleResponse} from "../_helpers/handle-response";

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
  return fetch(`http://127.0.0.1:8080/groups`, requestOptions).then(handleResponse);
}

export function groupingStudents() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
      'Cache': 'no-cache'
    },
  };
  return fetch(`http://127.0.0.1:8080/groups`, requestOptions).then(handleResponse);
}
