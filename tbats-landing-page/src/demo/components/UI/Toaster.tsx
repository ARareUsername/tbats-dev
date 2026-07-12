import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface Toast {
  id: string;
  message: string;
  type: string;
  action: ToastAction | null;
}

interface ShowToastDetail {
  message: string;
  type?: string;
}

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { toggleDrawer } = useCart();

  useEffect(() => {
    const handleShowToast = (e: Event) => {
      const detail = e as CustomEvent<ShowToastDetail>;
      const { message, type = 'success' } = detail.detail;
      const id = Date.now() + Math.random().toString();
      
      const newToast: Toast = {
        id,
        message,
        type,
        action: message.toLowerCase().includes('added') ? {
          label: 'View Bag',
          onClick: () => {
            toggleDrawer();
            removeToast(id);
          }
        } : null
      };

      setToasts(prev => [...prev, newToast]);

      // Auto dismiss after 3s
      setTimeout(() => {
        removeToast(id);
      }, 3000);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => {
      window.removeEventListener('show-toast', handleShowToast);
    };
  }, [toggleDrawer]);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="p-toaster-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`p-toast ${toast.type}`}>
          <div className="p-toast-content">
            <span className="material-symbols-outlined p-toast-icon">
              {toast.type === 'success' ? 'check_circle' : 'info'}
            </span>
            <span className="p-toast-message">{toast.message}</span>
          </div>
          {toast.action && (
            <button className="p-toast-action-btn" onClick={toast.action.onClick}>
              {toast.action.label}
            </button>
          )}
          <button className="p-toast-close" onClick={() => removeToast(toast.id)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      ))}
    </div>
  );
}
