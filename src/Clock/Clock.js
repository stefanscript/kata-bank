class Clock {
  today() {
    const today = this.todayAsDate();
    return `${this.getDayAsString(today)}/${this.getMonthAsString(
      today
    )}/${today.getFullYear()}`;
  }

  getMonthAsString(today) {
    let month = today.getMonth() + 1;
    return month < 10 ? "0" + month : month;
  }

  getDayAsString(today) {
    let date = today.getDate();
    return date < 10 ? "0" + date : date;
  }

  todayAsDate() {
    return new Date();
  }
}

export default Clock;
