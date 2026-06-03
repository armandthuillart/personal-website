const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  year: 'numeric',
  month: 'short',
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
  day: 'numeric',
});

const parisTimeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  hour12: true,
  minute: '2-digit',
  timeZone: 'Europe/Paris',
});

export function toMonthYear(date: Date) {
  return monthYearFormatter.format(date);
}

export function toShortDate(date: Date) {
  return shortDateFormatter.format(date);
}

export function toParisTime(date: Date) {
  return parisTimeFormatter.format(date).replace(' ', '').toLowerCase();
}
