import { useState } from "react";

const Search = () => {
    // to dynamically change the value using useState hook
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

    return (
        <div className='card m-4'>
            <label htmlFor='search'>Search: </label>
            <input id='search' type='text' onChange={handleChange} />

            <p>
                Searching for <strong>{searchTerm}</strong>
            </p>
        </div>
    );
};

export default Search;
