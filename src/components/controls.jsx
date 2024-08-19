function Controls({startStop , isRuning, reset, lap}) {
    return (          
        <div className="text-3xl font-bold">
            <section className="flex flex-col gap-3">
                <button 
                    onClick={reset}
                    className="reset bg-blue-900 
                    hover:bg-blue-800 text-white 
                    font-bold py-2 px-4 rounded 
                    w-[160px]">
                        Reset
                </button>
                <button 
                    onClick={startStop} 
                    className="start-stop 
                    bg-blue-900 hover:bg-blue-800 text-white 
                    font-bold py-2 px-4 
                    rounded">
                        {isRuning? 'Stop':'Start'}
                </button>
                <button 
                    onClick={lap}
                    className="start-stop 
                    bg-blue-900 hover:bg-blue-800 text-white 
                    font-bold py-2 px-4 
                    rounded">
                        Lap
                </button>
            </section>
        </div>
    );
  }
  
  export default Controls;