import {Slide, toast} from 'react-toastify'


export const showSuccessToast = (message: string) => {
    toast.success(message, {
    position: 'bottom-left',
    autoClose: 900,
    pauseOnHover: true,
    transition: Slide,
    hideProgressBar: true
  })
}

export const showErrorToast = (message: string) =>{
    toast.error(message, {
    position: 'bottom-left',
    autoClose: 1000,
    pauseOnHover: true,
    transition: Slide,
    hideProgressBar: true
  })
} 