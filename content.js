var data = {};

var btn;

function addExportButton() {
  btn = document.createElement('button');
  btn.setAttribute('class', 'youvr-export-btn');
  btn.innerHTML = "Export to YouVR";
  document.body.appendChild(btn);

}

var zigbangEl = $('.detail-list');

if (zigbangEl.length > 0) {

  addExportButton();

  // Zigbang
  $(btn).on('click', function () {

    var detailTable = {
      title: $('.detail-title').text()
    };
    var headersText = [];
    var $headers = $("th");

    $("tbody tr").each(function (index) {

      var $cells = $(this).find("td");
      $headers = $(this).find("th");

      $cells.each(function (cellIndex) {
        // Set the header text

        headersText[cellIndex] = $($headers[cellIndex]).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        // Update the row object with the header/cell combo
        detailTable[headersText[cellIndex]] = $(this).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
      });
    });


    var images = [];


    $(".img-slider li").each(function () {

      var imgEl = $(this).find('img');

      if (imgEl) {
        var url = $(this).find('img')[0].src;
        images.push(url);
      }

    });

    data['details'] = parseData(detailTable);
    data['images'] = images;

    downloadObjectAsJson(data, 'z' + Date.now());
  });
}

//Dabang

var dabangEl = $('.details-room-info');

if (dabangEl.length > 0) {

  addExportButton();

  $(btn).on('click', function () {

    var detailTable = {
      title: $('.room-info .title p').text(),
      address: $('.room-info .address p').text()
    };
    var headersText = [];
    var $headers = $("th");

    $("tbody tr").each(function (index) {

      var $cells = $(this).find("td");
      $headers = $(this).find("th");

      $cells.each(function (cellIndex) {
        // Set the header text

        headersText[cellIndex] = $($headers[cellIndex]).text();
        // Update the row object with the header/cell combo
        detailTable[headersText[cellIndex]] = $(this).text();
      });
    });


    var text = "";

    $('.photos-header span span').each(function () {
      text += $(this).text();
    });

    var images = [];


    $(".photos .photo-bg").each(function () {

      var bg = $(this).css('background-image');
      bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
      images.push(bg);

    });

    detailTable.features = [];

    $('.details-option ul li .active').each(function () {
      var text = $(this).text();
      if(text){
        detailTable.features.push(text);
      }
    });

    data['details'] = parseData(detailTable);
    data['images'] = images;

    downloadObjectAsJson(data, 'd' + Date.now());
  });
}


// naver

var naverEl = $('.info_area .info_wrap');

if (naverEl.length > 0) {

  addExportButton();

  $(btn).on('click', function () {

    var detailTable = {
      'title': $('.adr_info h2').attr('title'),
      'address': $('.map_section #_mapAddrArea').text()
    };

    var headersText = [];
    var $headers = $(".detail_view th");

    $(".detail_view tbody tr").each(function (index) {

      var $cells = $(this).find("td");
      $headers = $(this).find("th");

      $cells.each(function (cellIndex) {
        // Set the header text

        headersText[cellIndex] = $($headers[cellIndex]).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        ;
        // Update the row object with the header/cell combo
        detailTable[headersText[cellIndex]] = $(this).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        ;
      });
    });

    headersText = [];
    $headers = $(".sale_detail th");


    $(".sale_detail tbody tr").each(function (index) {

      var $cells = $(this).find("td");
      $headers = $(this).find("th");

      $cells.each(function (cellIndex) {
        // Set the header text

        headersText[cellIndex] = $($headers[cellIndex]).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        ;
        // Update the row object with the header/cell combo
        detailTable[headersText[cellIndex]] = $(this).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        ;
      });
    });


    headersText = [];
    $headers = $(".div_detail th");

    $(".div_detail tbody tr").each(function (index) {

      var $cells = $(this).find("td");
      $headers = $(this).find("th");

      $cells.each(function (cellIndex) {
        // Set the header text

        headersText[cellIndex] = $($headers[cellIndex]).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
        // Update the row object with the header/cell combo
        detailTable[headersText[cellIndex]] = $(this).text().replace(/(\r\n\t|\n|\r|\t)/gm, "");
      });
    });

    var text = "";

    $('.photos-header span span').each(function () {
      text += $(this).text();
    });

    var images = [];


    $(".rolling li").each(function () {

      var imgEl = $(this).find('img')[0];

      if (imgEl) {

        var url = imgEl.src.replace('type=m70', 'type=m562');
        images.push(url);
      }

    });

    data['details'] = parseData(detailTable);
    data['images'] = images;

    console.log(data);
    clipboard.writeText(JSON.stringify(data));

    downloadObjectAsJson(data, 'n' + Date.now());
  });

}


// Hanbang

var hanbangEl = $('.wrap #contents');

if (hanbangEl.length > 0) {
  $(btn).on('click', function () {


    data['detail-title'] = $('.dateDay font').text();
    data['detail-address'] = $('.map_section #_mapAddrArea').text();

    var detailTable = {};


    $(".detailWrap tbody tr").each(function (index) {

      var $cells = $(this).find("td");

      $cells.each(function (cellIndex) {
        // Set the header text

        if (cellIndex % 2 == 0) {
          detailTable[$($cells[cellIndex]).text()] = $($cells[cellIndex + 1]).text();
        }
      });

    });


    $(".priceArea tbody tr").each(function (index) {

      var $cells = $('.priceArea tbody').find("td");

      var k = -1;
      for (var i = 0; i < $cells.length; i++) {
        if ($($cells[i]).text() == "시세") {
          k = i;
          break;
        }
      }

      if (k != -1) {
        $cells.splice(k, 1);
      }

      $cells.each(function (cellIndex) {
        // Set the header text

        if (cellIndex % 2 == 0) {

          // headersText[cellIndex] = $($cells[cellIndex]).text();
          // Update the row object with the header/cell combo
          detailTable[$($cells[cellIndex]).text()] = $($cells[cellIndex + 1]).text();
        }
      });
    });


    var text = "";

    $('.photos-header span span').each(function () {
      text += $(this).text();
    });

    var images = [];


    $(".PimgWrap .bx-wrapper li").each(function () {

      var imgEl = $(this).find('img')[0];

      if (imgEl) {

        var url = imgEl.src;
        images.push(url);
      }

    });


    data['details'] = parseData(detailTable);
    data['images'] = images;


    downloadObjectAsJson(data, 'h' + Date.now());
  });
}


function downloadObjectAsJson(exportObj, exportName) {

  // exportObj.parsedJson = parseData(exportObj);

  console.log(exportObj);
  clipboard.writeText(JSON.stringify(exportObj));

  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}


function parseData(data) {
  var json = {};
  for (var key in data) {
    var categoryId = getCategoryId(key);
    if (categoryId > -1) {
      json['category_id'] = categoryId;
      continue;
    }

    var propertyName = getPropertyName(key);
    if (propertyName) {
      json[propertyName] = data[key];
      continue;
    }

    if(key=='features') {
      json[key]= [];
      for(var i=0;i<data[key].length;i++){
        var feature = getFeatureName(data[key][i]);
        if(feature){
          json[key].push(feature);
        }
        else {
          json[key].push(data[key][i]);
        }
      }

      continue;
    }

    json[key] = data[key];
  }

  return json;
}