import { Component } from "react";

export default class CardList extends Component {
    render() {
        console.log(this.props.monsters); 
        console.log('render from card list'); 
        const {monsters} = this.props;
        return (
        <div>
            {
                monsters.map(monster => {
                    return <h1 key={monster.id}>{monster.name}</h1>
                })
            }
        </div>);
    }
}
