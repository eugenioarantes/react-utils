import { format, formatDistance, formatDistanceToNow, subMinutes } from 'date-fns';

export function getTimePassed(date: string | Date): string {
  const distanceDate = typeof date === 'string' ? new Date(date) : date;

  const timePassed = formatDistance(distanceDate, new Date(), {
    addSuffix: true,
  });

  return timePassed;
}

export function getLenghtyDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(date);
}

export function getLocalDateString(date: Date): string {
  const timezoneOffset = new Date().getTimezoneOffset();

  // this makes sure we can reference 'expected dates' and such properly
  // on our DB and show them independant of TZ on frontend
  return subMinutes(date, timezoneOffset).toISOString().replace('Z', '');
}

export function getTimestampDisplay(timestamp: string): string {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

export function getDateDisplay(timestamp: string): string {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'short',
  }).format(date);
}

export const dateDistanceToNow = (date: string): string => {
  const publishedAtDistanceToNow = formatDistanceToNow(Date.parse(date), {
    addSuffix: true,
  });

  return publishedAtDistanceToNow;
};

export const formatPublishedAtDate = (date: string): string => {
  const publishedAtDateFormatted = format(Date.parse(date), "LLLL d, y '-' HH:mm", {});

  return publishedAtDateFormatted;
};
