const SetAuth = (data) => {
  const idString = JSON.stringify(data.id);
  const roleString = JSON.stringify(data.role);
  const namaString = JSON.stringify(data.username);
  const tokenString = JSON.stringify(data.token);

  localStorage.setItem("logged", "true");
  localStorage.setItem("userID", idString);
  localStorage.setItem("namaUser", namaString);
  localStorage.setItem("roleUser", roleString);
  localStorage.setItem("tokenUser", tokenString);
};

const GetAuth = (key) => {
  const itemString = localStorage.getItem(key);

  if (itemString) {
    try {
      return JSON.parse(itemString);
    } catch (error) {
      console.error(`Error parsing ${key} from local storage:`, error);
    }
  }

  return null;
};

const ClearAuth = () => {
  localStorage.clear();
};

export default {
  SetAuth,
  GetAuth,
  ClearAuth,
};
