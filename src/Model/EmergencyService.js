import splitInput from '../utils/splitInput.js';
import InputValidator from '../utils/InputValidator.js';

class EmergencyService {
  static weekDayIndex = 0;
  static weekEndIndex = 0;

  static createMonthData(userInput) {
    const month = Number(splitInput(userInput)[0]);
    const startDay = splitInput(userInput)[1];
    InputValidator.isValid(month, startDay);
    return { month, startDay };
  }

  static arrangeSchedule(weekDayWorkerList, weekEndWorkerList, calendar) {
    let workerSchedule = {};
    for (let date in calendar) {
      const dayData = calendar[date];
      console.log(dayData);
      let worker = null;
      if (!dayData.isHoliday && !dayData.isWeekend) {
        this.arrangeWeekday(date, dayData, worker, weekDayWorkerList, workerSchedule);
      }
      if (dayData.isWeekend || dayData.isHoliday) {
        this.arrangeWeekend(date, dayData, worker, weekEndWorkerList, workerSchedule);
      }
    }
    return workerSchedule;
  }

  static arrangeWeekday(day, dayData, worker, weekDayWorkerList, workerSchedule) {
    worker = weekDayWorkerList[this.weekDayIndex];
    if (workerSchedule[day - 1] && workerSchedule[day - 1].worker === worker) {
      this.weekDayIndex = (this.weekDayIndex + 1) % weekDayWorkerList.length;
      worker = weekDayWorkerList[this.weekDayIndex];
    }
    workerSchedule[day] = { day: dayData.date, worker };
    this.weekDayIndex = (this.weekDayIndex + 1) % weekDayWorkerList.length;
  }

  static arrangeWeekend(day, dayData, worker, weekEndWorkerList, workerSchedule) {
    worker = weekEndWorkerList[this.weekEndIndex];
    // 연속 근무 방지 처리
    if (workerSchedule[day - 1] && workerSchedule[day - 1].worker === worker) {
      // 순서 변경
      this.weekEndIndex = (this.weekEndIndex + 1) % weekEndWorkerList.length;
      worker = weekEndWorkerList[this.weekEndIndex];
    }
    workerSchedule[day] = { day: dayData.date, worker };
    this.weekEndIndex = (this.weekEndIndex + 1) % weekEndWorkerList.length;
  }
}

export default EmergencyService;
