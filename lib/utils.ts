// get todays week, return it in the format 'week from 01-01 to 07-01'
export const getWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay() || 7;
  const first = today.getDate() - dayOfWeek + 1;
  const last = first + 6;

  const formatOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
  };

  const firstDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    first
  ).toLocaleDateString("fr-FR", formatOptions);
  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    last
  ).toLocaleDateString("fr-FR", formatOptions);

  return `Semaine du ${firstDay} au ${lastDay}`;
};
