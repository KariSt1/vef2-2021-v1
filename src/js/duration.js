/**
 * Breytir lengd myndbands á formið mm:ss
 * þar sem mm er mínútufjöldi og ss er sekúndufjöldi
 *
 * @param {number} duration er lengd myndbands í sekúndum
 * @returns {string} strengur á forminu mm:ss
 */
export default function videoDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = (minutes === 0 ? duration : (duration - minutes * 60));
  let durationString = '';
  if (minutes < 10) {
    durationString += `0${minutes}:`;
  } else {
    durationString += `${minutes}:`;
  }
  if (seconds < 10) {
    durationString += `0${seconds}`;
  } else {
    durationString += seconds;
  }
  return durationString;
}
