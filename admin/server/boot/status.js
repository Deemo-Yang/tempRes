'use strict';

module.exports = function(server) {
  // Install a `/status` route that returns server status
  // var ds=   server.dataSources.mysql;
  // var lbTables = ['myuser'];
  // ds.automigrate(lbTables, function(er) {
  //   if (er) throw er;
  //   console.log('Loopback tables [' - lbTables - '] created in ',
  //   ds.adapter.name);
  //   ds.disconnect();
  // });

  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  server.use(router);
};
