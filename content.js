var data = {};

// Zigbang
$('.detail-list').on('click', function () {

  data['detail-title'] = $('.detail-title').text();

  var detailTable = {};
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


  var images = [];


  $(".img-slider li").each(function () {

    var imgEl = $(this).find('img');

    if (imgEl) {
      var img = {
        url: $(this).find('img')[0].src,
        text: $(this).find('.i-watermark').text()
      };

      images.push(img);
    }

  });



  data['detail-list'] = detailTable;
  data['images'] = images;

  console.log(data);
  clipboard.writeText(JSON.stringify(data));

  downloadObjectAsJson(data, 'z'+Date.now());
});

//Dabang

$('.details-room-info').on('click', function () {

  data['detail-title'] = $('.room-info .title p').text();
  data['detail-address'] = $('.room-info .address p').text();

  var detailTable = {};
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

    var img = {
      url: bg,
      text: text
    };

    images.push(img);

  });



  data['detail-list'] = detailTable;
  data['images'] = images;

  console.log(data);
  clipboard.writeText(JSON.stringify(data));

  downloadObjectAsJson(data, 'd'+Date.now());
});


// naver

$('.info_area .info_wrap').on('click', function () {


  data['detail-title'] = $('.adr_info h2').attr('title');
  data['detail-address'] = $('.map_section #_mapAddrArea').text();

  var detailTable = {};
  var headersText = [];
  var $headers = $(".detail_view th");


  $(".detail_view tbody tr").each(function (index) {

    var $cells = $(this).find("td");
    $headers = $(this).find("th");

    $cells.each(function (cellIndex) {
      // Set the header text

      headersText[cellIndex] = $($headers[cellIndex]).text();
      // Update the row object with the header/cell combo
      detailTable[headersText[cellIndex]] = $(this).text();
    });
  });


  data['detail-list'] = {
    'detail_view': detailTable
  };

  detailTable = {};
  headersText = [];
  $headers = $(".sale_detail th");


  $(".sale_detail tbody tr").each(function (index) {

    var $cells = $(this).find("td");
    $headers = $(this).find("th");

    $cells.each(function (cellIndex) {
      // Set the header text

      headersText[cellIndex] = $($headers[cellIndex]).text();
      // Update the row object with the header/cell combo
      detailTable[headersText[cellIndex]] = $(this).text();
    });
  });


  data['detail-list']['sale_detail'] = detailTable;

  detailTable = {};
  headersText = [];
  $headers = $(".div_detail th");

  $(".div_detail tbody tr").each(function (index) {

    var $cells = $(this).find("td");
    $headers = $(this).find("th");

    $cells.each(function (cellIndex) {
      // Set the header text

      headersText[cellIndex] = $($headers[cellIndex]).text();
      // Update the row object with the header/cell combo
      detailTable[headersText[cellIndex]] = $(this).text();
    });
  });


  data['detail-list']['div_detail'] = detailTable;

  var text = "";

  $('.photos-header span span').each(function () {
    text += $(this).text();
  });

  var images = [];


  $(".rolling li").each(function () {

    var imgEl = $(this).find('img')[0];

    if (imgEl) {

      var url = imgEl.src.replace('type=m70','type=m562');

      var img = {
        url: url,
        text: ""
      };

      images.push(img);
    }

  });

// data['detail-list'] = detailTable;
  data['images'] = images;

  console.log(data);
  clipboard.writeText(JSON.stringify(data));

  downloadObjectAsJson(data, 'n'+Date.now());
});


// Hanbang

$('.wrap #contents').on('click', function () {


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


  data['detail-list'] = {
    'detailWrap': detailTable
  };

  detailTable = {};

  $(".priceArea tbody tr").each(function (index) {

    var $cells = $('.priceArea tbody').find("td");

    var k=-1;
    for(var i=0;i<$cells.length;i++){
      if($($cells[i]).text()=="시세"){
        k=i; break;
      }
    }

    if(k!=-1) {
      $cells.splice(k,1);
    }

    $cells.each(function (cellIndex) {
      // Set the header text

      if(cellIndex%2==0) {

        // headersText[cellIndex] = $($cells[cellIndex]).text();
        // Update the row object with the header/cell combo
        detailTable[$($cells[cellIndex]).text()] = $($cells[cellIndex+1]).text();
      }
    });
  });


  data['detail-list']['priceArea'] = detailTable;

  var text = "";

  $('.photos-header span span').each(function () {
    text += $(this).text();
  });

  var images = [];


  $(".PimgWrap .bx-wrapper li").each(function () {

    var imgEl = $(this).find('img')[0];

    if (imgEl) {

      var url = imgEl.src;

      var img = {
        url: url,
        text: ""
      };

      images.push(img);
    }

  });

// data['detail-list'] = detailTable;
  data['images'] = images;

  console.log(data);
  clipboard.writeText(JSON.stringify(data));

  downloadObjectAsJson(data, 'h'+Date.now());
});


function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}