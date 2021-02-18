import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { ApiInfos } from '../generated/core/ApiInfo';

Vue.use(Vuex);

type ApiInfo = any;
export interface IStore {
  query: string;
  apis: ApiInfo[];
  renderApi: any;
  loggedIn: boolean;
  anonymous: boolean;

  response: any;
  isResponseErrorOccured: boolean;
}

const store = new Store<IStore>({
  state: {
    query: '',
    apis: ApiInfos,
    renderApi: null,
    loggedIn: false,
    anonymous: false,

    response: null,
    isResponseErrorOccured: false,
  },
  getters: {
    filteredApis: state => {
      return state.apis.filter((info: any) => {
        const queries = () => {
          return ((state.query as string) || '')
            .trim()
            .split(' ')
            .map(q => q.trim())
            .filter(q => q !== undefined && q !== '');
        };
        const filter = (queries: string[] = [], testee: string = '') => {
          return queries.every((q: string) =>
            testee.toUpperCase().includes(q.toUpperCase())
          );
        };
        return (
          filter(queries(), info.path) ||
          filter(queries(), info.className) ||
          filter(queries(), info.methodName)
        );
      });
    },
    loggedInStatusMessage: state => (state.loggedIn ? state.anonymous ? 'ANONYMOUS' :　'LOGGEDIN' : 'UNAUTHENTICATED'),
  },
  mutations: {
    setQuery(state, query: string = '') {
      state.query = query;
    },
    setApis(state, apis = []) {
      state.apis = apis;
    },
    setRenderApi(state, api) {
      state.renderApi = api;
    },
    setResponse(state, [response, isResponseErrorOccured]) {
      state.response = response;
      state.isResponseErrorOccured = isResponseErrorOccured;
    },
    setLoggedInStatus(state, {loggedIn, anonymous}) {
      state.loggedIn = loggedIn;
      state.anonymous = anonymous;
    },
  },
  actions: {
    setQuery(context, query) {
      context.commit('setQuery', query);
    },
    setApis(context, apis = []) {
      context.commit('setApis', apis);
    },
    setRenderApi(context, api) {
      context.commit('setRenderApi', api);
    },
    request({ commit, state }, { requestParam }) {
      return state.renderApi
        .method(requestParam)
        .then((res: any) => commit('setResponse', [res, false]))
        .catch((err: any) => commit('setResponse', [err, true]));
    },
    clearResponse(context) {
      context.commit('setResponse', [null, false]);
    },
    updateLoggedInStatus(context, {loggedIn, anonymous = false}) {
      context.commit('setLoggedInStatus', {loggedIn, anonymous});
    },
  },
});

export default store;
