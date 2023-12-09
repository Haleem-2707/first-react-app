import "./App.css";

function Card(props) {
  return (
    <div className="cards">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
