import { useState } from 'react'

import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [searchField, setSearchField] = useState('');

    console.log({ searchField });
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder="Search monsters"
                className="search-box"
            />
            {/* <CardList monsters={filterdMonsters} /> */}
        </div>
    );
}

export default App;
