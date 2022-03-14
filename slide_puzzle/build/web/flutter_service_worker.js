'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "edac6610d63f93aebfb1c09a76230248",
"index.html": "26a4b060bff387d93ae3f370c5271cdb",
"/": "26a4b060bff387d93ae3f370c5271cdb",
"main.dart.js": "3e683b37aabf60b96c796507e16d3b6b",
"favicon.png": "12f20fbe083e80e8c2a20d449ddb65b4",
"icons/Icon-192.png": "5e41f2d4ffa89a523fbca5cf06ad641c",
"icons/favicon.png": "12f20fbe083e80e8c2a20d449ddb65b4",
"icons/Icon-512.png": "8e26314d465b6144da82170c1344e5e6",
"manifest.json": "954005271c6d55db2bb42e5fec7a6d9f",
"assets/AssetManifest.json": "9593eeb5a8e3f033dde6cc5af6f8b1de",
"assets/NOTICES": "5fa842924803991a177a9b5267d5c5ee",
"assets/FontManifest.json": "a6a35a39ab693849dcde3aba2d4304a7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/simple_dash_large%25202.png": "c3100434238b1fe0f6b8e6d074ccd80e",
"assets/assets/images/simple_dash_small-sq.png": "9f008825b3b30f0fd25a5139616256f7",
"assets/assets/images/simple_dash_large.png": "4921783cb3cbc05d39ff28c0be5ef490",
"assets/assets/images/dania-logo_flutter_white.png": "d3408b19194bcd7c7a39f9956d22bc6b",
"assets/assets/images/audio_control/simple_on.png": "63e24186aec21d19e6f82f88d656a951",
"assets/assets/images/audio_control/dashatar_on.png": "927040d878eeeb9c0700d50fac87674f",
"assets/assets/images/audio_control/yellow_dashatar_off.png": "f1606e5fb255a5a48dbadc722a983060",
"assets/assets/images/audio_control/green_dashatar_off.png": "8aae7e7135d47a7536b2cca91d877c2a",
"assets/assets/images/audio_control/blue_dashatar_off.png": "fb9cf31f68997341215e5484252350fe",
"assets/assets/images/audio_control/simple_off.png": "ecac9ec0e8dc5d526e204651b5e62dcc",
"assets/assets/images/logo_flutter_color.png": "496548be6768a0945cafe0cf7c12b389",
"assets/assets/images/simple_dash_small.png": "52c0ff1003d15ab516633f5f3cf8f5ed",
"assets/assets/images/squirrel1.png": "c9ea6843249150aa1e036a33e5f59d44",
"assets/assets/images/simple_dash_large-sq.png": "6d4699fa6922bd981928d1c04234889e",
"assets/assets/images/shuffle_icon.png": "32ebb4a7c6f9b07157a57f537f254619",
"assets/assets/images/timer_icon.png": "284049eb59c25888ebe6ecf864728727",
"assets/assets/images/simple_dash_medium%25202.png": "4e2fd9dee5fbd150653f06a83be3accf",
"assets/assets/images/logo_flutter_white.png": "fe99d806f7819c9ef2d2c9a1dc350693",
"assets/assets/images/dania-logo_flutter_color.png": "b841fd10c5603dca49a965959b67f809",
"assets/assets/images/dashatar/green/8.png": "93662102668fd38174b7ed33ff5568d5",
"assets/assets/images/dashatar/green/9.png": "89cd14e2e38c44ddde8b25a239a95db0",
"assets/assets/images/dashatar/green/14.png": "ed06960522983d91b329715408e3b333",
"assets/assets/images/dashatar/green/15.png": "0f6689f81e901adeae7fe32e6426fe91",
"assets/assets/images/dashatar/green/12.png": "f1c37270600c441c4520424a7975d055",
"assets/assets/images/dashatar/green/13.png": "bb97746ff3bfc10f1d96ee3d4ceebb56",
"assets/assets/images/dashatar/green/11.png": "ca0fe6fa116d866e12697ce041ff1784",
"assets/assets/images/dashatar/green/10.png": "b308c47cabc47fc434886afa527ada7a",
"assets/assets/images/dashatar/green/4.png": "2de1828926660da587c5d79da3eced84",
"assets/assets/images/dashatar/green/5.png": "afb4129670c172817b2e7104265228d7",
"assets/assets/images/dashatar/green/7.png": "a787f7d6ec89cffea920f38676817504",
"assets/assets/images/dashatar/green/6.png": "3b9b3b64262ae3eb34038363e3a06be8",
"assets/assets/images/dashatar/green/2.png": "4673a939b3312df54cd08556682f0b8c",
"assets/assets/images/dashatar/green/3.png": "b521df46c31076c335e2d70d848a967a",
"assets/assets/images/dashatar/green/1.png": "500a059c72d1b92ab7241906ededd413",
"assets/assets/images/dashatar/success/yellow.png": "463f9b0eddcae6089e8fd33f3ded3164",
"assets/assets/images/dashatar/success/blue.png": "993266c9723f234300d052cd4fda43d1",
"assets/assets/images/dashatar/success/green.png": "7c284d7b36bb5388c4d87b1dd5cf3f88",
"assets/assets/images/dashatar/blue/8.png": "f85f780b2acdb0723cfe9247574dc961",
"assets/assets/images/dashatar/blue/9.png": "859757421a9834b465ea072326a64918",
"assets/assets/images/dashatar/blue/14.png": "b1529b152cf665e8f587dc76629baa72",
"assets/assets/images/dashatar/blue/15.png": "ed4dfbb8092578abbdc0092dd01b5b5f",
"assets/assets/images/dashatar/blue/12.png": "9582964e2cc11f9cd8ee08421eea7aff",
"assets/assets/images/dashatar/blue/13.png": "a4aafad02d3a81899c6bd08f976c6de6",
"assets/assets/images/dashatar/blue/11.png": "62a140db9d8fe9e4bec6825755ae1f0a",
"assets/assets/images/dashatar/blue/10.png": "6551943ffb19c9b312e84a48e03db29d",
"assets/assets/images/dashatar/blue/4.png": "bf3f539c7aa5e7edb5020fc5596195a7",
"assets/assets/images/dashatar/blue/5.png": "74b58ffd8b3269542ea800ac189097ed",
"assets/assets/images/dashatar/blue/7.png": "0a93f3b038b142decb9a53fe688f16f0",
"assets/assets/images/dashatar/blue/6.png": "84fe56b3d5c0b383e44d5208cb8c460b",
"assets/assets/images/dashatar/blue/2.png": "907376332bd745f1c8f22af9335f6a08",
"assets/assets/images/dashatar/blue/3.png": "a18e2f5ed8d7386f60009172f4570d3a",
"assets/assets/images/dashatar/blue/1.png": "5c43c1d4b68c1e781f034b82f3833c52",
"assets/assets/images/dashatar/gallery/green-bk.png": "56aabe4c6f02f0000fb00cf8d7a93544",
"assets/assets/images/dashatar/gallery/yellow.png": "eabac7dca71c6a0d31351e86f68e3d25",
"assets/assets/images/dashatar/gallery/blue.png": "0683f79804beab02d452095167055257",
"assets/assets/images/dashatar/gallery/green.png": "17edfb5542248697e70ea46ae6caa791",
"assets/assets/images/dashatar/gallery/yellow-bk.png": "8529c74259d6963491ceda3a82a8df30",
"assets/assets/images/dashatar/gallery/blue-bk.png": "0d11f20efc6570a048f7fdaaaf91fb01",
"assets/assets/images/dashatar/yellow/8.png": "189dfa9312724ba7d88ae7d5a73af468",
"assets/assets/images/dashatar/yellow/9.png": "65245f58fa38c56e5839cbf1751266c4",
"assets/assets/images/dashatar/yellow/14.png": "f6354cf7679a890b3a7981d505d552b5",
"assets/assets/images/dashatar/yellow/15.png": "82a3b819f4b1467f179295968284d85a",
"assets/assets/images/dashatar/yellow/12.png": "232fd0d7030de544f47d759c5d1953b3",
"assets/assets/images/dashatar/yellow/13.png": "d3dc431c40859a89bcd2c2035639ad20",
"assets/assets/images/dashatar/yellow/11.png": "d3f1fd2760149e51096783e1f8b7dcfc",
"assets/assets/images/dashatar/yellow/10.png": "1c78d6b7144ef0488b41e37ed3bb6ffb",
"assets/assets/images/dashatar/yellow/4.png": "e2f5b9a938197f0267f6bcae8df2bc10",
"assets/assets/images/dashatar/yellow/5.png": "a60e2657fb7af972bde6f5bf424f1c8a",
"assets/assets/images/dashatar/yellow/7.png": "6f4b34147016dfbc999b47ce71d134f9",
"assets/assets/images/dashatar/yellow/6.png": "c9e80074cfc1fe55bcb068c3565e7517",
"assets/assets/images/dashatar/yellow/2.png": "f09180a5d575547da08991e9e579ba2a",
"assets/assets/images/dashatar/yellow/3.png": "ce51e2d3c95da9084643df44cc8edef7",
"assets/assets/images/dashatar/yellow/1.png": "1caa0fcc91842a904c932877cd75a243",
"assets/assets/images/simple_dash_small%25202.png": "b3f2ec92db7be8297f529f94d8e38136",
"assets/assets/images/dania-logo_flutter_color-1.png": "8e248cee3b03e361a92be34e1f8ecdc0",
"assets/assets/images/facebook_icon.png": "284d2a1d2782e5e24b1f9bce25f3ea9a",
"assets/assets/images/simple_dash_medium.png": "b99a496924150a30b073760179c4d923",
"assets/assets/images/twitter_icon.png": "f9a8b83fc280f6a6363783cdbdd81573",
"assets/assets/images/tree1.png": "cf9558e7658a43980bf9224c99f4fbdd",
"assets/assets/images/simple_dash_medium-sq.png": "53d71f581d20ecca736585833a687091",
"assets/assets/audio/sandwich.mp3": "5a3cf659842b0db22ab9495ea2cdc80a",
"assets/assets/audio/skateboard.mp3": "13e460479dc92b0ff1574d35a5204392",
"assets/assets/audio/tile_move.mp3": "f4056eec1581ee5264ab8f481a59d5d3",
"assets/assets/audio/shuffle.mp3": "0ac82d67f08b71d43046256dbc2db12d",
"assets/assets/audio/click.mp3": "7b257864b73a219a79572b785910e685",
"assets/assets/audio/success.mp3": "746679b7331cf687df94188b40ff6f67",
"assets/assets/audio/dumbbell.mp3": "aa341eb857b4fd972767430aa5babb30",
"assets/assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
