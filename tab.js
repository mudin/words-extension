(function(bookmarkFolder, displayFavicons) {
  function updateClock() {
    Date.getMinutesTwoDigits = function() {
      var retval = now.getMinutes();
      if (retval < 10) return '0' + retval.toString();
      else return retval.toString();
    };
    Date.getHoursModTwelve = function() {
      var retval = now.getHours();
      retval = retval % 12;
      if (retval == 0) retval = 12;
      return retval;
    };
    var now = new Date(),
      time = Date.getHoursModTwelve() + ':' + Date.getMinutesTwoDigits();
    document.getElementById('time').innerHTML = ['', time].join('');
    setTimeout(updateClock, 1000);
  }

  function addSearch(elementId, callback) {
    var elem = document.getElementById(elementId);
    elem.addEventListener('keypress', function(evt) {
      if (evt.keyCode == 13) {
        callback(elem.value);
      }
    });
  }

  function _makeDelayed() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  }

  function bindNoteHandlers() {
    var elem = document.getElementById('noteText'),
      saveHandler = _makeDelayed();
    function save() {
      chrome.storage.sync.set({ noteText: elem.value });
    }
    // Throttle save so that it only occurs after 1 second without a keypress.
    elem.addEventListener('keypress', function() {
      saveHandler(save, 1000);
    });
    elem.addEventListener('blur', save);
    chrome.storage.sync.get('noteText', function(data) {
      elem.value = data.noteText ? data.noteText : '';
    });
  }

  function searchHistory() {
    // Only look at the past 7 days.
    var cutoff = new Date().getTime() - 1000 * 60 * 60 * 24 * 7,
      elem = document.getElementById('historyText'),
      parts = elem.value.split(' '),
      regex = new RegExp(parts.join('.*[/.].*')),
      urls = [];

    // Search for all history.
    chrome.history.search(
      {
        text: '',
        maxResults: 500,
        startTime: cutoff
      },
      function(items) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].url.match(regex)) {
            urls.push([items[i].lastVisit, items[i].url]);
          }
        }
        if (urls.length) {
          elem.value = urls[0][1];
        }
      }
    );
  }

  function bindHistory() {
    var elem = document.getElementById('historyText'),
      searchHandler = _makeDelayed();

    elem.addEventListener('keypress', function(e) {
      if (e.keyCode == 13 && elem.value) {
        window.location.href = elem.value;
      } else if (e.keyCode == 35) {
        e.preventDefault();
        elem.value = '';
      } else {
        searchHandler(searchHistory, 1200);
      }
    });
  }

  function getFavicon(url) {
    domainInfo = /https?:\/\/([^\/]+)/.exec(url);
    if (domainInfo) {
      return 'https://plus.google.com/_/favicon?domain=' + domainInfo[1];
    }
  }

  function createRow(bookmarks) {
    var row = document.createElement('tr');
    for (var i = 0, l = bookmarks.length; i < l; i++) {
      var td = document.createElement('td');
      var link = document.createElement('a');
      if (displayFavicons) {
        faviconUrl = getFavicon(bookmarks[i].url);
        if (faviconUrl) {
          var img = document.createElement('img');
          img.src = getFavicon(bookmarks[i].url);
          link.appendChild(img);
          link.appendChild(document.createTextNode(' '));
        }
      }
      link.appendChild(document.createTextNode(bookmarks[i].title));
      link.href = bookmarks[i].url;
      td.appendChild(link);
      row.appendChild(td);
    }
    return row;
  }

  function _processFavorites(favorites) {
    var header = [];
    accum = [];

    for (var i = 0; i < favorites.length; i++) {
      header.push(favorites[i].title);
      accum.push(favorites[i].children);
    }
    _displayFavorites(header, accum);
  }

  function _displayFavorites(header, bookmarks) {
    var table = document.getElementById('bookmarks');
    // Create header row.
    var headerRow = document.createElement('tr');
    for (var i = 0; i < header.length; i++) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(header[i]));
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    var zipped = zip(bookmarks);
    for (var i = 0; i < zipped.length; i++) {
      table.appendChild(createRow(zipped[i]));
    }
  }

  const wordsLength = 20;
  const levels=  [
    {
      name: 'basic',
      id: 'basic',
      minLen: 1,
      maxLen: 4
    },
    {
      name: 'medium',
      id: 'medium',
      minLen: 5,
      maxLen: 7
    },
    {
      name: 'hard',
      id: 'hard',
      minLen: 6,
      maxLen: Infinity
    }
  ];

  let level;

  function setLevel(id) {
    levels.forEach(l => {
      if (l.id === id) {
        level = l;
      }
    });
  }

  function loadBookmarks() {
    setLevel('hard');
    
    let el = document.querySelector('.word-list ol');
    el.innerHTML = "";

    const mp = {};

    let words = mdnDicWords18934;

    const filteredWords = words.filter(
      w => w[0].length >= level.minLen && w[0].length <= level.maxLen
    );

    for (let i = 0; i < wordsLength; i += 1) {
      let j = -1;
      while (!mp[j]) {
        // eslint-disable-next-line no-bitwise
        j = ~~(Math.random() * filteredWords.length);
        if (!mp[j]) {
          mp[j] = 1;
        }
      }
      let li = document.createElement('li');
      let enEl = document.createElement('span');
      enEl.className = "en";
      enEl.innerHTML = filteredWords[j][0];
      let uzEl = document.createElement('span');
      uzEl.className = "uz";
      uzEl.innerHTML = filteredWords[j][1];
      li.appendChild(enEl);
      li.appendChild(uzEl);
      el.appendChild(li);
    }
  }

  addSearch('search', function(s) {
    window.location.href = 'https://www.google.com/#q=' + s;
  });

  updateClock();
  bindNoteHandlers();
  bindHistory();
  loadBookmarks();
})('Favorites', false);
