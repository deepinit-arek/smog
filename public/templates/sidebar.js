define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow,merge){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,merge=jade.merge,buf=[];with(locals||{}){var interp;buf.push('<div class="well sidebar-nav"><ul class="nav nav-list"><li><a href="#/home"><i class="icon-home icon-white"></i>Home</a></li><li><a href="#/settings"><i class="icon-cog icon-white"></i>Settings</a></li><li><a href="#/disconnect"><i class="icon-off icon-white"></i>Disconnect</a></li><li class="divider"></li><li class="nav-header">Collections</li><li><a href="#/new"><i class="icon-plus icon-white"></i>Create new</a></li>'),function(){if("number"==typeof collections.length)for(var a=0,b=collections.length;a<b;a++){var c=collections[a];buf.push("<li><a"),buf.push(attrs({href:"#/collection/"+c+""},{href:!0})),buf.push('> <i class="icon-list-alt icon-white"></i>'+escape((interp=c)==null?"":interp)+"</a></li>")}else for(var a in collections){var c=collections[a];buf.push("<li><a"),buf.push(attrs({href:"#/collection/"+c+""},{href:!0})),buf.push('> <i class="icon-list-alt icon-white"></i>'+escape((interp=c)==null?"":interp)+"</a></li>")}}.call(this),buf.push('</ul></div><div id="editbar"></div>')}return buf.join("")}})