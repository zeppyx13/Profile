import Swal from "sweetalert2";

interface ShowAlertProps {
    title?: string;
    text?: string;
    icon?: "success" | "error" | "warning" | "info" | "question";
    confirmButtonText?: string;
}

const showAlert = ({
    title = "Hello!",
    text = "This is a SweetAlert2 alert.",
    icon = "success",
    confirmButtonText = "Cool",
}: ShowAlertProps) => {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
    });
};

export default showAlert;
