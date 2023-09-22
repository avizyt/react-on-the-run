import { Listify } from "./components";
import { language } from "./constants";

const App = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center rounded-lg border-yellow-400 bg-pallet1-navy p-6 m-4'>
                <h1 className='text-8xl text-pallet1-matt'>React on the Run</h1>
                <p className='text-2xl text-slate-400'>
                    Learn the best framework for your web application.
                </p>
            </div>
            <div className='card'>
                <Listify language={language} />
            </div>
        </div>
    );
};

export default App;
