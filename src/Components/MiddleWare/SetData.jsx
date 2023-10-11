const setData = (value) => {
  window.localStorage.setItem("login", JSON.stringify(value));
};

export default setData;
