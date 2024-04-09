var Background = function () {

    this.request_server = async function (request, sender, sendResponse) {
        const response = await fetch(request.url, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(r => r.json())
            .then(res => {
                chrome.tabs.sendMessage(sender.tab.id, {action: request.callback, response: res}, function (response) {
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                chrome.tabs.sendMessage(sender.tab.id, {action: request.callback, response: null}, function (response) {

                });

            });
    };
};

var background = new Background();

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type) {
            chrome.cookies.get({ url: request.url, name: request.name }, function(cookies) {
                console.log(cookies);
                chrome.tabs.sendMessage(sender.tab.id, {action: 'cookies', cookies: cookies}, function (response) {
                });
            });
        } else {
            background[request.action](request, sender, sendResponse);
        }
    }
);