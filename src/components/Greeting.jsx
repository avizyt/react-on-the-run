const welcome = {
    greeting: "Hey",
    title: "React",
};

const Greeting = () => {
    return (
        <div>
            <h1 className='text-xl'>
                {welcome.greeting} {welcome.title}
            </h1>
            <label htmlFor='search' className='text-lg font-bold'>
                Search
            </label>{" "}
            <input type='search' className='rounded-lg' />
        </div>
    );
};

export default Greeting;
