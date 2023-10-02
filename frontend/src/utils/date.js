const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function formatPreviewDate(date, showInterval = false) {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
    0,
    0,
    0,
    0
  );
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6,
    0,
    0,
    0,
    0
  );
  const thisYear = new Date(today.getFullYear(), 0, 1);
  let intervalStr = '';
  if (showInterval) {
    intervalStr = getTimeInterval(date);
  }

  if (date >= today) {
    return (
      date.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
      }) + intervalStr
    );
  } else if (date >= yesterday) {
    return 'Yesterday';
  } else if (date >= lastWeek) {
    return weekdays[date.getDay()] + intervalStr;
  } else if (date >= thisYear) {
    return (
      date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      }) + intervalStr
    );
  } else {
    return (
      date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }) + intervalStr
    );
  }
}

export function getTimeInterval(date) {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return generateIntervalString(Math.floor(interval), 'year');
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return generateIntervalString(Math.floor(interval), 'month');
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return generateIntervalString(Math.floor(interval), 'day');
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return generateIntervalString(Math.floor(interval), 'hour');
  }
  interval = seconds / 60;
  if (interval > 1) {
    return generateIntervalString(Math.floor(interval), 'minute');
  }

  return generateIntervalString(Math.floor(interval), 'second');
}

const generateIntervalString = (time, unit) => {
  return ' (' + time + ` ${time > 1 ? `${unit}s` : unit} ago)`;
};


export function getTimePeriod(seconds) {
    const d = Math.floor(seconds / (3600*24));
    const h = Math.floor(seconds % (3600*24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    const days = d > 0 ? d + (d == 1 ? ' day, ' : ' days') : '';
    const hours = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const minutes = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const secs = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    // TODO: this could be cleaner
    return [
      [d,h,m,s],
      [days,hours,minutes,secs]
    ]
}

