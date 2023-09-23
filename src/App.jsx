import { useState } from "react";
import { Listify } from "./components";
import AsynCounter from "./components/AsynCounter";
import Header from "./components/Header";
import PropCounter from "./components/PropCounter";
import PropSearch from "./components/PropSearch";
import Search from "./components/Search";
import { language } from "./constants";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

    const searchedStories = language.filter((lang) => {
        lang.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <Header />

            <div className='flex flex-auto'>
                <Search />
                <AsynCounter />
                <PropCounter />
            </div>
            <div className=''>
                <h1>My Hacker Stories</h1>
                <PropSearch onSearch={handleSearch} />
                <hr />
                <Listify list={searchedStories} />
            </div>
        </div>
    );
};

export default App;
