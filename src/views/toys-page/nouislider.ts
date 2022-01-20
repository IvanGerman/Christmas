export default () => {
  const amountSlider = document.querySelector('.amount-range-slider');
  const yearSlider = document.querySelector('.year-range-slider');
  // @ts-ignore
  noUiSlider.create(amountSlider, {
      start: [1, 12],
      connect: true,
      range: {
          min: 1,
          max: 12,
      },
      step: 1,
  });
  // @ts-ignore
  noUiSlider.create(yearSlider, {
    start: [1940, 2020],
    connect: true,
    range: {
        min: 1940,
        max: 2020,
    },
    step: 10,
});
};
