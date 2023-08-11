const Login = () => {
  return (
    <div className="login">
      <form>
        <label htmlFor="email">
          <input type="email" placeholder="Enter your email" />
        </label>
        <label htmlFor="password">
          <input type="password" placeholder="Enter your password" />
        </label>
      </form>
    </div>
  );
};

export default Login;
