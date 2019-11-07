// Webサーバー
var http = require('http');
    fs = require('fs');
var httpServer = http.createServer();

httpServer.on('request', function(req, res){
    fs.readFile(__dirname + '/index.html', 'utf-8', function(err,data){
        if(err) {
            res.writeHead(404, {'Content-Type':'text-plain'});
            res.write('not found!');
            res.end();
        }
        res.writeHead(200, {'Content-Type':'text-html'});
        res.write(data);
        res.end();        
    });
});
httpServer.listen(1337, '127.0.0.1');
console.log("server listening...");


// WebSocketサーバー
var server = require('ws').Server;
var s = new server({port:5001});

// OSC Sender
var hosturl = "127.0.0.1";
var oscport = 8000;
var oscsender = require('omgosc').UdpSender;
var sender = new oscsender(hosturl, oscport);

// WebSocketで受信したmessageを、OSC送信する
s.on('connection',function(ws){
    ws.on('message',function(message){
		console.log("Received: "+message);
        var mes = JSON.parse(message);
        if(mes.osc){
            // OSC送信
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