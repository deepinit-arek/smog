define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow,merge){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,merge=jade.merge,buf=[];with(locals||{}){var interp;buf.push('<div id="connect-modal" class="modal small-modal"><div class="modal-header"><h3>Connect</h3></div><div class="modal-body"><input id="host" type="text" placeholder="Host" value="localhost" class="small-modal-box"/><input id="port" type="text" placeholder="Port" value="27017" class="small-modal-box"/><input id="database" type="text" placeholder="Database" value="test" class="small-modal-box"/></div><div class="modal-footer"><a id="connect-button" class="btn btn-primary">Connect</a></div></div>')}return buf.join("")}})