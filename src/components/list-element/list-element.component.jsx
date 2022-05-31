import { Component } from "react";

export default class ListElement extends Component {
    render() {
        const { name, email, id } = this.props.monster;
        return (
            <div key={id} className="card-container">
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}/?set=2`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}
