import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";


export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        // right: '10px',
        right:'5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        cursor: 'pointer',
        color: '#000',
        fontSize: '24px',
      }}
    >
<FaCircleArrowRight size={30} color="#ddd"/>
    </div>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        cursor: 'pointer',
        color: '#000',
        fontSize: '24px',
      }}
    >
            <FaCircleArrowLeft size={30} color="#ddd"/>
    </div>
  );
};
