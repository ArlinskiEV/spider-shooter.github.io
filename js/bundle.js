!function(e){function t(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,"e",function(){return n}),i.d(t,"d",function(){return o}),i.d(t,"b",function(){return a}),i.d(t,"c",function(){return l}),i.d(t,"a",function(){return h});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),n=function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0],a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];r(this,e),this.img=t,this.size=i,this.pos=s,this.speed=n,this.stills=o,this.noRepeat=a,this._order=0,this.order=0,this.lastOrder=!1},o=function(){function e(t,i,s,n){r(this,e),this.pos=n||{x:0,y:0},this.sprites=t,this.rotate=s||{angle:[0],x:0,y:0},this.size=i||{x:this.sprites.size[0],y:this.sprites.size[1]}}return s(e,[{key:"updateSprites",value:function(e){this.sprites._order+=this.sprites.speed*e,this.sprites.order=Math.floor(this.sprites._order)%this.sprites.stills.length,this.sprites.noRepeat&&Math.floor(this.sprites._order)>this.sprites.stills.length-1&&(this.sprites.lastOrder=!0)}}]),e}(),a=function(){function e(){r(this,e),this.arr=[]}return s(e,[{key:"add",value:function(e){this.arr.push(e)}},{key:"getEntities",value:function(){for(var e=[],t=0;t<this.arr.length;t++)Array.isArray(this.arr[t])?e=e.concat(this.arr[t]):e.push(this.arr[t]);return e}}]),e}(),l=function(){function e(){r(this,e),this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d")}return s(e,[{key:"render",value:function(e,t){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e.getEntities(),s=0;s<r.length;s++){var n=r[s].sprites.stills[r[s].sprites.order];this.ctx.save(),this.ctx.translate(r[s].pos.x,r[s].pos.y),this.ctx.rotate(r[s].rotate.angle[0]),this.ctx.drawImage(Array.isArray(r[s].sprites.img)?r[s].sprites.img[n]:r[s].sprites.img,Array.isArray(r[s].sprites.img)?r[s].sprites.pos[0]:r[s].sprites.pos[0]+n*r[s].sprites.size[0],r[s].sprites.pos[1],r[s].sprites.size[0],r[s].sprites.size[1],-r[s].rotate.x*i,-r[s].rotate.y*i,r[s].size.x*i,r[s].size.y*i),this.ctx.restore()}}},{key:"width",set:function(e){this.domElement.width=e},get:function(){return this.domElement.width}},{key:"height",set:function(e){this.domElement.height=e},get:function(){return this.domElement.height}}]),e}(),h=function(){function e(){r(this,e),this.mousemove={x:0,y:0},this.mouseLeft=!1,this.mouseRight=!1,this.wheel={up:!1,down:!1},this.key={}}return s(e,[{key:"start",value:function(){var e=this;document.addEventListener("mousedown",function(t){1==t.which&&(e.mouseLeft=!0),3==t.which&&(e.mouseRight=!0)}),document.addEventListener("mouseup",function(t){1==t.which&&(e.mouseLeft=!1),3==t.which&&(e.mouseRight=!1)}),document.oncontextmenu=function(){return!1},document.addEventListener("mousemove",function(t){e.mousemove.x=t.clientX,e.mousemove.y=t.clientY}),document.addEventListener("keydown",function(t){e.key[t.keyCode]=!0}),document.addEventListener("keyup",function(t){e.key[t.keyCode]=!1}),document.addEventListener("wheel",function(t){120==t.wheelDelta&&(e.wheel={up:!0,down:!1}),-120==t.wheelDelta&&(e.wheel={up:!1,down:!0})}),window.addEventListener("blur",function(){e.mousemove={x:0,y:0},e.mouseLeft=!1,e.mouseRight=!1,e.wheel={up:!1,down:!1},e.key={}})}}]),e}()},function(e,t,i){"use strict";function r(e){var t=[e[0]];if(2==e.length||3==e.length)for(var i=++e[0];i<=e[1];i++)t.push(i);if(3==e.length)for(var r=--e[1];r>=e[2];r--)t.push(r);return t}t.a=r},function(e,t,i){"use strict";var r=i(7),s=i(6),n=i(5);i.d(t,"a",function(){return r.a}),i.d(t,"c",function(){return s.a}),i.d(t,"b",function(){return n.a})},function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),n=function(){function e(){r(this,e),this.loaderStatusArr=[],this.resourcesArr=[],this.resourcesObj={},this.callbackArr=[]}return s(e,[{key:"loaderStatus",value:function(e){return this.loaderStatusArr.push(e),this}},{key:"callbac",value:function(e){return this.callbackArr.push(e),this}},{key:"add",value:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];for(var r=0;r<t.length;r++)Array.isArray(t[r])?this.resourcesArr=this.resourcesArr.concat(t[r]):this.resourcesArr.push(t[r]);return this}},{key:"start",value:function(){for(var e=function(e){var i=new Image;i.onload=function(){this.resourcesObj[e]=i;var r=t();this.loaderStatusArr.forEach(function(e){e(r)}),100==r&&this.callbackArr.forEach(function(e){e()})}.bind(this),this.resourcesObj[e]=null,i.src=e}.bind(this),t=function(){var e=0,t=0;for(var i in this.resourcesObj)this.resourcesObj.hasOwnProperty(i)&&this.resourcesObj[i]&&e++,t++;return Math.floor(e/t*100)}.bind(this);this.resourcesArr.length;){var i=this.resourcesArr.pop();this.resourcesObj.hasOwnProperty(i)||e(i)}}},{key:"get",value:function(e){return this.resourcesObj[e]}}]),e}();t.a=n},function(e,t,i){"use strict";var r=i(11),s=i(9),n=i(10),o=i(12),a=i(13),l=i(14);i.d(t,"f",function(){return r.a}),i.d(t,"c",function(){return n.a}),i.d(t,"a",function(){return s.a}),i.d(t,"b",function(){return o.a}),i.d(t,"e",function(){return a.a}),i.d(t,"d",function(){return l.a})},function(e,t,i){"use strict";function r(e){for(var t={size:{x:4e3,y:4e3},pos:{x:-1e3,y:-1e3},arr:[]},i={x:500,y:500},r=0;r<64;r++)t.arr.push(new s.d(new s.e(e.get("./img/floortiles.png"),[512,512],[0,0],0,[0]),i));for(var n=0;n<10;n++)t.arr[Math.floor(Math.random()*t.arr.length)]=new s.d(new s.e(e.get("./img/floortiles_drain.png"),[512,512],[0,0],0,[0]),i);return t}var s=i(0);t.a=r},function(e,t,i){"use strict";function r(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=e.get(t),l={angle:[0],pos:{x:0,y:0},attackBool:!1,dieBool:!1,size:[32.5*r,32.5*r]},h=void 0,u=void 0,c=void 0;return h=new s.e(a,[65,65],[0,0],o,i.i(n.a)([0,5])),u={x:h.size[0]*r,y:h.size[1]*r},c={angle:l.angle,x:h.size[0]/2*r,y:h.size[1]/2*r},l.run=new s.d(h,u,c,l.pos),h=new s.e(a,[65,65],[0,65],o,i.i(n.a)([0,3]),!0),u={x:h.size[0]*r,y:h.size[1]*r},c={angle:l.angle,x:h.size[0]/2*r,y:h.size[1]/2*r},l.attack=new s.d(h,u,c,l.pos),h=new s.e(a,[65,65],[0,130],o,i.i(n.a)([0,4]),!0),u={x:h.size[0]*r,y:h.size[1]*r},c={angle:l.angle,x:h.size[0]/2*r,y:h.size[1]/2*r},l.die=new s.d(h,u,c,l.pos),l}var s=i(0),n=i(1);t.a=r},function(e,t,i){"use strict";function r(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,o=e.get("./img/survivor_handgun.png"),a=e.get("./img/feet_survivor.png"),l=e.get("./img/flash.png"),h={body:{handgun:{},knife:{},rifle:{},shotgun:{}},feet:{},angle:[0],pos:{x:0,y:0},size:[260/3*t,220/3*t]},u=[["idle",[132,155],[0,0],[0]],["run",[204,124],[0,155],[0,19]],["left",[155,174],[0,279],[0,19]],["right",[154,176],[0,453],[0,19]],["walk",[172,124],[0,629],[0,19]]],c=[["idle",[253,216],[0,0],[0,9,1],97,120.5,!1],["meleeattack",[291,256],[0,216],[0,14],104,124.5,!0],["move",[258,220],[0,472],[0,9,1],102,119.5,!1],["reload",[260,230],[0,692],[0,14],101,119.5,!0],["shoot",[255,215],[0,922],[0,2],99,119.5,!0]],f=void 0,d=void 0,p=void 0,g=0;g<u.length;g++)f=new s.e(a,u[g][1],u[g][2],r,i.i(n.a)(u[g][3])),d={x:f.size[0]*t,y:f.size[1]*t},p={angle:h.angle,x:f.size[0]/2*t,y:f.size[1]/2*t},h.feet[u[g][0]]=new s.d(f,d,p,h.pos);for(var x=0;x<c.length;x++)f=new s.e(o,c[x][1],c[x][2],r,i.i(n.a)(c[x][3]),c[x][6]),d={x:f.size[0]*t,y:f.size[1]*t},p={angle:h.angle,x:c[x][4]*t,y:c[x][5]*t},h.body.handgun[c[x][0]]=new s.d(f,d,p,h.pos);return f=new s.e(l,[177,153],[0,0],r,[1,0,1],!0),d={x:f.size[0]/2*t,y:f.size[1]/2*t},p={angle:h.angle,x:-133*t,y:-7*t},h.body.handgun.flash=new s.d(f,d,p,h.pos),h}var s=i(0),n=i(1);t.a=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),s=i(0),n=i(2),o=i(4),a=new r.a,l=new s.a,h=new s.b,u=new s.c,c={};c.health=100,c.shoot=!1,c.meleeattack=!1,c.reload=!1,c.bullet=0,c.bite=0,c.countBullet=480,c.clip=8,c.score=0,c.lastTime,c.x=0,c.y=0,c.a=0,c.b=0;var f=void 0,d=void 0,p=[],g=[],x=[],y=[],v=void 0;document.body.appendChild(u.domElement);var m=function(){l.start(),f=n.a(a),d=f.body.handgun,p.push(f.feet.idle),p.push(d.idle),v=n.b(a),h.add(v.arr);for(var e=0;e<400;e++){var t=n.c(a,"./img/spider_red.png",1.5,10);t.pos.x=4e4*Math.random()-2e4,t.pos.y=4e4*Math.random()-2e4,g.push(t),x.push(t.run)}h.add(y),h.add(p),h.add(x),c.lastTime=Date.now(),w()},w=function e(){var t=Date.now(),i=(t-c.lastTime)/1e3;o.a(v,u,c),o.b(i,u,l,y,f,g,c),o.c(i,l,v,u,f,p,d,c),o.d(a,f,g,x,l,y,c),o.e(i,p,x,g,d,c),u.render(h,i,1),o.f(u,c),c.lastTime=t,g.length&&c.health?requestAnimationFrame(e):c.health?(u.ctx.save(),u.ctx.fillStyle="rgba(0,0,0,0.8)",u.ctx.fillRect(0,0,u.width,u.height),u.ctx.restore(),u.ctx.font="100px serif",u.ctx.fillStyle="rgba(255,0,0,0.8)",u.ctx.fillText("WIN",u.width/2-100,u.height/2),u.ctx.font="65px serif",u.ctx.fillStyle="rgba(0,255,0,0.8)",u.ctx.fillText("SCORE "+c.score,u.width/2-110,u.height/2+100),u.ctx.font="45px serif",u.ctx.fillStyle="rgba(0,0,255,0.8)",u.ctx.fillText("Restart F5",u.width/2-100,u.height/2+200)):(u.ctx.save(),u.ctx.fillStyle="rgba(0,0,0,0.8)",u.ctx.fillRect(0,0,u.width,u.height),u.ctx.restore(),u.ctx.font="100px serif",u.ctx.fillStyle="rgba(255,0,0,0.8)",u.ctx.fillText("Game Over",u.width/2-200,u.height/2),u.ctx.font="65px serif",u.ctx.fillStyle="rgba(0,255,0,0.8)",u.ctx.fillText("SCORE "+c.score,u.width/2-110,u.height/2+100),u.ctx.font="45px serif",u.ctx.fillStyle="rgba(0,0,255,0.8)",u.ctx.fillText("Restart F5",u.width/2-100,u.height/2+200))},b=function(e){u.width=window.innerWidth,u.height=window.innerHeight,u.ctx.fillStyle="rgb(0,0,0)",u.ctx.fillRect(0,0,u.width,u.height),u.ctx.font="100px serif",u.ctx.fillStyle="rgba(255,0,0,0.8)",u.ctx.fillText(e+"%",u.width/2-100,u.height/2)};a.add("./img/floortiles_drain.png","./img/survivor_handgun.png","./img/feet_survivor.png","./img/flash.png","./img/spider_red.png","./img/blood_red.png","./img/floortiles.png","./img/cracks.png").loaderStatus(b).callbac(m).start()},function(e,t,i){"use strict";function r(e,t,i){t.width=window.innerWidth,t.height=window.innerHeight,t.ctx.fillStyle="black",t.ctx.fillRect(0,0,t.width,t.height),e.pos.x+=i.x,e.pos.y+=i.y;for(var r=0,s=0;s<8;s++)for(var n=0;n<8;n++)e.arr[r].pos.x=e.pos.x+500*n,e.arr[r].pos.y=e.pos.y+500*s,r++}t.a=r},function(e,t,i){"use strict";function r(e,t,i,r,s,n,o,a){t.key[38]||t.key[87]?(i.pos.y>=-50&&i.pos.y<=0&&a.b>-r.height/2+50?a.b-=300*e:-i.pos.y+r.height>=i.size.y-50&&-i.pos.y+r.height<=i.size.y&&a.b>0?a.b-=300*e:i.pos.y>=-50&&i.pos.y<=0||(a.y+=300*e),s.angle[0]>Math.PI/4&&s.angle[0]<3*Math.PI/4||s.angle[0]<-Math.PI/4&&s.angle[0]>3*-Math.PI/4?n[0]=s.feet.walk:s.angle[0]<=Math.PI/4||s.angle[0]>=-Math.PI/4?n[0]=s.feet.left:(s.angle[0]>=3*Math.PI/4||s.angle[0]<=3*-Math.PI/4)&&(n[0]=s.feet.right)):(t.key[40]||t.key[83])&&(i.pos.y>=-50&&i.pos.y<=0&&a.b<0?a.b+=300*e:-i.pos.y+r.height>=i.size.y-50&&-i.pos.y+r.height<=i.size.y&&a.b<r.height/2-50?a.b+=300*e:-i.pos.y+r.height>=i.size.y-50&&-i.pos.y+r.height<=i.size.y||(a.y-=300*e),s.angle[0]>Math.PI/4&&s.angle[0]<3*Math.PI/4||s.angle[0]<-Math.PI/4&&s.angle[0]>3*-Math.PI/4?n[0]=s.feet.walk:s.angle[0]<=Math.PI/4||s.angle[0]>=-Math.PI/4?n[0]=s.feet.right:(s.angle[0]>=3*Math.PI/4||s.angle[0]<=3*-Math.PI/4)&&(n[0]=s.feet.left)),t.key[39]||t.key[68]?(i.pos.x>=-50&&i.pos.x<=0&&a.a<0?a.a+=300*e:-i.pos.x+r.width>=i.size.x-50&&-i.pos.x+r.width<=i.size.x&&a.a<r.width/2-50?a.a+=300*e:-i.pos.x+r.width>=i.size.x-50&&-i.pos.x+r.width<=i.size.x||(a.x-=300*e),s.angle[0]>Math.PI/4&&s.angle[0]<3*Math.PI/4?n[0]=s.feet.left:s.angle[0]<-Math.PI/4&&s.angle[0]>3*-Math.PI/4?n[0]=s.feet.right:(s.angle[0]<=Math.PI/4||s.angle[0]>=-Math.PI/4||s.angle[0]>=3*Math.PI/4||s.angle[0]<=3*-Math.PI/4)&&(n[0]=s.feet.walk)):(t.key[37]||t.key[65])&&(i.pos.x>=-50&&i.pos.x<=0&&a.a>-r.width/2+50?a.a-=300*e:-i.pos.x+r.width>=i.size.x-50&&-i.pos.x+r.width<=i.size.x&&a.a>0?a.a-=300*e:i.pos.x>=-50&&i.pos.x<=0||(a.x+=300*e),s.angle[0]>Math.PI/4&&s.angle[0]<3*Math.PI/4?n[0]=s.feet.right:s.angle[0]<-Math.PI/4&&s.angle[0]>3*-Math.PI/4?n[0]=s.feet.left:(s.angle[0]<=Math.PI/4||s.angle[0]>=-Math.PI/4||s.angle[0]>=3*Math.PI/4||s.angle[0]<=3*-Math.PI/4)&&(n[0]=s.feet.walk)),t.key[38]||t.key[87]||t.key[40]||t.key[83]||t.key[39]||t.key[68]||t.key[37]||t.key[65]?a.shoot||(n[1]=o.move):(n[0]=s.feet.idle,a.shoot||(n[1]=o.idle)),!t.mouseLeft||a.shoot||!a.countBullet&&!a.clip||a.reload||a.meleeattack||(a.shoot=!0,n[1]=o.shoot,n[2]=o.flash)}t.a=r},function(e,t,i){"use strict";function r(e,t){e.ctx.save(),e.ctx.font="48px serif",e.ctx.fillStyle="rgb("+(255-Math.floor(255*t.health/100))+",0,0)",e.ctx.fillText(""+t.health,10,50),e.ctx.restore(),e.ctx.save(),e.ctx.font="48px serif",e.ctx.fillStyle="rgba(0,0,0,0.9)",e.ctx.fillText(t.clip+" / "+t.countBullet,e.width-150,e.height-10),e.ctx.restore(),e.ctx.save(),e.ctx.font="48px serif",e.ctx.fillStyle="rgba(0,255,0,0.9)",e.ctx.fillText(""+t.score,e.width-150,50),e.ctx.restore()}t.a=r},function(e,t,i){"use strict";function r(e,t,i,r,s,n,o){for(var a=0;a<r.length;a++)r[a].pos.x+=o.x,r[a].pos.y+=o.y;s.pos.x=t.width/2+o.a,s.pos.y=t.height/2+o.b,s.angle[0]=Math.atan2(i.mousemove.y-s.pos.y,i.mousemove.x-s.pos.x);for(var l=0;l<n.length;l++)n[l].attackBool?(n[l].pos.x+=o.x,n[l].pos.y+=o.y,n[l].angle[0]=Math.atan2(n[l].pos.y-s.pos.y,n[l].pos.x-s.pos.x)+Math.PI/2):n[l].dieBool?(n[l].pos.x+=o.x,n[l].pos.y+=o.y):(n[l].angle[0]=Math.atan2(n[l].pos.y-s.pos.y,n[l].pos.x-s.pos.x)+Math.PI/2,s.pos.x-n[l].pos.x<0?n[l].pos.x-=100*Math.abs(Math.cos(n[l].angle[0]-Math.PI/2))*e-o.x:n[l].pos.x+=100*Math.abs(Math.cos(n[l].angle[0]-Math.PI/2))*e+o.x,s.pos.y-n[l].pos.y<0?n[l].pos.y-=100*Math.abs(Math.sin(n[l].angle[0]-Math.PI/2))*e-o.y:n[l].pos.y+=100*Math.abs(Math.sin(n[l].angle[0]-Math.PI/2))*e+o.y);o.x=0,o.y=0}t.a=r},function(e,t,i){"use strict";function r(e,t,i,r,s,n){t[0].updateSprites(e),t[1].updateSprites(e),n.clip||n.reload||!n.countBullet||(n.reload=!0,t[1]=s.reload,n.countBullet+=-8),t[1].sprites.lastOrder&&(t[1].sprites.lastOrder=!1,t[1].sprites._order=0,t[1]=s.idle,n.reload&&(n.clip=8),n.shoot=!1,n.meleeattack=!1,n.reload=!1),t[2]&&(t[2].updateSprites(e),1==t[2].sprites.order&&n.bullet++,t[2].sprites.lastOrder&&(t[2].sprites.lastOrder=!1,t[2].sprites._order=0,t.pop(),n.bullet=0));for(var o=0;o<i.length;o++)i[o].updateSprites(e),r[o].attackBool&&(2==i[o].sprites.order&&n.bite++,i[o].sprites.lastOrder&&(r[o].attackBool=!1,i[o].sprites.lastOrder=!1,i[o].sprites._order=0,i[o]=r[o].run,n.bite=0)),r[o].dieBool&&i[o].sprites.lastOrder&&(r.splice(o,1),i.splice(o,1),o--)}t.a=r},function(e,t,i){"use strict";function r(e,t,i,r,n,o,a){function l(e,t,i,r,s,n,o,a){return!(e>=o||t>=a||i<=s||r<=n)}function h(e,t){return l(e.pos.x-e.size[0]/2,e.pos.y-e.size[1]/2,e.pos.x+e.size[0]/2,e.pos.y+e.size[1]/2,t.pos.x-e.size[1]/2,t.pos.y-t.size[1]/2,t.pos.x+t.size[0]/2,t.pos.y+t.size[1]/2)}for(var u=0;u<i.length;u++)!h(i[u],t)||i[u].attackBool||i[u].dieBool||(i[u].attackBool=!0,r[u]=i[u].attack);for(var c=0;c<i.length;c++)for(var f=1,d=c+1;d<i.length;d++){f++;for(var p=0;h(i[c],i[d])&&p++<4;)f%2==0?i[c].pos.y>i[d].pos.y?(++i[c].pos.y,--i[d].pos.y):(--i[c].pos.y,++i[d].pos.y):i[c].pos.x>i[d].pos.x?(++i[c].pos.x,--i[d].pos.x):(--i[c].pos.x,++i[d].pos.x)}if(1==a.bullet){a.clip--;var g=n.mousemove.x,x=n.mousemove.y,y={},v=!0;y.x=t.pos.x,y.y=t.pos.y;e:for(;Math.round(y.x)!=Math.round(n.mousemove.x)&&Math.round(y.y)!=Math.round(n.mousemove.y);){for(var m=0;m<i.length;m++)if(h(i[m],{pos:{x:y.x,y:y.y},size:[0,0]})&&!i[m].dieBool){a.score+=100,i[m].attackBool=!1,i[m].dieBool=!0,r[m]=i[m].die,o.push(new s.d(new s.e(e.get("./img/blood_red.png"),[256,256],[0,0],0,[0]),{x:60,y:60},{angle:i[m].angle[0],x:30,y:30},{x:i[m].pos.x,y:i[m].pos.y})),v=!1;break e}y.x+=.1*(g-y.x),y.y+=.1*(x-y.y)}v&&(a.score--,o.push(new s.d(new s.e(e.get("./img/cracks.png"),[256,256],[0,0],0,[0]),{x:30,y:30},{angle:0,x:15,y:15},{x:y.x,y:y.y})))}1==a.bite&&(a.health-=5)}var s=i(0);t.a=r}]);