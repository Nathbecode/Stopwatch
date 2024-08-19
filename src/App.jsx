import { useState , useEffect} from "react";
import Display from "./components/display";
import Controls from "./components/controls";

function App() {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const [laps , setLaps] = useState([]);

  function handleReset () {
    setTime(0);
    setLaps([]);
  }

  function handleLap () {
    setLaps([...laps, time]);
  }

  function handleStartStop () {
    setIsRuning(!isRuning);
  }

  useEffect(()=>{
    let interval;

    if(isRuning){
      interval = setInterval(()=>{setTime(time + 1)},10)
    }

    return () => clearInterval(interval);
  },[time, isRuning])

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="h-screen flex items-center justify-center mx-auto text-white bg-gray-800 flex-col gap-5">
          <h1 className="text-3xl">React Stop-watch!</h1>
          <Display time={time}/>
          <Controls 
            isRuning={isRuning}
            startStop={handleStartStop}
            reset={handleReset}
            lap={handleLap}/> 
          <div className="text-lg text-green-600">
            <p>{isRuning? 'Runing' : 'Stopped'}</p>
          </div>
          <div className="text-white text-sm">
            <ul>
              {laps.map((lapTime, index) => (
                <li key={index} className="mb-2 ">
                  Lap {index + 1}: <Display time={lapTime} small={true}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
