import Search from "../Search";

const SignIn = () => {
  return (
    <div className="d-flex flex-column my-3">
      <Search className="mb-2" type="email" placeholder="Email" />
      <Search type="password" placeholder="password" />
    </div>
  );
};

export default SignIn;
