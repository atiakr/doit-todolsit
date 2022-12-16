import create from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  currentGroup: undefined,
  currentGroupTitle: undefined,
  setCurrentGroup: (num) => {
    set((state) => ({
      currentGroup: num,
      currentGroupTitle: state.groupList?.[num - 1]?.name,
    }));
  },

  groupList: undefined,
  getGroupList: () => {
    return axios.get("http://localhost:3001/group").then((res) => {
      get().setCurrentGroup(1)
      set((state) => ({
        groupList: res.data
      }));
    });
  },

  todoBox: undefined,
  getTodoBox: () => {
    return axios.get('http://localhost:3001/todoBox')
      .then(res => {
        set((state) => ({
          todoBox: res.data
        }))
      })
  },

  currentTodos: undefined,
  setCurrentTodos: () => {
    console.log(get());
    set((state) => ({
      currentTodos: state.todoBox.filter(el => el.group_id === state.currentGroup)
    }));
  }
}));


export default useStore;