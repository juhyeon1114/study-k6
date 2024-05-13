import http from 'k6/http';
import {OPTIONS} from "./common.js";

export const options = OPTIONS;

export default function () {
  http.get('http://localhost:8080/hello/query');
}