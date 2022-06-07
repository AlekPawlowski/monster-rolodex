import ListElement from "../list-element/list-element.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <ListElement key={monster.id} monster={monster} />;
            })}
        </div>
    );
};

export default CardList;
