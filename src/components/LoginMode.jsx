import './LoginMode.css';

export default function LoginMode() {
  return (
    <main className="login-mode" data-node-id="205:13261" data-name="로그인/Mode적용시">
      <header className="login-status-bar" data-node-id="205:13276">
        <div className="login-status-bar__time">9:41</div>
        <div className="login-status-bar__notch" aria-hidden="true" />
        <div className="login-status-bar__indicators" aria-hidden="true">
          <span className="login-status-bar__cellular">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="login-status-bar__wifi" />
          <span className="login-status-bar__battery">
            <span />
          </span>
        </div>
      </header>

      <h1 className="login-mode__title" data-node-id="205:13262">
        아이디 로그인
      </h1>

      <form className="login-mode__form" data-node-id="205:13272">
        <label className="login-mode__field">
          <input aria-label="아이디" placeholder="아이디" type="text" />
        </label>
        <div className="login-mode__divider" data-node-id="205:13274" />
        <label className="login-mode__field">
          <input aria-label="비밀번호" placeholder="비밀번호" type="password" />
        </label>
      </form>

      <button className="login-mode__button" type="button" data-node-id="205:13263">
        로그인
      </button>

      <nav className="login-mode__links" aria-label="계정 메뉴" data-node-id="205:13266">
        <a href="#">회원가입</a>
        <span>|</span>
        <a href="#">아이디 찾기</a>
        <span>|</span>
        <a href="#">비밀번호 찾기</a>
      </nav>
    </main>
  );
}
