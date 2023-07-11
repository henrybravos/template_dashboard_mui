// utils.js
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    hour: "numeric",
    minute: "numeric",
  });
}

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
