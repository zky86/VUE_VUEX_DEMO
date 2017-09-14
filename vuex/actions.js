// import * as types from './mutation-types';


const ADD_NOTE = 'ADD_NOTE';
// 编辑笔记
const EDIT_NOTE = 'EDIT_NOTE';
// 删除笔记
const DELETE_NOTE = 'DELETE_NOTE';
// 设置当前的笔记
const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE';
// 切换是否收藏
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export default {
	addNote({commit}) {
		commit(ADD_NOTE)
	},
	editNote({commit}, text) {
		commit(EDIT_NOTE, text)
	},
	deleteNote({commit}) {
		commit(DELETE_NOTE)
	},
	updateActiveNote({commit}, note) {
		commit(SET_ACTIVE_NOTE, note)
	},
	toggleFavorite({commit}) {
		commit(TOGGLE_FAVORITE)
	}
}
