const PropSearch = (props) => {
    return (
        <div>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                value={props.search}
                onChange={props.onSearch}
            />
        </div>
    );
};

export default PropSearch;
