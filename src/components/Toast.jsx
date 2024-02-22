// components/Toast.jsx
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  // Example of toast configuration, you can customize this
  const toastConfig = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <div>
      <toast.ToastContainer />
    </div>
  );
};

export default Toast;
