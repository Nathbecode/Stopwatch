function Display({ time, small}) {
    // Function to format the time in centiseconds
    function formatTime(timeInCentiseconds) {
      const totalSeconds = Math.floor(timeInCentiseconds / 100);
      const centiseconds = timeInCentiseconds % 100;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60; 
  
      return {
        minutes,
        seconds,
        centiseconds
      };
    }
  
    // Format the time only once and destructure the result
    const { minutes, seconds, centiseconds } = formatTime(time);
  
    return (
        <div className={`flex items-center space-x-1 ${small ? 'text-sm' : 'text-3xl'}`}>
          <div className={`minutes flex flex-col items-center ${small ? 'text-xl' : 'text-6xl'}`}>
            <span className="number font-bold">
              {String(minutes).padStart(2, "0")}
            </span>
            <label htmlFor="minutes" className={`text-sm ${small ? 'text-xs' : 'text-xl'}`}>Minutes</label>
          </div>
          <span className={`${small ? 'text-lg' : 'text-5xl'}`}>:</span>
          <div className={`seconds flex flex-col items-center ${small ? 'text-xl' : 'text-6xl'}`}>
            <span className="number font-bold">
              {String(seconds).padStart(2, "0")}
            </span>
            <label htmlFor="seconds" className={`text-sm ${small ? 'text-xs' : 'text-xl'}`}>Seconds</label>
          </div>
          <span className={`${small ? 'text-lg' : 'text-5xl'}`}>:</span>
          <div className={`centiseconds flex flex-col items-center ${small ? 'text-xl' : 'text-6xl'}`}>
            <span className="number font-bold">
              {String(centiseconds).padStart(2, "0")}
            </span>
            <label htmlFor="centiseconds" className={`text-sm ${small ? 'text-xs' : 'text-xl'}`}>Centiseconds</label>
          </div>
        </div>
      );
  }
  
  export default Display;
  