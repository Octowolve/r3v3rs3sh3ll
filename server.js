var net = require('net');
var stdin = process.openStdin();

var server = net.createServer(function(connection) { 
   console.log('client connected # ', connection.remoteAddress + ':' + connection.remotePort);
   connection.on('end', function() {
      console.log('client disconnected');
   });
   stdin.addListener("data", function(d) { 	
   connection.write(d.toString());
   });
   connection.on('data', function(d){
   console.log(d.toString())
   });
});
server.listen(1337, function() { 
   console.log('server is listening');
});
