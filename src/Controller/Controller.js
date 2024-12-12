import IOMessage from '../Constants/IOMessage.js';
import EmergencyService from '../Model/EmergencyService.js';
import Month from '../Model/Month.js';
import { InputView } from '../View/inputView.js';
import { OutputView } from '../View/outputView.js';
import InputValidator from '../utils/InputValidator.js';
import WorkerValidator from '../utils/WorkerValidator.js';
import splitInput from '../utils/splitInput.js';

class Controller {
  static async arrangeEmergencyWork() {
    const monthInput = await this.getMonthStartDay();
    const { month, startDay } = EmergencyService.createMonthData(monthInput);
    const monthInstance = new Month(month, startDay);
    const calendar = monthInstance.makeCalendar(month, startDay);
    const { weekDayWorkerList, weekEndWorkerList } = await this.getWorkerList();
    const schedule = EmergencyService.arrangeSchedule(weekDayWorkerList, weekEndWorkerList, calendar);
    OutputView.printMessage(schedule);

    // 휴일 비상근무 순번 입력 받기
    // 편성
    // 편성 결과 출력
  }

  static async getMonthStartDay() {
    while (true) {
      try {
        const userInput = await InputView.getInput(IOMessage.getMonthStartDay);
        return userInput;
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }
  }

  static async getWorkerList() {
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
export default Controller;
