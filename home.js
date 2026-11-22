/* Home-only widgets: weather, moon phase, days left, joke. */
(function () {
  // ── Dhaka weather
  var weatherVal = document.getElementById('weatherVal');
  var weatherDesc = document.getElementById('weatherDesc');
  if (weatherVal) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m,weather_code')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var cur = data.current || data.current_weather;
        if (!cur) throw new Error('no data');
        var codes = {
          0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
          45: 'Fog', 48: 'Fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
          61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow',
          75: 'Heavy snow', 80: 'Showers', 81: 'Showers', 82: 'Heavy showers',
          95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm'
        };
        var temp = cur.temperature_2m != null ? cur.temperature_2m : cur.temperature;
        var code = cur.weather_code != null ? cur.weather_code : cur.weathercode;
        weatherVal.textContent = Math.round(temp) + '°C';
        weatherDesc.textContent = codes[code] || 'Dhaka';
      })
      .catch(function () {
        weatherVal.textContent = '--°C';
        weatherDesc.textContent = 'unavailable';
      });
  }

  // ── Moon phase
  var moonEmoji = document.getElementById('moonEmoji');
  if (moonEmoji) {
    var known = Date.UTC(2000, 0, 6);
    var days = (Date.now() - known) / 86400000;
    var synodic = 29.53058867;
    var phase = ((days % synodic) + synodic) % synodic;
    var phases = [
      [1.85, '🌑', 'New Moon'], [7.38, '🌒', 'Waxing crescent'],
      [9.22, '🌓', 'First quarter'], [14.77, '🌔', 'Waxing gibbous'],
      [16.61, '🌕', 'Full moon'], [22.15, '🌖', 'Waning gibbous'],
      [23.99, '🌗', 'Last quarter'], [29.53, '🌘', 'Waning crescent']
    ];
    var picked = phases[0];
    for (var i = 0; i < phases.length; i++) {
      if (phase < phases[i][0]) { picked = phases[i]; break; }
    }
    moonEmoji.textContent = picked[1];
    document.getElementById('moonName').textContent = picked[2];
  }

  // ── Days left in the year
  var daysLeft = document.getElementById('daysLeft');
  if (daysLeft) {
    var now = new Date();
    var end = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
    daysLeft.textContent = Math.ceil((end - now) / 86400000);
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = now.getFullYear();
  }

  // ── Joke
  var jokes = [
    'Why do programmers prefer dark mode? Light attracts bugs.',
    'A SQL query walks into a bar and asks two tables: “Can I join you?”',
    'Why do Java developers wear glasses? They don’t C#.',
    'There are 10 types of people: those who understand binary, and those who don’t.',
    'How do you comfort a JavaScript bug? You console it.',
    'I would tell you a UDP joke, but you might not get it.',
    'A photon checks into a hotel. “Luggage?” asks the bellhop. “No thanks, I’m travelling light.”',
    'Why don’t scientists trust atoms? They make up everything.',
    'I’m reading a book on anti-gravity. It’s impossible to put down.',
    'What did the ocean say to the beach? Nothing, it just waved.'
  ];
  var jokeText = document.getElementById('jokeText');
  var jokeBtn = document.getElementById('jokeBtn');
  if (jokeText && jokeBtn) {
    var last = -1;
    var show = function () {
      var i = Math.floor(Math.random() * jokes.length);
      if (i === last) i = (i + 1) % jokes.length;
      last = i;
      jokeText.textContent = jokes[i];
    };
    show();
    jokeBtn.addEventListener('click', show);
  }
})();
