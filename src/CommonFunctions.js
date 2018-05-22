module.exports = {
    checkConfirmation: function(hash, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var response = JSON.parse(xmlHttp.responseText);
                callback(response);
            }
        }
        xmlHttp.open("GET", "https://blockchain.info/rawtx/" + hash + "?cors=true", true);
        xmlHttp.send(null);
    },

    queryBlockchainData: function(query, hash, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", query, true);
        xmlHttp.send(null);
    },

    notify: function(text, doit) {
        if(localStorage.getItem("disabledNotifications") != true) {
            Notification.requestPermission(function (permission) {
                if (permission === "granted" && doit == true) {
                    var notification = new Notification("TXWatch", {body: text, icon: "https://txwat.ch/images/logo256x256.png"});
                } else {
                    localStorage.setItem("disabledNotifications", true);
                }
            });
        }
    },

    validateHash: function(hash) {
        var re = /^\w{64}$/;
        return re.test(hash);
    }
};