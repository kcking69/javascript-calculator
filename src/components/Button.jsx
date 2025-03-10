const Button = ({ name, id, handleButton }) => {
  return (
    <div className='button' id={id} onClick={handleButton}>
      {name}
    </div>
  );
};

export default Button;
