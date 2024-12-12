import { regex } from '../Constants/Constants.js';
import ErrorMessage from '../Constants/ErrorMessage.js';
import { daysOfWeek } from '../data/Calendar.js';

class InputValidator {
  static isValid(month, startDay) {
    if (this.isOutOfRange(month) && this.isNotANumber(month) && this.isInvalidStartDay(startDay) && this.isEmpty(month, startDay)) {
      return { month, startDay };
    }
  }

  static isOutOfRange(month) {
    if (month < 1 || month > 13) {
      throw new Error(ErrorMessage.OUT_OF_RANGE);
    }
    return true;
  }

  static isNotANumber(month) {
    if (!regex.test(month)) {
      throw new Error(ErrorMessage.NOT_A_NUM);
    }
    return true;
  }

  static isInvalidStartDay(startDay) {
    if (!daysOfWeek.includes(startDay)) {
      throw new Error(ErrorMessage.INVALID_STARTDAY);
    }
    return true;
  }

  static isEmpty(month, startDay) {
    if (month === '' || startDay === '') {
      throw new Error(ErrorMessage.INVALID_VALUE);
    }
    return true;
  }
}
export default InputValidator;
