import { collection, addDoc, doc, deleteDoc, setDoc, getDocs } from "firebase/firestore";
import { gFb } from "./firebase/fb";

const creatRoom = async () => {
    if (!gFb.user) {
        console.log("Não está logado");
        return;
    }

    try {

        const docRef = await setDoc(doc(gFb.db, "salas", gFb.user.uid), {
            nome: document.getElementById("roomName").value,
            dono: gFb.user.uid
        });

    } catch(error) {

        console.log(error);

    }

    loadRooms()
}



const deleteRoom = async (salaId) => {

    try {

        await deleteDoc(doc(gFb.db, "salas", gFb.user.uid));

    } catch(error) {

        console.log(error);

    }

    loadRooms()
}

const loadRooms = async () => {

    const roomsElement = document.getElementById("publicRooms");

    roomsElement.innerHTML = "";

    try {

        const querySnapshot = await getDocs(
            collection(gFb.db, "salas")
        );

        querySnapshot.forEach((room) => {

            const data = room.data();

            roomsElement.innerHTML += `
                <div>
                    <h3>${data.nome}</h3>
                </div>
            `;

        });

    } catch(error) {

        console.error(error);

    }
}




export function initRooms(elements){
    elements[0].addEventListener("click", creatRoom)
    elements[1].addEventListener("click", deleteRoom)
    elements[2].addEventListener("click", loadRooms)
    loadRooms()
}