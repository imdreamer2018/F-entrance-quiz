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
