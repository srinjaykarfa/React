const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="Card Image"
      />
      <h2>{props.user}, {props.age}</h2>
      <p>Frontend Developer</p>
      <button>Learn More</button>
    </div>
  );
};

export default Card;
