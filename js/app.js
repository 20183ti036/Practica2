if(navigator.serviceWorker){
    console.log("SW funciona")
    navigator.serviceWorker.register('./sw.js')
}