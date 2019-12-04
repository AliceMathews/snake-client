const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: ALM');
    
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);
    // setTimeout( () => {
    //   conn.write('Move: left');
    // }, 1000)
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};
module.exports = { connect }