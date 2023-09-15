/**
 * Generate a unique id based on timestamp and random number
 *
 * @returns {string} Unique user id
 */
export default function UniqueId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  );
}
