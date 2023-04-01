import { contents } from "../contents/Contents";

export class GeneralServices {
  static findUniqueTags() {
    const tags = contents.map((content) => content.tags).flat();

    const uniqueStrings: { [key: string]: boolean } = {};

    for (const str of tags) {
      uniqueStrings[str] = true;
    }

    return Object.keys(uniqueStrings);
  }

  static generateHashtags(tagNameList: string[]) {
    return tagNameList
      .map(
        (tag: string) =>
          "#" +
          tag
            .toLowerCase()
            .replace(/\s+/g, "") // Remove whitespaces
            .replace(/ş/g, "s") // Replace 'ş' with 's'
            .replace(/ğ/g, "g") // Replace 'ğ' with 'g'
            .replace(/ö/g, "o") // Replace 'ö' with 'o'
            .replace(/ç/g, "c") // Replace 'ç' with 'c'
            .replace(/ü/g, "u") // Replace 'ü' with 'u'
            .replace(/ı/g, "i") // Replace 'ü' with 'u'
      )
      .join(", ");
  }

  static findTherapyByPath(path: string) {
    return contents.find((content) => content.pathName === path);
  }

  static dateFormatByLocale(date: Date, locale: string = "en") {
    const years = new Intl.DateTimeFormat(locale, { year: "numeric" }).format(
      date
    );
    const month = new Intl.DateTimeFormat(locale, { month: "short" }).format(
      date
    );
    const days = new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(
      date
    );

    return `${days} ${month}, ${years}`;
  }
}
