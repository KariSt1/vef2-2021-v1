/**
 * Fall sem athugar hversu gamalt tiltekið myndband er.
 *
 * @param {number} age í millisekúndum síðan 1. janúar 1970
 * @returns {string} strengur sem segir til um hve gamalt myndband er
 */
export default function videoAge(age) {
  const currentDate = Date.now();
  const uploadDate = new Date(age);
  const difference = currentDate - uploadDate;

  if (difference > 1000 * 60 * 60 * 24 * 365 * 2) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 365))} árum síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 365) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 365))} ári síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 30 * 2) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 30))} mánuðum síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 30) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 30))} mánuði síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 7 * 2) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 7))} vikum síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 7) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24 * 7))} viku síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24 * 2) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24))} dögum síðan`;
  }
  if (difference > 1000 * 60 * 60 * 24) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60 * 24))} degi síðan`;
  }
  if (difference > 1000 * 60 * 60 * 2) {
    return `Fyrir ${Math.floor(difference / (1000 * 60 * 60))} klukkustundum síðan`;
  }
  return `Fyrir ${Math.floor(difference / (1000 * 60 * 60))} klukkustund síðan`;
}
