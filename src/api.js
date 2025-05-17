const seededRandom = function (seed) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.75) result.push(i + ':00');
    if (random() < 0.75) result.push(i + ':30');
  }

  // Guarantee at least 3 unique time slots
  if (result.length < 3) {
    const fallback = ['17:00', '18:30', '20:00'];
    result = [...new Set([...result, ...fallback])].slice(0, 5);
  }

  return result;
};


export const submitAPI = function (formData) {
    return true; // Simulated successful submission
};
