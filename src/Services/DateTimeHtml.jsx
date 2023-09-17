const DateTimeHtml = () => {
  function getDatebd(arg) {
    const rojAdd = " রোজ ";
    const esheAdd = { e: " ই", she: " শে" };
    const kalAdd = " কাল";
    const abodo = " বঙ্গাব্দ";
    const monthName = [
      "বৈশাখ", //0
      "জ্যৈষ্ঠ ", //1
      "আষাঢ় ", //2
      "শ্রাবণ ", //3
      "ভাদ্র", //4
      "আশ্বিন ", //5
      "কার্তিক ", //6
      "অগ্রহায়ণ ", //7
      "পৌষ ", //8
      "মাঘ", //9
      "ফাল্গুন ", //10
      "চৈত্র ", //11
    ];
    const dayName = [
      "শুক্রবার",
      "শনিবার",
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
    ];
    const session = ["গ্রীষ্ম", "বর্ষা", "শরৎ", "হেমন্ত", "শীত", "বসন্ত"];
    const numBd = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const convertNumber = (n) =>
      n
        .toString()
        .split("")
        .map((num) => numBd[num])
        .join("");
    const addEe = (n) => {
      let x, y;
      x = n >= 10 && n < 20 ? esheAdd.e : "";
      y = n >= 20 && n <= 31 ? esheAdd.she : "";
      return x || y ? y + x : "";
    };

    const getYear = (dmy) =>
      dmy.month <= 4 && dmy.date <= 13 ? dmy.year - 594 : dmy.year - 593;

    const getMonthDate = (d, m) => {
      switch (true) {
        case m == 1 && d <= 15: //
          m = 8;
          d = d + 14;
          break;
        case m == 1 && d > 15:
          m = 9;
          d = d - 15;
          break;
        case m == 2 && d <= 13: //
          m = 9;
          d = d + 16;
          break;
        case m == 2 && d > 13:
          m = 10;
          d = d - 13;
          break;
        case m == 3 && d <= 14: //
          m = 10;
          d = d + 16;
          break;
        case m == 3 && d > 14:
          m = 11;
          d = d - 14;
          break;
        case m == 4 && d <= 14: //
          m = 11;
          d = d + 16;
          break;
        case m == 4 && d > 14:
          m = 0;
          d = d - 14;
          break;
        case m == 5 && d <= 15: //
          m = 0;
          d = d + 16;
          break;
        case m == 5 && d > 15:
          m = 1;
          d = d - 15;
          break;
        case m == 6 && d <= 16: //
          m = 1;
          d = d + 15;
          break;
        case m == 6 && d > 16:
          m = 2;
          d = d - 16;
          break;
        case m == 7 && d <= 17: //
          m = 2;
          d = d + 14;
          break;
        case m == 7 && d > 17:
          m = 3;
          d = d - 17;
          break;
        case m == 8 && d <= 18: //
          m = 3;
          d = d + 13;
          break;
        case m == 8 && d > 18:
          m = 4;
          d = d - 18;
          break;
        case m == 9 && d <= 18: //
          m = 4;
          d = d + 13;
          break;
        case m == 9 && d > 18:
          m = 5;
          d = d - 18;
          break;
        case m == 10 && d <= 18: //
          m = 5;
          d = d + 12;
          break;
        case m == 10 && d > 18:
          m = 6;
          d = d - 18;
          break;
        case m == 11 && d <= 17: //
          m = 6;
          d = d + 13;
          break;
        case m == 11 && d > 17:
          m = 7;
          d = d - 17;
          break;
        case m == 12 && d <= 17: //
          m = 7;
          d = d + 13;
          break;
        case m == 12 && d > 17:
          m = 8;
          d = d - 17;
          break;
        default:
          (m = false), (d = false);
      }

      return { month: m, date: d };
    };

    var GetdayName = dayName[new Date(arg.year, arg.month, arg.date).getDay()];
    let daymon = getMonthDate(arg.date, arg.month);
    let getSession = session[Math.floor(daymon.month / 2)];

    return {
      day: rojAdd + GetdayName,
      date: convertNumber(daymon.date) + addEe(daymon.date),
      month: monthName[daymon.month],
      session: getSession + kalAdd,
      year: convertNumber(getYear(arg)) + abodo,
    };
  }

  const setDateEng = (tarik) => {
    let dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const arg = {
      date: tarik.getDate(),
      month: tarik.getMonth() + 1,
      year: tarik.getFullYear(),
    };
    const dateEn = {
      day: dayName[tarik.getDay()],
      date: arg.date,
      month: monthName[arg.month - 1],
      year: arg.year,
    };

    const dateBd = getDatebd(arg);
    return { dateEn, dateBd };
  };

  const { dateBd, dateEn } = setDateEng(new Date());
  return (
    <div className="flex justify-center flex-col md:leading-12 text-lg text-natural-500 font-bold  my-16 text-center ">
      <h1>{`${dateBd.date} ${dateBd.month} ${dateBd.year} ,
       ${dateBd.day} , ${dateBd.session}`}</h1>
      <h1 className="text-center">{`${dateEn.date} ${dateEn.month} ${dateEn.year} , ${dateEn.day}`}</h1>
    </div>
  );
};

export default DateTimeHtml;
