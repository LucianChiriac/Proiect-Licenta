const days = ['Du','Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa']
const months = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];
const locale = {
    localize: {
        day: n => days[n],
        month: n => months[n]
    },
    formatLong: {
        date: () => 'yyyy/mm/dd'
    }


  }

  export default locale;