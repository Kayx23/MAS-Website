document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  function handleDatesRender(arg) {
    console.log('viewType:', arg.view.calendar.state.viewType);
  }
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid'],
    defaultView: 'dayGridMonth',
    datesRender: handleDatesRender,
    /* defaultDate: 2020-09-01 */
    /* if defaultDate not set, default to today */
    contentHeight: 600,  /* cell height */
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    events: [
      {
        title: 'IABA & Willis Towers Watson ',
        start: '2020-09-02T18:00:00',
        url: 'https://willistowerswatson.recsolu.com/external/events/DdNUJU0G0WWRc9sdolsdGQ?fbclid=IwAR38ddIcdtQsOs5muljs9X_qVCrbe1hJylFL74hCebhnQgz1M3KW0v9XQ2A'
      },
      {
        title: 'ASNY Virtual Fair',
        start: '2020-09-13T12:00:00',
        url: 'https://asny.memberclicks.net/index.php?option=com_jevents&task=icalrepeat.detail&evid=87&Itemid=132&year=2020&month=09&day=13&title=2020-asny-career-fair-virtual&uid=b01723bb7627489fbb2d12882895fac4&fbclid=IwAR3FavLRCX-87taOu11MJ1ydsoX0CqFqFHX6s-GZvG_Mf5ivkRZ7y_4pVXc'
      },
      {
        title: 'Manulife Networking',
        start: '2020-09-09T17:30:00'
      },
      {
        title: 'Sun Life Networking',
        start: '2020-09-22T12:00:00'
      },
      {
        title: 'Eckler Info Session',
        start: '2020-09-17T17:30:00'
      },
      {
        title: 'Desjardins Info Session',
        start: '2020-09-28T15:00:00'
      },
      {
        title: 'Canada Life Info Session',
        start: '2020-09-28T17:00:00'
      },
      {
        title: 'WTW Meet-the-Team',
        start: '2020-09-29T12:00:00'
      },
      {
        title: 'WTW Meet-the-Team',
        start: '2020-10-01T12:00:00'
      },
      {
        title: 'Intact Panel',
        start: '2020-09-29T16:00:00'
      }
    ],
    eventColor: 'rgb(121, 0, 60)'  /* change colour of all events */
  });

  calendar.render();
});