if("roblox.com"!=window.location.hostname)alert("This script only works on https://www.roblox.com");else{var active=!1,err=0;function check(){active&&(document.getElementById("snipestartbutton").innerText="Cancelled.",setTimeout(function(){document.getElementById("snipestartbutton").innerText="Cancelled.",err=0,active=!1},250),err=1,setTimeout(function(){document.getElementById("snipestartbutton").innerText="Start"},1e3));var page=0;if(isNaN(Number(document.getElementById("userId").value))){var url="https://api.roblox.com/users/get-by-username?username="+document.getElementById("userId").value;console.log(url)}else var url="https://api.roblox.com/users/"+document.getElementById("userId").value;var matches=[],avatars=[],searchGames=function(gid,specifier){if(err<1){var serverURL=`https://www.roblox.com/games/getgameinstancesjson?placeId=${gid}&startindex=${page}`;0==page&&(document.getElementById("snipestartbutton").innerText="Stage 3: Loading..."),fetch(serverURL).then(e=>e.json()).then(function(data){if(page+=10,page>data.TotalCollectionSize)return document.getElementById("snipestartbutton").innerText="Couldn't find user in game! (VIP Server?)",active=!1;document.getElementById("snipestartbutton").innerText="Stage 3: "+page+"/"+data.TotalCollectionSize+" servers checked";for(let i=0;i<data.Collection.length;i++){let server=data.Collection[i];for(let j=0;j<server.CurrentPlayers.length;j++){let player=server.CurrentPlayers[j];if(player.Thumbnail.Url==specifier)return matches.push(server),server.Capacity==server.CurrentPlayers.length?(document.getElementById("snipestartbutton").innerText="Complete! (The game is full!)",setTimeout(function(){document.getElementById("snipestartbutton").innerText="Start"},5e3),eval(server.JoinScript),active=!1,!0):(document.getElementById("snipestartbutton").innerText="Complete!",setTimeout(function(){document.getElementById("snipestartbutton").innerText="Start"},5e3),eval(server.JoinScript),active=!1,!0)}}searchGames(gid,specifier)})}};err<1&&fetch(url).then(e=>e.json()).then(function(e){if(isNaN(url))t=e.Id;else var t=url;document.getElementById("snipestartbutton").innerText="Stage 1...",active=!0,url="https://www.roblox.com/headshot-thumbnail/image?userId="+t+"&width=48&height=48&format=png",fetch(url).then(function(e){const t=e.url;document.getElementById("snipestartbutton").innerText="Stage 2...";var n=Number(document.getElementById("placeId").value)||Number(window.location.pathname.split("/")[2]);searchGames(n,t)})})}var sniperDiv=document.createElement("div");function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){e=e||window.event,o=e.clientX,r=e.clientY,document.onmouseup=a,document.onmousemove=i}function i(s){s=s||window.event,t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function a(){document.onmouseup=null,document.onmousemove=null}document.getElementById("streamsnipergui")?document.getElementById("streamsnipergui").onmousedown=s:e.onmousedown=s}function closewindow(){document.getElementById("streamsniperdiv").remove()}sniperDiv.id="streamsniperdiv",sniperDiv.style="font-family: 'Source Sans Pro', sans-serif;border: 3px solid orange; position: absolute; display: block; left: 0px; background-color: #101211; z-index: 2147483647; top: 0;",sniperDiv.innerHTML='<style>input::placeholder {color: #fff;}</style><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"> <div id="streamsnipergui" style="background-color: orange; cursor: move;"><button style="position:absolute;top: 6px;color:black;text-align: right;display: inline-block;background-color:transparent;font-family:Arial;font-size: 30px;text-decoration:none;border: none;right: 0px;" onclick="closewindow()">X</button><h3 style=" color: black; margin: 0 auto; text-align: center">Web Stream Sniper</h3></div><br><center><p style="color:white; ">Username/UserId</p><input type="text" id="userId" style="margin:10px; text-align: center; color: white; background-color: #323232; font-size: 25px;" placeholder="Enter Username Here"><br><br><p style="color:white; ">Place Id:</p><input type="text" style="text-align: center; color: white; background-color: #323232; font-size: 25px" id="placeId" placeholder="Enter PlaceId Here"><br><br><button id="snipestartbutton" style="background-color: #161616;border: none;width: 95%;padding: 10px;color:white;">Start</button><br><br><p style="color:white">Credits to:</p><p style="color:white">Synapse X for GUI Inspiration</p><p style="color:white">SnowLord7 for game joining code</p><p style="color:white">orrangu on v3rm for making GUI (me!)</p></center>',document.getElementsByTagName("body")[0].appendChild(sniperDiv),dragElement(document.getElementById("streamsniperdiv")),Number(window.location.pathname.split("/")[2])&&(document.getElementById("placeId").value=Number(window.location.pathname.split("/")[2]));var cspbypass0=document.getElementById("snipestartbutton");cspbypass0.addEventListener?cspbypass0.addEventListener("click",check,!1):cspbypass0.attachEvent&&cspbypass0.attachEvent("onclick",check);var cspbypass1=document.getElementById("close");cspbypass1.addEventListener?cspbypass1.addEventListener("click",closewindow,!1):cspbypass1.attachEvent&&cspbypass1.attachEvent("onclick",closewindow)}
