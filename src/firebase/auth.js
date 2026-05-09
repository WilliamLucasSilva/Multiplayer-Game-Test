import { gFb } from "./fb";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

let loged = document.getElementById("loged");

export function authentication(elements){
    
    login(elements[0])

    logout(elements[1])


    onAuthStateChanged(gFb.auth, (user) => {
        gFb.change("user", user)

        if (user) {

            elements[0].style.display = "none"
            loged.style.display = "flex"
            document.getElementById("profile").src = user.photoURL
            
            renderLogged(user);

        } else {

            elements[0].style.display = "flex"
            loged.style.display = "none"

            renderGuest();

        }

    });
}

function login(element){
    let loginAuth = async () => {

        try {

            const result = await signInWithPopup(gFb.auth, gFb.provider);

            console.log(result.user.uid);

        } catch(error) {

            console.log(error);

        }
    }

    element.addEventListener("click", loginAuth);
}

function logout(element) {
    let logoutAuth = async () => {

        try {

            await signOut(gFb.auth);

        } catch(error) {

            console.log(error);

        }
    }

    element.addEventListener("click", logoutAuth)
}