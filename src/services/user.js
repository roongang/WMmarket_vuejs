import axiosService from "@/util/axiosService";

function signupService(email, password, nickname, role) {
    let form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("nickname", nickname);
    form.append("role", role);

    return axiosService.post("/users", form
    ).then((res) => {
        console.log("action signup :");
        console.log(res);
    }).catch((err) => {
        console.log("signup error");
        console.log(err);
    });
}

function signinService(email, password) {
    return axiosService.post("/signin", {
        email,
        password
    }).then((res) => {
        console.log("action signin :");
        console.log(res);
    }).catch((err) => {
        console.log("signin error");
        console.log(err);
    });
}

function signoutService() {
    return axiosService.post("/signout").then((res) => {
        console.log("action signout :");
        console.log(res);
    }).catch((err) => {
        console.log("signout error");
        console.log(err);
    });
}

export { signupService, signinService, signoutService};