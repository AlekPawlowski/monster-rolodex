import { Component  } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: {
                firstName: 'jhon',
                lastName: 'Doe'
            },
            company: 'ZTm'
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Hi {this.state.name.firstName} {this.state.name.lastName}, i work at {this.state.company}
                    </p>
                    <button onClick={()=>{
                        this.setState({name: {
                            firstName: 'meh',
                            lastName: 'last'
                        }, company: 'testy'}); 
                        console.log(this.state)
                    }}>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
