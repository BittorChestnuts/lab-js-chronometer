class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) {
        printTimeCallback()
      }
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60
    return Math.trunc(minutes)
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime
    if (this.currentTime === 0) {
      return 0
    }
    return seconds % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let result = 0
    value = value.toString()
    if (value.length === 1) {
      result = "0" + value
    }
    else if (value.length === 2) {
      result = value

    }

    return result

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
let minutes = this.computeTwoDigitNumber(this.getMinutes())
let seconds = this.computeTwoDigitNumber(this.getSeconds())
return (`${minutes}:${seconds}`)
  }
}
