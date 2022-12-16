function stopwatch() {
    let startTime, endTime, running, duration = 0;  //private variables
    this.start = function() {
        if(running){
            throw new Error("Stopwatch is already running")
        }

        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!running) {
            throw new Error('Stopwatch is not started');
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        }
    };

    this.reset = function() {
        this.startTime = null;
        this.endTime = null;
        running =false;
        duration = 0;
    };
}