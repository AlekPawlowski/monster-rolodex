import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }   
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>{
                this.setState(()=>{
                    return {monsters: users}
                })
            })
    }

    onSearchChange = (event)=>{
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {return { searchField }});
    }

    render() {
        const { monsters, searchField } = this.state;
        const filterdMonsters = monsters.filter((monster) => {
            if(monster.name.toLowerCase().includes(searchField)){
                return monster;
            }
        })
        return (
            <div className="App">
                <input className="search-box" type="search" placeholder="Search monsters" onChange={this.onSearchChange}/>
                <CardList monsters={filterdMonsters}/>
            </div>
        );
    }
}

export default App;
