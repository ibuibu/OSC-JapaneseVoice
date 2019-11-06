var server = require('ws').Server;
var s = new server({port:5001});

var hosturl = "127.0.0.1";
var oscport = 8000;

// OSC Senderを立ち上げる
var oscsender = require('omgosc').UdpSender;
var sender = new oscsender(hosturl, oscport);


s.on('connection',function(ws){

    ws.on('message',function(message){
				console.log("Received: "+message);

        var mes = JSON.parse(message);
        if(mes.osc){    // チェック甘！
                // OSCで送信
            sender.send(mes.path,mes.type,[mes.data]);
        }

				s.clients.forEach(function(client){
            client.send(message+' : '+new Date());
        });
    });

    ws.on('close',function(){
        console.log('I lost a client');
    });

});