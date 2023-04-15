import bireysel from "./bireysel.webp";
import cift from "./cift.webp";
import cinsel from "./cinsel.webp";
import cocuk from "./cocuk.webp";
import kurumsal from "./kurumsal.webp";
import online from "./online.webp";
import testler from "./testler.webp";

export const getCardImages = (url: string) => {
  switch (url) {
    case "bireysel":
      return bireysel;
    case "cift":
      return cift;
    case "cocuk":
      return cocuk;
    case "cinsel":
      return cinsel;
    case "online":
      return online;
    case "testler":
      return testler;
    case "kurumsal":
      return kurumsal;
    default:
      return "";
  }
};
