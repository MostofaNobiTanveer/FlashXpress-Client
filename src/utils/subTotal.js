export function calcSubTotal(type, district, weight) {
  let total;
  if (district === "Dhaka") {
    if (type === "Document") total = 70;
    if (type === "Laptop") total = 300;
    if (type === "Mobile") total = 115;
    if (type === "Parcel") {
      switch (weight) {
        case "1":
          total = 100;
          break;
        case "2":
          total = 130;
          break;
        case "3":
          total = 160;
          break;
        case "4":
          total = 190;
          break;
        case "5":
          total = 220;
          break;
        case "6":
          total = 250;
          break;
        case "7":
          total = 280;
          break;
        case "8":
          total = 310;
          break;
        case "9":
          total = 340;
          break;
        case "10":
          total = 370;
          break;
        default:
          total = 100;
          break;
      }
    }
  } else if (district !== "Dhaka") {
    if (type === "Document") total = 150;
    if (type === "Laptop") total = 600;
    if (type === "Mobile") total = 230;
    if (type === "Parcel") {
      switch (weight) {
        case "1":
          total = 200;
          break;
        case "2":
          total = 230;
          break;
        case "3":
          total = 260;
          break;
        case "4":
          total = 290;
          break;
        case "5":
          total = 320;
          break;
        case "6":
          total = 350;
          break;
        case "7":
          total = 380;
          break;
        case "8":
          total = 410;
          break;
        case "9":
          total = 440;
          break;
        case "10":
          total = 470;
          break;
        default:
          total = 200;
          break;
      }
    }
  }
  return total;
}
