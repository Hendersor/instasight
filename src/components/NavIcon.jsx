import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavIcon = ({ icon: Icon, to, size = 18, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={`cursor-pointer ${className}`}>
          <Icon size={size}/>
    </button>
  )
}

NavIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
}

export  { NavIcon }