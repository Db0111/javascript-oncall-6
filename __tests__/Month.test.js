import Month from '../src/Model/Month.js';

describe('Month Class', () => {
  let monthInstance;

  beforeEach(() => {
    monthInstance = new Month(4, '토'); // 4월, 시작 요일: 토요일
  });

  test('4월 달력을 올바르게 만든다', () => {
    const expectedCalendar = {
      1: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      2: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      3: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      4: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      5: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      6: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      7: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      8: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      9: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      10: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      11: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      12: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      13: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      14: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      15: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      16: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      17: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      18: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      19: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      20: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      21: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      22: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      23: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      24: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      25: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      26: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      27: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      28: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      29: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      30: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
    };

    const calendar = monthInstance.makeCalendar(4, '토');
    expect(calendar).toEqual(expectedCalendar);
  });

  test('공휴일 정상적으로 데이터 가져오고 있는지', () => {
    monthInstance = new Month(5, '월');
    const expectedCalendarWithHolidays = {
      1: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      2: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      3: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      4: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      5: { date: '금', isHoliday: true, holidayName: '어린이날', isWeekend: false },
      6: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      7: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      8: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      9: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      10: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      11: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      12: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      13: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      14: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      15: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      16: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      17: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      18: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      19: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      20: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      21: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      22: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      23: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      24: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
      25: { date: '목', isHoliday: false, holidayName: null, isWeekend: false },
      26: { date: '금', isHoliday: false, holidayName: null, isWeekend: false },
      27: { date: '토', isHoliday: true, holidayName: null, isWeekend: true },
      28: { date: '일', isHoliday: true, holidayName: null, isWeekend: true },
      29: { date: '월', isHoliday: false, holidayName: null, isWeekend: false },
      30: { date: '화', isHoliday: false, holidayName: null, isWeekend: false },
      31: { date: '수', isHoliday: false, holidayName: null, isWeekend: false },
    };

    const calendar = monthInstance.makeCalendar(5, '월');
    expect(calendar).toEqual(expectedCalendarWithHolidays);
  });
});
