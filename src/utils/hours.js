export const hours = [];
for (let i = 1; i <= 24; i++) {
  hours.push({
    value: ('0' + i).slice(-2),
    label: ('0' + i).slice(-2) + '시',
  });
}
