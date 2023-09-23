import { Listify } from "./components";
import AsynCounter from "./components/AsynCounter";
import Search from "./components/Search";
import { language } from "./constants";

const App = () => {
    return (
        <div>
            <section>
                <div className='flex flex-col justify-center items-center rounded-lg border-yellow-400 bg-pallet1-navy p-6 m-4'>
                    <h1 className='text-8xl text-pallet1-matt'>
                        React on the Run
                    </h1>
                    <p className='text-2xl text-slate-400'>
                        Learn the best framework for your web application.
                    </p>
                </div>
            </section>
            <section>
                <div className='card'>
                    <Listify list={language} />
                </div>
            </section>
            <div className='flex flex-auto'>
                <Search />
                <AsynCounter />
            </div>
        </div>
    );
};

export default App;
