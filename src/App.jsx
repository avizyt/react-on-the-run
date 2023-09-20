import { Greeting } from "./components";

const App = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center rounded-lg border-yellow-400 bg-pallet1-navy p-6 m-4'>
                <h1 className='text-8xl text-pallet1-matt'>React on the Run</h1>
                <p className='text-2xl text-slate-400'>
                    Learn the best framework for your web application.
                </p>
            </div>
            <div className='flex flex-1'>
                <div className='card mx-4 px-8'>
                    <Greeting />
                </div>
            </div>
        </div>
    );
};

export default App;
