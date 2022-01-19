import $http from "./axios";

const users = () => {
  return $http.get("users");
};

const createUser = (creadential) => {
  return $http.post("users", creadential);
};

const updateUser = (creadential) => {
  return $http.put("users/" + creadential.id, creadential);
};

const deleteUser = (id) => {
  return $http.delete("users/" + id);
};

export default {
  users,
  createUser,
  updateUser,
  deleteUser,
};
