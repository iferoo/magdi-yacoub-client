import { toast } from "react-toastify";

export const succNotify = (message) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
    });
};

export const errNotify = (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
    });
};