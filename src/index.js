if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then( registration => {
        console.log('sw registered', registration);
    }).catch(error => {
        console.log('Error registering service worker', error);
    })
}else{
    console.error('Service worker not available on for this browser');
}