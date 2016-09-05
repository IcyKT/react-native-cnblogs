import _ from 'lodash';

import * as requestService from './request';
import * as Util from '../common';
import { pageSize } from '../config';
import dataApi from '../config/api';

function filterData(data) {
	return JSON.parse(data);
}

export function getCommentsByPost(category, pid, params = {}){
	params.pageSize = pageSize;
	params.pid = pid;

	let fetchApi = DataApi[category]["comments"];

	let strCompiled = _.template(fetchApi);
	fetchApi = strCompiled(params);

	return requestService.get(fetchApi).then(filterData);
}

export function addComent(){
	//TODO: 添加评论
}

