import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
      const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user'); // Remove user data
    toast.info('Logged out');
    // onLogout();
          navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
}
