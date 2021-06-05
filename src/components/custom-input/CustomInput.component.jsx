import "./CustomInput.css";

const CustomInput = ({ onChange, ...otherProps }) => {
  return (
    <form>
      <input onChange={onChange} {...otherProps} />
    </form>
  );
};

export default CustomInput;
