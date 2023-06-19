// DEFAULT FORMAT YYYY-DD-MM

const addPadding = (value: number): string => {
  return value.toString().padStart(2, '0');
}

export const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${addPadding(date.getMonth() + 1)}-${addPadding(date.getDate())}`;
}

export const formatDateString = (dateString: string) => formatDate(new Date(dateString));
