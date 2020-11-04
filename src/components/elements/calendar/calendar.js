import './calendar.scss';
const lightpick = require("lightpick");

class Calendar {
  constructor(arrived, departure, callback) {
    this.arrived = arrived;
    this.departure = departure;
    this.callback = callback;
  }
  pickerTwoInputs(arrived, departure, callback) {
    new lightpick({
      field: arrived,
      secondField: departure,
      singleDate: false,
      lang: 'ru',
      locale: {
        tooltip: {
          one: 'день',
          few: 'дня',
          many: 'дней',
        },
        pluralize: function(i, locale) {
          if ('one' in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
          if ('few' in locale && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return locale.few;
          if ('many' in locale && (i % 10 === 0 || i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)) return locale.many;
          if ('other' in locale) return locale.other;

          return '';
        }
      },
      footer: true,
      onSelect: callback
    });
    this.editButtons();
  }

  editButtons() {
    const calendarButtons = document.querySelectorAll('.lightpick__reset-action, .lightpick__apply-action');
    for (let button of calendarButtons) {
      button.classList.contains('lightpick__apply-action') ?
        button.textContent = 'применить':
        button.textContent = 'очистить';
    }
  }
}

export default Calendar;
