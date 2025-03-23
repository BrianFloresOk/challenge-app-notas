import Swal from 'sweetalert2';

type Icon = "success" | "error" | "info" | "warning" | "question"

const useSweetAlert = () => {

    const showToast = async (title: string, icon: Icon, timer: number) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: false,
        });

        Toast.fire({
            icon,
            title
        });
    };

    const showModal = async (title: string, icon: Icon, text: string) => {
        const result = await Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'bg-red-600 text-white hover:bg-red-700 border-none',
                cancelButton: 'bg-gray-600 text-white hover:bg-gray-700 border-none'
            }
        });
        return result
    }

    const showFire = async (title: string, icon: Icon, text: string) => {
        Swal.fire(title, text, icon)
    }

    return {
        showToast,
        showModal,
        showFire
    }

}

export default useSweetAlert