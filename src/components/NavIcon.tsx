import { useNavigate } from 'react-router-dom';

type NavIconProps = {
  icon: React.ElementType;
  to: string;
  size?: number;
  className?: string;
}


const NavIcon = ({ icon: Icon, to, size = 18, className = "" }: NavIconProps):JSX.Element => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={`cursor-pointer ${className}`}>
          <Icon size={size}/>
    </button>
  )
}

export  { NavIcon }