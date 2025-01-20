export type MapStyleName = 'default' | 'muted' | 'dark' | 'simplified' | 'minimal';

export const mapStyles = {
  default: [], // Empty array uses default Google Maps style
  
  muted: [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { saturation: -100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ],

  dark: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { invert_lightness: true }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ],

  simplified: [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    }
  ],

  minimal: [
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
}; 