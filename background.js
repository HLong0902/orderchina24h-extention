var Background = function () {

    this.request_server = async function (request, sender, sendResponse) {
        let cookies = await chrome.cookies.getAll({ url: "https://giaodich.hangquangchau24h.vn/"});
        console.log(cookies);
        const response = await fetch(request.url, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer sfraserges'
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
        background[request.action](request, sender, sendResponse);
    }
);