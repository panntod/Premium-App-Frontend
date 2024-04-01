export const handleApiError = (error) => {
  if (error.response && error.response.status) {
    const status = error.response.status;
    if (status === 403) {
      window.location.href = "/forbidden";
    } else if (status === 401) {
      alert(error.response.data.message);
      localStorage.clear();
      window.location.href = "/login";
    }
  } else if (error.message === "Network Error") {
    window.location.href = "/error";
  }
  return error.response;
};