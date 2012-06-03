// Generated by CoffeeScript 1.3.3
(function() {

  define(["routes/connect", "routes/disconnect", "routes/home", "routes/new", "routes/collection", "routes/rename", "routes/drop", "routes/empty", "routes/insert", "routes/find", "routes/mapReduce", "routes/edit", "routes/delete"], function(connect, disconnect, home, nu, collection, rename, drop, empty, insert, find, mapReduce, edit, del) {
    return {
      '/': connect,
      '/connect': connect,
      '/disconnect': disconnect,
      '/home': home,
      '/new': nu,
      '/collection/:name': collection,
      '/rename/:name': rename,
      '/drop/:name': drop,
      '/empty/:name': empty,
      '/insert/:name': insert,
      '/find/:name': find,
      '/mapReduce/:name': mapReduce,
      '/edit/:name/:id': edit,
      '/delete/:name/:id/:nativeId': del
    };
  });

}).call(this);
