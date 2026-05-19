import './CartScreen.css';

const productImage = 'http://localhost:3845/assets/9b74eef7547496ef27c67dbc0522a5f76db8426c.png';

export default function CartScreen() {
  return (
    <main className="cart-screen" data-node-id="205:12761" data-name="Number/cart_메시지2개+boolean">
      <header className="cart-status-bar" data-node-id="205:12796">
        <div className="cart-status-bar__time">9:41</div>
        <div className="cart-status-bar__indicators" aria-hidden="true">
          <span className="cart-status-bar__cellular">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="cart-status-bar__wifi" />
          <span className="cart-status-bar__battery">
            <span />
          </span>
        </div>
      </header>

      <nav className="cart-navigation" aria-label="장바구니 상단 메뉴" data-node-id="205:12790">
        <button className="cart-navigation__back" type="button" aria-label="뒤로 가기" data-node-id="205:12791">
          <span />
        </button>
        <h1 data-node-id="205:12793">장바구니</h1>
        <span className="cart-navigation__spacer" aria-hidden="true" data-node-id="205:12794" />
      </nav>

      <section className="cart-list" aria-label="장바구니 리스트" data-node-id="205:12764">
        <article className="cart-product" data-node-id="205:12765">
          <header className="cart-product__header" data-node-id="205:12766">
            <h2 data-node-id="205:12767">오뚜기 특가 행사</h2>
            <button className="cart-product__remove" type="button" aria-label="상품 삭제" data-node-id="205:12768">
              <span />
              <span />
            </button>
          </header>

          <div className="cart-product__body" data-node-id="205:12771">
            <img className="cart-product__image" src={productImage} alt="오뚜기 열라면" data-node-id="205:12772" />
            <div className="cart-product__copy" data-node-id="205:12773">
              <p className="cart-product__name" data-node-id="205:12774">
                오뚜기 열라면
              </p>
              <p className="cart-product__stock" data-node-id="205:12775">
                5개 남음
              </p>
            </div>
          </div>

          <footer className="cart-product__footer" data-node-id="205:12776">
            <div className="cart-counter" aria-label="상품 수량" data-node-id="205:12777">
              <button type="button" aria-label="수량 줄이기" data-node-id="205:12778">
                <span className="cart-counter__minus" />
              </button>
              <strong data-node-id="205:12780">1</strong>
              <button type="button" aria-label="수량 늘리기" data-node-id="205:12781">
                <span className="cart-counter__minus" />
                <span className="cart-counter__plus" />
              </button>
            </div>

            <p className="cart-product__amount" data-node-id="205:12786">
              <strong data-node-id="205:12787">1000</strong>
              <span data-node-id="205:12788">원</span>
            </p>
          </footer>
        </article>
      </section>

      <button className="cart-order-button" type="button" data-node-id="205:12762">
        주문하기
      </button>

      <div className="cart-home-indicator" aria-hidden="true" data-node-id="205:12789">
        <span />
      </div>
    </main>
  );
}
