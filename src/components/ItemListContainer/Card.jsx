import './Card.css'

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="card colorCard text-center m-2" style={{ width: '16rem' }}>
      <img src={image} className="card-img-top imgCard" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text bodyCard">{description}</p>
        <button onClick={onButtonClick} className="btn btn-primary">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;