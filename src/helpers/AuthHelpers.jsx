const SetAuth = (data) => {
  const idString = JSON.stringify(data.id);
  const roleString = JSON.stringify(data.role);
  const namaString = JSON.stringify(data.username);
  const tokenString = data.token;

  localStorage.setItem("logged", "true");
  localStorage.setItem("userID", idString);
  localStorage.setItem("namaUser", namaString);
  localStorage.setItem("roleUser", roleString);
  localStorage.setItem("token", tokenString);
};

const GetRole = () => {
  const roleString = localStorage.getItem("roleUser");

  if (roleString) {
    const role = JSON.parse(roleString);
    return role;
  }

  return null;
};

const GetUserId = () => {
  const userId = localStorage.getItem("userID");

  if (roleString) {
    const userID = JSON.parse(userId);
    return userID;
  }

  return null;
};

const GetLogged = () => {
  const loginStatus = localStorage.getItem("logged");

  if (loginStatus) {
    const login = JSON.parse(loginStatus);
    return login;
  }

  return null;
};

const ClearAuth = () => {
  localStorage.removeItem("logged");
  localStorage.removeItem("userID");
  localStorage.removeItem("roleUser");
  localStorage.removeItem("namaUser");
  localStorage.removeItem("token");
  localStorage.clear();
};

export default { SetAuth, GetRole, ClearAuth, GetUserId, GetLogged };
