/**
 * Created by imudin on 03/02/2018.
 */


var json = window.location.hash.slice(1);
// var json = chrome.cookies.get("youVRData");

if (json && $('#new_post').length > 0) {
  fillTables();
}


function fillTables() {
  var data = JSON.parse(json);
  var value;

  if (data.details) {
    for (var key in data.details) {

      if(key=='features'){
        value = data.details[key];
        for(var i=0;i<value.length;i++){
          if(value[i]==""||value[i]==" ") continue;
          var el  = $('#'+value[i]);
          if(el.length>0){
            if(el.type=='checkbox'){
              el.checked = true;
            }
            else if(el[0]&&el[0].type=='checkbox'){
              el[0].checked = true;
            }
          }
        }
        continue;
      }



      value = decodeURI(data.details[key]);
      key = decodeURI(key);

      if(key==""||key==" ") continue;

      var el = $('#' + key);

      if(el.length>0){
        el[0].value = value;
        el.text(value);

        console.log(el);

        try{
          el[0].text(value);
        }
        catch (e){
          console.log(e);
        }

      }
    }
  }
}