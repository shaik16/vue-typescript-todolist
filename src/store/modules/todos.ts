import axios from 'axios';
type State = { todos: object[]; buttonStatus: string };
const state = {
  todos: [] as object[],
  buttonStatus: `Add to do` as string,
};

type Commit = {
  commit: Function;
};

const getters = {
  allTodos(state: State) {
    return state.todos;
  },
  getButtonStatus(state: State) {
    return state.buttonStatus;
  },
};

const actions = {
  async fetchTodos({ commit }: Commit): Promise<void> {
    const response = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
    });

    commit('setTodos', response.data);
  },
  async addTodo({ commit }: Commit, title: string): Promise<void> {
    commit('buttonWait');
    const response = await axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: {
        title,
        completed: false,
      },
    });
    commit('newTodo', response.data);
    commit('buttonSuccess');
  },
  async deleteTodo({ commit }: Commit, id: number): Promise<void> {
    await axios({
      method: 'delete',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    });

    commit('removeTodo', id);
  },
};

const mutations = {
  buttonWait(state: State) {
    return (state.buttonStatus = 'please wait ...');
  },
  buttonSuccess(state: State) {
    return (state.buttonStatus = 'Add to do');
  },
  setTodos(state: State, todos: []) {
    return (state.todos = todos);
  },
  newTodo(state: State, todo: {}) {
    return state.todos.unshift(todo);
  },
  removeTodo(state: State, id: number) {
    return (state.todos = state.todos.filter((todo: any) => todo.id !== id));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
