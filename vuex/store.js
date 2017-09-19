import Vue from 'vue'
import Vuex from 'vuex'

// import note from './modules/note'
// import actions from './actions'
Vue.use(Vuex)


const ADD_NOTE = 'ADD_NOTE';
// 编辑笔记
const EDIT_NOTE = 'EDIT_NOTE';
// 删除笔记
const DELETE_NOTE = 'DELETE_NOTE';
// 设置当前的笔记
const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE';
// 切换是否收藏
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


// const state = {
//   notes: [],// 所有的笔记，这里自然是用数组来存储
//   activeNote: {}// 当前的笔记
// }



// 将state, mutations传入
export default new Vuex.Store({
  modules: {
    // note
    note : {

        state : {
          notes: [],// 所有的笔记，这里自然是用数组来存储
          activeNote: {},// 当前的笔记
          test_computed : 0 //测试属性变化，引起computed
        },
        mutations : {
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
            state.test_computed++;
            console.log('添加');


            // console.log(state.notes);
            // console.log(state.activeNote);
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
            if (state.activeNote.favorite) 
            {
                state.activeNote.favorite = false;
            }
            else
            {
                state.activeNote.favorite = true;
            }

            // state.activeNote.favorite = state.activeNote.favorite ? state.activeNote.favorite : false ;
            // state.activeNote.favorite = !state.activeNote.favorite

          },
          [SET_ACTIVE_NOTE](state, note) {
            state.activeNote = note;
          }
        },


        getters : {
        /*notes: function(state) {
            return state.notes
          },
          activeNote: function(state) {
            return state.activeNote
          }*/
          notes: state => { return state.notes },

          activeNote: state => { return state.activeNote },

          test_computed: function(state) {
            console.log(11112222);
            return state.test_computed
          }

        }
    }
    

  },
  // actions
  // 
  actions: {
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

})
