import Swal from "sweetalert2";

const THEME = {
  background: "#1c2628",
  color: "#fff",
  confirmButtonColor: "#FFDE9F",
  cancelButtonColor: "#374151",
};

export const showAlert = (options) => Swal.fire({ ...THEME, ...options });
