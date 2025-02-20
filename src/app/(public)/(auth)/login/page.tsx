import LoginForm from "./login-form";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="title"> Log in </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
