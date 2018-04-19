var opEle = document.getElementById("op");
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
    op.innerHTML = "Hey app is on";
}
