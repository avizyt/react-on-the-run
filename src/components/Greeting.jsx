const welcome = {
    greeting: "Hey",
    title: "React",
};

const Greeting = () => {
    return (
        <div className=''>
            <h1 className='text-xl text-orange-500'>
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
