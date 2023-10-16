import Swal from "sweetalert2";

export const alerts = {
    success(title){
        Swal.fire({
            title: title,
            toast: true,
            position: "bottom-right",
            timer: 2000,
            icon: 'success'
        } )
    }
}