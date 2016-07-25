import React from "react";
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAF0k00HNVntnqGQhax1auOh4E0dHPH4BY";

//create a new component. components produce html. When a component is created it is a class/type of component ie many APP instances can be rendered

const App = () => {
    return (
    <div>
      <SearchBar />
    </div>
    )
}

//take components generated html and render on page(in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));