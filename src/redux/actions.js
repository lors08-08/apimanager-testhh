export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "users/load/start" });

    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "users/load/succeed",
          payload: json,
        });
      });
  };
}

export function loadApis() {
  return (dispatch) => {
    dispatch({ type: "apis/load/start" });

    fetch("http://localhost:3010/apis")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "apis/load/succeed",
          payload: json,
        });
      });
  };
}

export function selectApi(src) {
  return (dispatch) => {
    dispatch({ type: "apis/select/start" });
    fetch(src)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "apis/select/succeed",
          payload: json,
        });
      });
  };
}

export function startLogIn(login, pass) {
  return (dispatch) => {
    dispatch({ type: "admin/login/start" });

    fetch(`http://localhost:3010/authorization?login=${login}&password=${pass}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length) {
          localStorage.setItem("auth-token", json.token);
          dispatch({
            type: "admin/login/succeed",
            payload: json,
          });
        } else {
          dispatch({
            type: "admin/login/failed",
          });
        }
      });
  };
}

export function setSearchValue(value) {
  return (dispatch) => {
    dispatch({
      type: "apis/setSearchValue",
      payload: value,
    });
  };
}

// export function logout() {
//   localStorage.removeItem("auth-token");
//   return (dispatch) => {
//     dispatch({ type: "admin/logout" });
//   };
// }

export function addUser(email, name, surname, number, aboutMe) {
  return (dispatch) => {
    dispatch({ type: "users/add/start" });
    fetch("http://localhost:3010/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        surname: surname,
        number: number,
        aboutMe: aboutMe,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "users/add/succeed",
          payload: json,
        });
      });
  };
}

export function switchUser(id) {
  return (dispatch) => {
    dispatch({
      type: "users/switch",
      payload: id,
    });
  };
}
