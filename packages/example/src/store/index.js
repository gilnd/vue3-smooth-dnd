import { createStore } from "vuex";

// modules
import theme from './modules/theme'

const store = createStore({
  modules: { theme },
});

export default store;
