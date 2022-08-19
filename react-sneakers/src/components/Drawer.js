

function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-20">Cart
          <img className="cu-p m-0" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cart-item-img"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Male Sneakers Nike Blazer Mid Suede</p>
              <b>1299 usd</b>
            </div>
            <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cart-item d-flex align-center mt-10">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cart-item-img"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Male Sneakers Nike Blazer Mid Suede</p>
              <b>1299 usd</b>
            </div>
            <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
          </div>

        </div>

        <div className="cart-total-block">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>2600 usd</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>150 usd</b>
            </li>
          </ul>
          <button className="green-button">
            Go to checkout
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;