import Swal from "sweetalert2"

export function alertMsg(title, text, icon) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        timer: 2000,
        showConfirmButton: false,
      })
}
