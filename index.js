var opEle = document.getElementById("op");
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
    op.innerHTML = "Hey app is on<br/>";
    op.innerHTML += "And so is this change<br/>";
    op.innerHTML += "And so is this change from mobile<br/>";
    op.innerHTML += "Showing demo to rahul<br/>";
}
