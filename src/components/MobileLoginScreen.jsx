import './MobileLoginScreen.css';

export default function MobileLoginScreen() {
  return (
    <main className="mobile-login-screen" data-node-id="3:2" data-name="Mobile Login Screen">
      <header className="mobile-login-screen__header" data-node-id="3:3" data-name="Header">
        <h1 data-node-id="3:4">Welcome back</h1>
        <p data-node-id="3:5">Log in to continue</p>
      </header>

      <form className="mobile-login-screen__form" data-node-id="3:6" data-name="Login Form">
        <label className="mobile-login-screen__field" data-node-id="3:8" data-name="Email Input">
          <span data-node-id="3:9">Email</span>
          <input
            aria-label="Email"
            data-node-id="3:10"
            placeholder="you@example.com"
            type="email"
          />
        </label>

        <label className="mobile-login-screen__field" data-node-id="3:12" data-name="Password Input">
          <span data-node-id="3:13">Password</span>
          <input
            aria-label="Password"
            data-node-id="3:14"
            placeholder="Enter your password"
            type="password"
          />
        </label>

        <a className="mobile-login-screen__forgot" href="#" data-node-id="3:16">
          Forgot password?
        </a>

        <button className="mobile-login-screen__button" type="button" data-node-id="3:17">
          <span data-node-id="3:18">Log in</span>
        </button>
      </form>
    </main>
  );
}
