import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import Month from './Month';

class Calendar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      date: new Date(),
    };
  }

  render () {
    const { date, currentDate } = this.state;
    return (
      <article>
        <CurrentDay currentDate={currentDate} />
        <Month date={date} currentDate={currentDate} />
      </article>
    );
  }
}

export default Calendar;

// Calendar
//    CurrentDay
//    Month
//      [Week]
//        [Day]
