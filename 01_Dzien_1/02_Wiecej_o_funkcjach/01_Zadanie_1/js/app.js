function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
  }

  secondFunc();

  // console.log(otherInt); powienien byś w 8 linijce
}

firstFunc();