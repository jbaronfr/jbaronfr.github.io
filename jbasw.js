importScripts('/serviceworker-cache-polyfill.js');

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('jbaronfr').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.html?homescreen=1',
                '/?homescreen=1',
                '/assets/css/main.css',
                '/assets/css/font-awesome.min.css',
                '/assets/css/images/overlay.png',
                '/assets/css/fonts.googleapis.com.css',
                '/assets/css/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2',
                '/assets/fonts/fontawesome-webfont.eot',
                '/assets/fonts/fontawesome-webfont.svg',
                '/assets/fonts/fontawesome-webfont.ttf',
                '/assets/fonts/fontawesome-webfont.woff',
                '/assets/fonts/fontawesome-webfont.woff2',
                '/assets/fonts/FontAwesome.otf',
                '/assets/js/respond.min.js',
                '/images/avatar.png',
                '/images/bg.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});