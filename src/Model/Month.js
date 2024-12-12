import { holidaysByMonth, monthData } from '../data/Calendar.js';

class Month {
  constructor(month, startDay) {
    this.month = monthData[month];
    this.startDay = startDay;
    this.calendar = {};
  }

  makeCalendar(month, startDay) {
    const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
    const holidays = this.getHolidaysForMonth(month);

    this.calendar = {};
    let currentDayIndex = daysOfWeek.indexOf(startDay);

    for (let date = 1; date <= this.month; date++) {
      const currentDay = daysOfWeek[currentDayIndex];
      const holiday = holidays.find(holiday => holiday.date === date);
      const isWeekend = currentDay === '토' || currentDay === '일';

      let holidayName = null;
      if (holiday) {
        holidayName = holiday.name; // 법정 공휴일이 있으면 이름 할당
      }

      this.calendar[date] = {
        date: currentDay,
        isHoliday: isWeekend || !!holiday,
        holidayName,
        isWeekend, // 주말 여부
      };

      currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length; // 요일 순환
    }
    return this.calendar;
  }

  getHolidaysForMonth(month) {
    return holidaysByMonth[month] || [];
  }
}

export default Month;
