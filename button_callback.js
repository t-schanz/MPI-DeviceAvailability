
var button = cb_obj.label;
var page="";

if (button == "Allsky") {page="http://bcoweb.mpimet.mpg.de/camera/allsky/allsky.jpg"}
if (button == "Weather") {page="http://bcoweb.mpimet.mpg.de/quicklooks/weather/wxt_yesterday.png"}
if (button == "Radiation") {page="http://bcoweb.mpimet.mpg.de/quicklooks/radiation/radql.png"}
if (button == "Disdro") {page="http://bcoweb.mpimet.mpg.de/quicklooks/disdrometer/odm_yesterday.png"}
if (button == "HATPRO") {page=""}
if (button == "KIT") {page="NOT RUNNING"}
if (button == "KATRIN") {page="NOT RUNNING"}
if (button == "MBR2") {page="http://bcoweb.mpimet.mpg.de/quicklooks/mbr2ql/MBR2_QL.png"}
if (button == "MRR") {page="http://bcoweb.mpimet.mpg.de/quicklooks/mrr-bco/mrr_yesterday.png"}
if (button == "Ceilometer") {page="http://bcoweb.mpimet.mpg.de/quicklooks/ceilometer/ceilo_ql.png"}
if (button == "WindLidar") {page="http://bcoweb.mpimet.mpg.de/quicklooks/windlidar/wl_yesterday.png"}
if (button == "EARLI") {page=""}
if (button == "LICHT") {page=""}

if (page==""){
    document.getElementById("buttonInfo").innerHTML = "There is no Quickfew for the " + cb_obj.label + " yet.";
    alert("There is no Quickfew for the " + cb_obj.label + " yet.")
}
else if (page == "NOT RUNNING") {
    document.getElementById("buttonInfo").innerHTML = "The " + cb_obj.label + " is not running at the moment.";
    alert("The " + cb_obj.label + " is not running at the moment.")
}
else {
    var win = window.open(page);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}
