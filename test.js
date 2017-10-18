var deluge = require('./index.js')('https://url/json', 'deluge', 'user', 'password');


var callback = function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(result);
};

deluge.getHosts(callback);
deluge.isConnected(callback);
deluge.getTorrentRecord(callback);
