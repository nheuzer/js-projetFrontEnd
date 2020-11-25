import { RedirectUrl } from "./Router.js";
import { getUserSessionData } from "../utils/session.js";
import { API_URL } from "../utils/server.js";
//import { setLayout } from "../utils/render.js";
let profilePage = `<div class="container-fluid panneau">
<ul class="cadre-panneau">
    <li class="username-profile">Username: </li>
    <li class="last-connected">Last connected at: </li>
    <li>
        <a name="" id="" class="btn btn-danger logout-btn" href="#" role="button">Log-out</a>
    </li>
</ul>
</div>`;
const Profile = () => {
    //setLayout("About Us");
    let page = document.querySelector(".page");
    page.innerHTML = profilePage;
}

export default Profile;