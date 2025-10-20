import http from 'k6/http';
import {group} from 'k6';
import {Trend} from 'k6/metrics';
import {OPTIONS} from "./common.js";

export const options = OPTIONS;

// 각 API별 커스텀 메트릭 정의
const normalTrend = new Trend('normal');
const virtualThreadTrend = new Trend('virtual_thread');
const platformThreadTrend = new Trend('platform_thread');

/**
 * k6 run post.js
 */
export default function () {
	group('Normal API', function () {
		const response = http.post('http://localhost:8080/api/posts', null, {
			tags: {name: 'Normal'}
		});
		normalTrend.add(response.timings.duration);
	});

	group('Virtual thread API', function () {
		const response = http.post('http://localhost:8080/api/posts/3/virtual', null, {
			tags: {name: 'Virtual'}
		});
		virtualThreadTrend.add(response.timings.duration);
	});

	group('Platform thread API', function () {
		const response = http.post('http://localhost:8080/api/posts/3/platform', null, {
			tags: {name: 'Platform'}
		});
		platformThreadTrend.add(response.timings.duration);
	});
}
