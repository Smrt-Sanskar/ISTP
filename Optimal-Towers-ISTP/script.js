const citymap = {
  tower1: {
    center: {
      lat: 32.60476088,
      lng: 77.149675,
    },
  },
  tower2: {
    center: {
      lat: 32.03405056,
      lng: 78.06006752,
    },
  },
  tower3: {
    center: {
      lat: 31.90817968,
      lng: 76.75387108,
    },
  },
  tower4: {
    center: {
      lat: 32.53536341,
      lng: 76.98557615,
    },
  },
  tower5: {
    center: {
      lat: 31.63098165,
      lng: 77.27902515,
    },
  },
  tower6: {
    center: {
      lat: 32.2245986,
      lng: 76.15657914,
    },
  },
  tower7: {
    center: {
      lat: 32.41436724,
      lng: 77.23490744,
    },
  },
  tower8: {
    center: {
      lat: 31.23088516,
      lng: 76.98099732,
    },
  },
  tower9: {
    center: {
      lat: 33.26619256,
      lng: 77.18288669,
    },
  },
  tower10: {
    center: {
      lat: 32.59188822,
      lng: 76.88395256,
    },
  },
  tower11: {
    center: {
      lat: 32.47087353,
      lng: 77.09069014,
    },
  },
  tower12: {
    center: {
      lat: 32.06173688,
      lng: 77.26036013,
    },
  },
  tower13: {
    center: {
      lat: 32.5625344,
      lng: 77.0469154,
    },
  },
  tower14: {
    center: {
      lat: 32.58017407,
      lng: 76.93760739,
    },
  },
  tower15: {
    center: {
      lat: 32.67698457,
      lng: 77.19686869,
    },
  },
  tower16: {
    center: {
      lat: 32.43335652,
      lng: 77.14718445,
    },
  },
  tower17: {
    center: {
      lat: 32.48802295,
      lng: 77.0114174,
    },
  },
  tower18: {
    center: {
      lat: 32.53627541,
      lng: 77.06006843,
    },
  },
  tower19: {
    center: {
      lat: 32.67799823,
      lng: 76.78269629,
    },
  },
  tower20: {
    center: {
      lat: 32.31734653,
      lng: 77.19053197,
    },
  },
  tower21: {
    center: {
      lat: 32.60023576,
      lng: 77.24924743,
    },
  },
  tower22: {
    center: {
      lat: 32.05916387,
      lng: 78.12732523,
    },
  },
  tower23: {
    center: {
      lat: 32.11862591,
      lng: 78.05310584,
    },
  },
  tower24: {
    center: {
      lat: 32.55514792,
      lng: 76.97289125,
    },
  },
  tower25: {
    center: {
      lat: 32.62917074,
      lng: 76.88945128,
    },
  },
  tower26: {
    center: {
      lat: 32.58099484,
      lng: 77.12556094,
    },
  },
  tower27: {
    center: {
      lat: 32.50479383,
      lng: 77.05113831,
    },
  },
  tower28: {
    center: {
      lat: 32.44875982,
      lng: 77.12548572,
    },
  },
  tower29: {
    center: {
      lat: 32.6070047,
      lng: 77.18505424,
    },
  },
  tower30: {
    center: {
      lat: 32.0427544,
      lng: 78.08689015,
    },
  },
  tower31: {
    center: {
      lat: 32.07479929,
      lng: 78.08984291,
    },
  },
  tower32: {
    center: {
      lat: 32.59325778,
      lng: 76.92301518,
    },
  },
  tower33: {
    center: {
      lat: 32.57083672,
      lng: 77.0185568,
    },
  },
  tower34: {
    center: {
      lat: 32.7170008,
      lng: 77.16715176,
    },
  },
  tower35: {
    center: {
      lat: 32.5109596,
      lng: 77.02888637,
    },
  },
  tower36: {
    center: {
      lat: 32.57301758,
      lng: 76.96047335,
    },
  },
  tower37: {
    center: {
      lat: 32.6136358,
      lng: 76.90214291,
    },
  },
  tower38: {
    center: {
      lat: 32.59336628,
      lng: 76.94642023,
    },
  },
  tower39: {
    center: {
      lat: 32.57019802,
      lng: 77.06237954,
    },
  },
  tower40: {
    center: {
      lat: 32.63980273,
      lng: 77.18571139,
    },
  },
  tower41: {
    center: {
      lat: 32.46131479,
      lng: 77.11895605,
    },
  },
  tower42: {
    center: {
      lat: 32.09121126,
      lng: 78.11057798,
    },
  },
  tower43: {
    center: {
      lat: 32.38984981,
      lng: 77.24232479,
    },
  },
  tower44: {
    center: {
      lat: 32.07355864,
      lng: 78.06353966,
    },
  },
  tower45: {
    center: {
      lat: 32.51518917,
      lng: 76.97122934,
    },
  },
  tower46: {
    center: {
      lat: 32.63052217,
      lng: 76.87144347,
    },
  },
  tower47: {
    center: {
      lat: 32.55775952,
      lng: 77.03434518,
    },
  },
  tower48: {
    center: {
      lat: 32.51068215,
      lng: 77.01021733,
    },
  },
  tower49: {
    center: {
      lat: 32.67378249,
      lng: 77.21589744,
    },
  },
  tower50: {
    center: {
      lat: 32.55583857,
      lng: 77.07741795,
    },
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: 32.5,
      lng: 77,
    },
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.35,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.3,
      map,
      center: citymap[city].center,
      radius: 4000,
    });
  }
}
