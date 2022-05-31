import { Component } from "react";


import ListElement from "../list-element/list-element.component";
import './card-list.styles.css';

export default class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
        <div className="card-list">
            {monsters.map(monster => {
                return <ListElement key={monster.id} monster={monster}/>
            })}
        </div>);
    }
}
