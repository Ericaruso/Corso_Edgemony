import "./Card.css";

const Card = ({ name, urlImage }) => {
    return (
        <div className="card">
            <h1>Hello, {name}!</h1>
        </div>
    );
};

export default Card;