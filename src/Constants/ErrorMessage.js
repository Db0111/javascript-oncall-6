const ErrorMessage = Object.freeze({
  OUT_OF_RANGE: `[ERROR] 유효하지 않은 월의 범위 입니다. 다시 입력해 주세요.`,
  NOT_A_NUM: `[ERROR] 월은 문자일 수 없습니다. 다시 입력해주세요.`,
  INVALID_STARTDAY: `[ERROR] 유효하지 않은 시작 요일입니다. 다시 입력해 주세요.`,
  INVALID_VALUE: `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`,
  TOO_LONG_NAME: `[ERROR] 닉네임은 최대 5자까지 가능합니다. 다시 입력해주세요.`,
  TOO_SMALL_WORKERS: `[ERROR] 최소 5명 이상의 근무자를 입력해주셔야 합니다. 다시 입력해주세요.`,
  TOO_MANY_WORKERS: `[ERROR] 최대 35명까지의 근무자만 입력 가능합니다. 다시 입력해 주세요`,
  DUPLICATED_WORKERS: `[ERROR] 비상 근무자는 평일 순번에 1회, 휴일 순번에 1회 편성되어야 합니다. 다시 입력해주세요.`,
  EMPTY_NAME: `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`,
});
export default ErrorMessage;
