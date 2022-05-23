import { Component } from 'react';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }   
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentdidmount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>{
                this.setState(()=>{
                    return {monsters: users}
                },
                ()=>{
                    console.log(this.state);
                })
            })
    }

    onSearchChange = (event)=>{
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {return { searchField }});
    }

    render() {
        const { monsters, searchField } = this.state;
        const {onSearchChange} = this;
        const filterdMonsters = monsters.filter((monster)=>{
            if(monster.name.toLowerCase().includes(searchField)){
                return monster;
            }
        })
        return (
            <div className="App">
                <input className="search-box" type="search" placeholder="Search monsters" onChange={onSearchChange}/>
                { 
                    
                    filterdMonsters.map((monster, i) => {
                        return <div id={i} key={i}>
                            <h1>{monster.name}</h1>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default App;
