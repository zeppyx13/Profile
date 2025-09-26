import Swal from "sweetalert2";

export const showSuccess = (title: string, message: string) => {
  Swal.fire({
    icon: "success",
    title,
    text: message,
    confirmButtonColor: "#16a34a", // hijau
    background: "#1f2937", // bg abu gelap
    color: "#f9fafb", // teks putih
  });
};

export const showError = (title: string, message: string) => {
  Swal.fire({
    icon: "error",
    title,
    text: message,
    confirmButtonColor: "#dc2626", // merah
    background: "#1f2937",
    color: "#f9fafb",
  });
};

export const showWarning = (title: string, message: string) => {
  Swal.fire({
    icon: "warning",
    title,
    text: message,
    confirmButtonColor: "#f59e0b", // kuning
    background: "#1f2937",
    color: "#f9fafb",
  });
};

export const showConfirm = async (
  title: string,
  message: string,
  confirmText = "Yes",
  cancelText = "Cancel"
) => {
  const result = await Swal.fire({
    title,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    confirmButtonColor: "#2563eb", // biru
    cancelButtonColor: "#6b7280", // abu
    background: "#1f2937",
    color: "#f9fafb",
  });

  return result.isConfirmed;
};
