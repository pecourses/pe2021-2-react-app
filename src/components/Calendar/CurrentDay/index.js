import { getDate, getDay } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';

const WEEK_DAYS = ['SANDAY', 'M...', 'T', 'W', 'T', 'F', 'S'];

function CurrentDay ({ currentDate }) {
  return (
    <section>
      <div>{WEEK_DAYS[getDay(currentDate)]}</div>
      <div>{getDate(currentDate)}</div>
    </section>
  );
}

CurrentDay.defaulProps = {
  currentDate: new Date(),
};

CurrentDay.propTypes = {
  // currentDate: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

export default CurrentDay;
