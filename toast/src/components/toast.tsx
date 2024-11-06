import { useState } from "react";

export function ToastContainer() {
  const [toast, setToast] = useState([]);

  const handleClose = (id: number) => {
    setToast((prevState) => {
      const filteredArr = prevState.filter((toast) => {
        return toast.id !== id;
      });

      return filteredArr;
    });
  };

  const handleAddToast = (message: string, type: string) => {
    const id = new Date().getTime();
    const newToast = [...toast, { id, message, type }];

    setToast(newToast);

    setTimeout(() => handleClose(id), 5000);
  };

  return (
    <div>
      <div className="toast-container">
        {toast.map(({ message, type, id }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>X</span>
            </div>
          );
        })}
      </div>

      <div className="toast-btn">
        <button
          onClick={() => handleAddToast("Success", "success")}
          className="success"
        >
          Success
        </button>
        <button
          onClick={() => handleAddToast("Warning", "warning")}
          className="warning"
        >
          Warning
        </button>
        <button
          onClick={() => handleAddToast("Error", "error")}
          className="error"
        >
          Error
        </button>
        <button onClick={() => handleAddToast("Info", "info")} className="info">
          Info
        </button>
      </div>
    </div>
  );
}
