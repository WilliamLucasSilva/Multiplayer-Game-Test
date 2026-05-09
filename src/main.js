import { initFb } from "./firebase/init";
import { authentication } from "./firebase/auth";
import { initRooms } from "./room";



initFb();
authentication([document.getElementById("login"), document.getElementById("logout")])
initRooms([
    document.getElementById("roomForm"),
    document.getElementById("deleteRoom"),
    document.getElementById("refresh"),
])
