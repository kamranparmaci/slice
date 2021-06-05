import CustomInput from "../custom-input/CustomInput.component";

const SignIn = () => {
  return (
    <div className="d-flex flex-column my-3">
      <CustomInput className="mb-2" type="email" placeholder="Email" />
      <CustomInput type="password" placeholder="password" />
    </div>
  );
};

export default SignIn;
