const Listify = ({ language }) => {
    return (
        <div>
            <h1>List of Programming Language</h1>
            <ul>
                {language.map((lang) => (
                    <li key={lang.objectID}>
                        <a href={lang.url}>{lang.title}</a> by {lang.author} |{" "}
                        {lang.points} points | {lang.num_comments} comments
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listify;
