const CustomBtn = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={`w-fit py-1.5 px-5 rounded-md ${className}`} type="button">
      {text}
    </button>
  );
};

export default CustomBtn;
