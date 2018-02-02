var _properties = [
  {
    name: "title",
    values: ["title"]
  },
  {
    name: "description",
    values: ["description","상세설명"]
  },
  {
    name: "room_type",
    values: ["방 종류","방 구조","방 룸수","종류","구조","룸수"]
  },
  {
    name: "property_floor_number",
    values: ["해당 층","건물 층","해당","층","건물"]
  },
  {
    name: "property_deposit_price",
    values: ["보증금"]
  },
  {
    name: "property_selling_price",
    values: ["매매가"]
  },
  {
    name: "property_price",
    values: ["월세"]
  },
  {
    name: "property_mortgage",
    values: ["융자금"]
  },
  {
    name: "property_deposit_only",
    values: ["전세율","전세"]
  },
  {
    name: "property_label",
    values: ["관리비"]
  },
  {
    name: "property_label_list",
    values: ["관리비포함항목"]
  },
  {
    name: "property_label_before",
    values: [""]
  },
  {
    name: "property_category",
    values: [""]
  },
  {
    name: "property_address",
    values: ["address","주소"]
  },
  {
    name: "property_city_submit",
    values: [""]
  },
  {
    name: "property_area",
    values: [""]
  },
  {
    name: "property_zip",
    values: [""]
  },
  {
    name: "property_county",
    values: [""]
  },
  {
    name: "property_country",
    values: [""]
  },
  {
    name: "property_map",
    values: [""]
  },
  {
    name: "property_latitude",
    values: [""]
  },
  {
    name: "property_longitude",
    values: [""]
  },
  {
    name: "google_camera_angle",
    values: [""]
  },
  {
    name: "property_google_view",
    values: [""]
  },
  {
    name: "property_size",
    values: ["전용","공급면적","크기"]
  },
  {
    name: "property_lot_size",
    values: [""]
  },
  {
    name: "property_rooms",
    values: ["방수","욕실수"]
  },
  {
    name: "property_bedrooms",
    values: [""]
  },
  {
    name: "property_bathrooms",
    values: ["욕실"]
  },
  {
    name: "property_year",
    values: [""]
  },
  {
    name: "property_move_date",
    values: ["입주가능일"]
  },
  {
    name: "property_garage",
    values: [""]
  },
  {
    name: "property_garage_size",
    values: [""]
  },
  {
    name: "property_date",
    values: [""]
  },
  {
    name: "property_parking",
    values: ["주차"]
  },
  {
    name: "property_basement",
    values: [""]
  },
  {
    name: "property_external_construction",
    values: [""]
  },
  {
    name: "property_roofing",
    values: [""]
  },
  {
    name: "owner_notes",
    values: [""]
  },
  {
    name: "features",
    values: ["옵션","특징"]
  }
];

var _features = [
  {
    name: "air_conditioner",
    values: ["에어컨"]
  },
  {
    name: "attic",
    values: [""]
  },
  {
    name: "electric_stove",
    values: ["인덕션"]
  },
  {
    name: "microwave",
    values: ["전자레인지"]
  },
  {
    name: "electronic_door_lock",
    values: ["전자도어락"]
  },
  {
    name: "electric_bidet",
    values: ["비데"]
  },
  {
    name: "gas_heat",
    values: [""]
  },
  {
    name: "heater_type",
    values: ["난방종류"]
  },
  {
    name: "gas_stove",
    values: ["가스레인지"]
  },
  {
    name: "ocean_view",
    values: [""]
  },
  {
    name: "wine_cellar",
    values: [""]
  },
  {
    name: "basketball_court",
    values: [""]
  },
  {
    name: "gym",
    values: [""]
  },
  {
    name: "pound",
    values: [""]
  },
  {
    name: "fireplace",
    values: [""]
  },
  {
    name: "lake_view",
    values: [""]
  },
  {
    name: "pool",
    values: [""]
  },
  {
    name: "back_yard",
    values: [""]
  },
  {
    name: "front_yard",
    values: [""]
  },
  {
    name: "fenced_yard",
    values: [""]
  },
  {
    name: "sprinklers",
    values: [""]
  },
  {
    name: "washer_and_dryer",
    values: ["세탁기"]
  },
  {
    name: "deck",
    values: ["책상"]
  },
  {
    name: "bed",
    values: ["침대"]
  },
  {
    name: "fridge",
    values: ["냉장고"]
  },
  {
    name: "closet",
    values: ["옷장"]
  },
  {
    name: "shoe_rack",
    values: ["신발장"]
  },
  {
    name: "tv",
    values: ["TV"]
  },
  {
    name: "balcony",
    values: [""]
  },
  {
    name: "laundry",
    values: ["세탁기"]
  },
  {
    name: "concierge",
    values: [""]
  },
  {
    name: "doorman",
    values: [""]
  },
  {
    name: "private_space",
    values: [""]
  },
  {
    name: "storage",
    values: [""]
  },
  {
    name: "recreation",
    values: [""]
  }
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

function getCategoryId(value) {
  if (!value) return -1;
  for (var i = 0; i < categories.length; i++) {
    var values = categories[i].values;
    for (var j = 0; j < values.length; j++) {
      if(!values[j]||values[j]=="") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase())>-1) {
        return categories[i].id;
      }
    }
  }
  return -1;
}

function getFeatureName(value) {

  if (!value) return -1;

  for (var i = 0; i < _features.length; i++) {
    var values = _features[i].values;
    for (var j = 0; j < values.length; j++) {
      if(!values[j]||values[j]=="") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase())>-1) {
        return _features[i].name;
      }
    }
  }
  return -1;
}
function getPropertyName(value) {

  if (!value) return null;

  for (var i = 0; i < _properties.length; i++) {
    var values = _properties[i].values;
    for (var j = 0; j < values.length; j++) {
      if(!values[j]||values[j]=="") continue
      if (value.toUpperCase().indexOf(values[j].toUpperCase())>-1) {
        return _properties[i].name;
      }
    }
  }
  return null;
}