var opEle = document.getElementById("op");
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
    op.innerHTML = "Hey app is on";
    op.innerHTML += "And so is this change";
    op.innerHTML += "And so is this change from mobile";
}
