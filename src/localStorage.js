export const saveState = (state) => {
    // const data = JSON.parse(localStorage.getItem("boards")) || [];
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('appState', serialState);
    } catch(err) {
        console.log(err);
    }
};



export const loadState = () => {
    try {
      const serialState = localStorage.getItem('appState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};