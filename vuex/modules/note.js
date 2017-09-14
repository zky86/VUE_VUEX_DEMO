// import * as types from '../mutation-types';

const ADD_NOTE = 'ADD_NOTE';
// 编辑笔记
const EDIT_NOTE = 'EDIT_NOTE';
// 删除笔记
const DELETE_NOTE = 'DELETE_NOTE';
// 设置当前的笔记
const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE';
// 切换是否收藏
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


const state = {
  notes: [],// 所有的笔记，这里自然是用数组来存储
  activeNote: {}// 当前的笔记
}

// 根据不同的事件类型(types)做出的修改动作，对状态的修改都在这里面
const mutations = {
  // 新增笔记
  [ADD_NOTE](state) {
    const newNote = {
      text: 'New note',
      favorite: false 
    };
    // 将新增笔记添加到notes数组对象
    state.notes.push(newNote);
    // 指定当前的笔记为新增的笔记
    state.activeNote = newNote;
  },
  // 编辑笔记
  [EDIT_NOTE](state, text) {
    state.activeNote.text = text;
  },
  [DELETE_NOTE](state) {
    state.notes.splice(state.activeNote, 1);// 删除当前的笔记
    // 删除后默认笔记列表的第一条为当前的笔记
    if(state.notes.length > 0) {
      state.activeNote = state.notes[0];
    }
  },
  [TOGGLE_FAVORITE](state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  [SET_ACTIVE_NOTE](state, note) {
    state.activeNote = note;
  }
}

const getters = {
/*notes: function(state) {
    return state.notes
  },
  activeNote: function(state) {
    return state.activeNote
  }*/
  notes: state => { return state.notes },
  activeNote: state => { return state.activeNote }

}

export default {
  state,
  mutations,
  getters
}
