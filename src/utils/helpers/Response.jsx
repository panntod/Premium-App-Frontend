import { toast } from "react-toastify";

export const handleApiError = (error) => {
  if (error.response && error.response.status) {
    const status = error.response.status;
    if (status === 403) {
      window.location.href = "/forbidden";
    } else if (status === 401) {
      toast.error(error.response.data.message, { autoClose: 2000 });
      setTimeout(() => {
        localStorage.clear();
        window.location.href = "/login";
      }, 2000);
    }
  } else if (error.message === "Network Error") {
    window.location.href = "/error";
  }
  return error.response;
};

export const handleApiResponse = (
  response,
  additionalSuccessAction = () => {},
) => {
  if (response.success === true) {
    toast.success(response.message, { autoClose: 2000 });
    additionalSuccessAction();
  } else {
    const errorMessage = response.data.errors
      ? response.data.errors
      : ["Terjadi kesalahan pada server"];

    errorMessage.forEach((message) => {
      toast.error(message, { autoClose: 2000 });
    });
  }
};

export const handleBackHome = () => {
  window.location.href = "/";
};
