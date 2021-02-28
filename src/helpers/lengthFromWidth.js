function lengthFromWidth(width) {
    let length;
    switch (true) {
      case width > 920:
        length = 9;
        break;
      case width <= 920 && width > 910:
        length = 8;
        break;
      case width <= 910 && width > 822:
        length = 7;
        break;
      case width <= 822 && width > 734:
        length = 6;
        break;
      case width <= 734 && width > 646:
        length = 5;
        break;
      case width <= 646 && width > 558:
        length = 4;
        break;
      case width <= 558 && width > 510:
        length = 3;
        break;
      case width <= 510:
        length = 0;
        break;
      default:
        break;
    }
    return length;
  }

  export default lengthFromWidth