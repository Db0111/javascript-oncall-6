import Controller from './Controller/Controller.js';

class App {
  async run() {
    await Controller.arrangeEmergencyWork();
  }
}

export default App;
