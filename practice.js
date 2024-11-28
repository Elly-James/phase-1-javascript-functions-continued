const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);

  console.log(array[1]);