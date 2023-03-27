import { contents } from "../contents/Contents";

export class PostServices {
  static findUniqueTags() {
    const tags = contents.map((content) => content.tags).flat();

    const uniqueStrings: { [key: string]: boolean } = {};

    for (const str of tags) {
      uniqueStrings[str] = true;
    }

    return Object.keys(uniqueStrings);
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
