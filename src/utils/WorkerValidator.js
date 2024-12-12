import ErrorMessage from '../Constants/ErrorMessage.js';

class WorkerValidator {
  static isValid(workerList) {
    if (
      this.isValidNameLength(workerList) &&
      this.isTooSmallWorkers(workerList) &&
      this.isTooManyWorkers(workerList) &&
      this.duplicatedWorker(workerList) &&
      this.emptyWorker(workerList)
    ) {
      return workerList;
    }
  }

  static isValidNameLength(workerList) {
    if (workerList.some(name => name.length > 5)) {
      throw new Error(ErrorMessage.TOO_LONG_NAME);
    }
    return true;
  }

  static isTooSmallWorkers(workerList) {
    if (workerList.length < 5) {
      throw new Error(ErrorMessage.TOO_SMALL_WORKERS);
    }
    return true;
  }

  static isTooManyWorkers(workerList) {
    if (workerList.length > 35) {
      throw new Error(ErrorMessage.TOO_MANY_WORKERS);
    }
    return true;
  }

  static duplicatedWorker(workerList) {
    if (workerList.length !== new Set(workerList).size) {
      throw new Error(ErrorMessage.DUPLICATED_WORKERS);
    }
    return true;
  }

  static emptyWorker(workerList) {
    if (workerList.some(name => name === '')) {
      throw new Error(ErrorMessage.EMPTY_NAME);
    }
    return true;
  }
}
export default WorkerValidator;
