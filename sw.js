self.addEventListener('install', (event) => {
    console.log("SW install")
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('css')) {
        const resp = new Response(
            `
                    body {
                        color: grey;
                        background-color: lightgrey;
                    }   
                `,
            {
                headers: {
                    "Content-Type": "text/css",
                },
            }
        );
        event.responseWith(resp);
    }
    changeImage(event);

});


function changeImage(event) {
    if (event.request.url.includes(".jpg")) {
        console.log(event.request.url);
        event.respondWith(fetch("./images/kobe2.jpeg"));
    }
}


