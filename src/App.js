import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: []
        }
    }

    componentWillMount() {
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
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Hi
                    </p>
                    { 
                        this.state.monsters.map((monster, i) => {
                            return <div id={i} key={i}>
                                <h1>{monster.name}</h1>
                            </div>
                        })
                    }
                </header>
            </div>
        );
    }
}

export default App;
