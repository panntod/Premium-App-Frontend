export const handleApiError = (error) => {
    if (error.status) {
        const status = error.status;
        if (status === 403) {
        window.location.href = "/forbidden";
        } 
    }

    return error.response;
};
