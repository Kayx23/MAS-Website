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
        title: 'All Day Event',
        start: '2020-09-01'
      },
      {
        title: 'Long Event',
        start: '2020-09-07',
        end: '2020-09-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-09-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2020-09-11',
        end: '2020-09-13'
      },
      {
        title: 'Lunch',
        start: '2020-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-09-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2020-09-13T07:00:00'
      },
      {
        title: 'go to CIA website',
        url: 'https://www.cia-ica.ca/home',
        start: '2020-09-28'
      }
    ],
    eventColor: 'rgb(121, 0, 60)'  /* change colour of all events */
  });

  calendar.render();
});