const monthYear = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  year: 'numeric',
  month: 'short',
});

const shortDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
});

const parisTime = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  hour12: true,
  minute: '2-digit',
  timeZone: 'Europe/Paris',
});

export function toMonthYear(date: Date) {
  return monthYear.format(date);
}

export function toShortDate(date: Date) {
  return shortDate.format(date);
}

export function toParisTime(date: Date) {
  return parisTime.format(date).replace(' ', '').toLowerCase();
}
