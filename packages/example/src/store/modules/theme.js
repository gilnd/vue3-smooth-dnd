export default {
  state: {
    theme: localStorage.getItem('theme')
  },

  getters: { 
    theme: state => state.theme
  },

  mutations: {
    setTheme(state, theme) {
      // save theme preference
      state.theme = theme;
      localStorage.setItem('theme', theme);

      // set theme
      document.querySelector("html").classList.remove("dark")
      if(theme === "dark")
        document.querySelector("html").classList.add("dark");
    }
  },
  
  actions: {
    initTheme({ commit }) {
      const cachedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : false;

      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (cachedTheme) commit('setTheme', cachedTheme)
      else if (userPrefersDark) commit('setTheme', 'dark')
      else commit('setTheme', 'light')
    }, 
    toggleTheme({ commit }) {
      switch (localStorage.getItem('theme')) {
        case 'light': commit('setTheme', 'dark') 
          break;
        default: commit('setTheme', 'light') 
          break;
      }
    },
  },   
}