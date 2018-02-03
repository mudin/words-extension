var props = [
  "title, title",
  "description, description, 상세설명",
  "room_type, 방 종류, 방 구조, 방 룸수, 종류, 구조, 룸수",
  "property_floor_number, 해당 층, 건물 층, 해당, 층, 건물",
  "roperty_deposit_price, 보증금",
  "property_selling_price, 매매가",
  "property_price, 월세",
  "property_mortgage, 융자금",
  "property_deposit_only, 전세율, 전세",
  "property_label, 관리비",
  "property_label_list, 관리비포함항목",
  "property_label_before, ",
  "property_category, ",
  "property_address,address, 주소",
  "property_city_submit, ",
  "property_area, ",
  "property_zip, ",
  "property_county, ",
  "property_country, ",
  "property_map, ",
  "property_latitude, ",
  "property_longitude, ",
  "google_camera_angle, ",
  "property_google_view, ",
  "property_size, 전용, 공급면적, 크기",
  "property_lot_size, ",
  "property_rooms,방수, 욕실수",
  "property_bedrooms, ",
  "property_bathrooms, 욕실",
  "property_year, ",
  "property_move_date, 입주가능일",
  "property_garage, ",
  "property_garage_size, ",
  "property_date, ",
  "property_parking, 주차",
  "property_basement, ",
  "property_external_construction, ",
  "property_roofing, ",
  "owner_notes, ",
  "features, 옵션, 특징"
];

var features = [
  "air_conditioner, 에어컨",
  "attic, ",
  "electric_stove, 인덕션",
  "microwave, 전자레인지",
  "electronic_door_lock, 전자도어락",
  "electric_bidet, 비데",
  "gas_heat, ",
  "heater_type, 난방종류",
  "gas_stove, 가스레인지",
  "ocean_view, ",
  "wine_cellar, ",
  "basketball_court, ",
  "gym, ",
  "pound, ",
  "fireplace, ",
  "lake_view, ",
  "pool, ",
  "back_yard, ",
  "front_yard, ",
  "fenced_yard, ",
  "sprinklers, ",
  "washer_and_dryer, 세탁기",
  "deck, 책상",
  "bed, 침대",
  "fridge, 냉장고",
  "closet, 옷장",
  "shoe_rack, 신발장",
  "tv, TV",
  "balcony, ",
  "laundry, 세탁기",
  "concierge, ",
  "doorman, ",
  "private_space, ",
  "storage, ",
  "recreation, "
];

var categories = [
  {
    id: 13, name: "Apartments",
    values: [""]
  },
  {
    id: 17, name: "Condos",
    values: [""]
  },
  {
    id: 18, name: "Duplexes",
    values: [""]
  },
  {
    id: 20, name: "Houses",
    values: [""]
  },
  {
    id: 21, name: "Industrial",
    values: [""]
  },
  {
    id: 23, name: "Land",
    values: [""]
  },
  {
    id: 33, name: "Offices",
    values: [""]
  },
  {
    id: 37, name: "Retail",
    values: [""]
  },
  {
    id: 42, name: "Villas",
    values: [""]
  }
];

var _properties = [];

props.map(function (a) {
  var _p = a.split(/[, ]/).filter(function (el) {
    if (el.length != 0) return el;
  });

  if (_p.length > 0) {

    var _property = {
      name: _p[0],
      values: _p.slice(1)
    };

    _properties.push(_property);

  }
});

var _features = [];

features.map(function (a) {
  var _f = a.split(/[, ]/).filter(function (el) {
    if (el.length != 0) return el;
  });

  if (_f.length > 0) {

    var _feature = {
      name: _f[0],
      values: _f.slice(1)
    };
    _features.push(_feature);
  }
});


function getCategoryId(value) {
  if (!value) return -1;
  for (var i = 0; i < categories.length; i++) {
    var values = categories[i].values;
    for (var j = 0; j < values.length; j++) {
      if (!values[j] || values[j] == "") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase()) > -1) {
        return categories[i].id;
      }
    }
  }
  return -1;
}

function getFeatureName(value) {

  if (!value) return null;

  for (var i = 0; i < _features.length; i++) {
    var values = _features[i].values;
    for (var j = 0; j < values.length; j++) {
      if (!values[j] || values[j] == "") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase()) > -1) {
        return _features[i].name;
      }
    }
  }
  return null;
}
function getPropertyName(value) {

  if (!value) return null;

  for (var i = 0; i < _properties.length; i++) {
    var values = _properties[i].values;
    for (var j = 0; j < values.length; j++) {
      if (!values[j] || values[j] == "") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase()) > -1) {
        return _properties[i].name;
      }
    }
  }
  return null;
}