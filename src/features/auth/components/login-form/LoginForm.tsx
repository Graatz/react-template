import "./LoginForm.scss";

export function LoginForm() {
  return (
    <>
      <h1>Login form</h1>
      <form className="login-form flex flex-column gap-2">
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
