import http from 'k6/http';
import {OPTIONS} from "./common.js";

export const options = OPTIONS;

/**
 * k6 run thread-virtual.js && curl http://localhost:8080/actuator/prometheus | grep -E "(jvm_memory|jvm_threads|process_cpu)"
 */
export default function () {
	http.post('http://localhost:8080/api/posts/3/virtual');
}
