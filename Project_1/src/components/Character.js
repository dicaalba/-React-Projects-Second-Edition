function Character(props) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={props.image} alt={props.name} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>

          <p>Origin: {props.origin && props.origin.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
