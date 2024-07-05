import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ConfirmModalProps } from "@/interfaces/confirmModalProps";

const MySwal = withReactContent(Swal);

const ConfirmModal = ({
    title,
    text,
    icon,
    confirmButtonText,
}: ConfirmModalProps) => {
    return MySwal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        customClass: {
            confirmButton: "btn btn-primary",
        },
        buttonsStyling: false,
    });
};

export default ConfirmModal;
