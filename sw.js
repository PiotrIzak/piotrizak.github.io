self.addEventListener('install', function(ev) {
  console.log("Zdarzenie wywoływane po zarejestrowaniu Service Workera");
});
self.addEventListener('activate', function(ev) {
  console.log("Zdarzenie wywoływane po aktualizacji pliku Service Workera");
});
self.addEventListener('fetch', function(ev) {
  console.log("Zdarzenie wywoływane podczas próby pobrania zasobu");
});