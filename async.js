import http from 'k6/http';
import {OPTIONS} from "./common.js";

export const options = OPTIONS;

export default function () {
	http.post('http://localhost:8080/api/posts/async');
}
