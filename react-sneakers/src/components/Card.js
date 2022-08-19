


function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked"/>
      </div>
      <img src="/img/sneakers/1.jpg" alt="sneakers" width={133} height={112}/>
      <h5>Male Sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>1299 usd</b>
        </div>
        <button className="button">
          <img src="/img/button+.svg" alt="plus" width={11} height={11}/>
        </button>
      </div>
    </div>
  );
}


export default Card;




