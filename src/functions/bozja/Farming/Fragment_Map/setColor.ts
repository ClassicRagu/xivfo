export const setColor = (level: number | string) => {
    switch (level) {
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "red";
      case 4:
        return "purple";
      case 5:
        return "black";
      case "Critical Engagement":
        return "white";
      default:
        return "blue";
    }
  };