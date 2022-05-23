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

    render() {
        const filterdMonsters = this.state.monsters.filter((monster)=>{
            if(monster.name.toLowerCase().includes(this.state.searchField)){
                return monster;
            }
        })
        return (
            <div className="App">
                <input className="search-box" type="search" placeholder="Search monsters" onChange={(event)=>{
                    const searchField = event.target.value.toLowerCase();
                    this.setState(() => {return { searchField }});
                }}/>
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
