let googleMapsPromise: Promise<void> | null = null;

export const loadGoogleMapsApi = (): Promise<void> => {
  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    // Check if API is already loaded
    if (window.google?.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      reject(new Error('Google Maps API key is not defined'));
      return;
    }

    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () => 
      reject(new Error('Failed to load Google Maps API'))
    );

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}; 