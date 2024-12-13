import IOMessage from '../Constants/IOMessage.js';
import EmergencyService from '../Model/EmergencyService.js';
import Month from '../Model/Month.js';
import SchedulePrinter from '../Model/SchedulePrinter.js';
import { InputView } from '../View/inputView.js';
import { OutputView } from '../View/outputView.js';
import InputValidator from '../utils/InputValidator.js';
import WorkerValidator from '../utils/WorkerValidator.js';
import splitInput from '../utils/splitInput.js';

class Controller {
  static async arrangeEmergencyWork() {
    const { month, startDay } = await this.getMonthStartDay();
    const monthInstance = new Month(month, startDay);
    const calendar = monthInstance.makeCalendar(month, startDay);
    const { weekDayWorkerList, weekEndWorkerList } = await this.getWorkerList();

    const emergencyService = new EmergencyService();

    const schedule = SchedulePrinter.printSchedule(month, emergencyService.arrangeSchedule(weekDayWorkerList, weekEndWorkerList, calendar));

    OutputView.printMessage(schedule);
  }

  static async getMonthStartDay() {
    while (true) {
      try {
        const userInput = await InputView.getInput(IOMessage.getMonthStartDay);
        const month = Number(splitInput(userInput)[0]);
        const startDay = splitInput(userInput)[1];
        InputValidator.isValid(month, startDay);
        return { month, startDay };
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }
  }

  static async getWorkerList() {
    while (true) {
      try {
        const getWeekDayWorker = await InputView.getInput(IOMessage.weekDayWorkOrder);
        const weekDayWorkerList = WorkerValidator.isValid(splitInput(getWeekDayWorker));
        const getWeekendWorker = await InputView.getInput(IOMessage.weekEndWorkOrder);
        const weekEndWorkerList = WorkerValidator.isValid(splitInput(getWeekendWorker));
        return { weekDayWorkerList, weekEndWorkerList };
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }
  }
}
export default Controller;
