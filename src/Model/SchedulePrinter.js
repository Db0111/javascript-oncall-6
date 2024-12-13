class SchedulePrinter {
  static printSchedule(month, schedule) {
    return Object.entries(schedule)
      .map(([date, dateInfo]) => {
        let holidayLabel = '';
        if (dateInfo.isHoliday === true && dateInfo.isWeekend === false) {
          holidayLabel = '(휴일)';
        }
        return `${month}월 ${date}일 ${dateInfo.day}${holidayLabel} ${dateInfo.worker}`;
      })
      .join('\n');
  }
}

export default SchedulePrinter;
