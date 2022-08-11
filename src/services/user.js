import { axiosService } from "@/util/axiosUtil";

function signupService(email, password, nickname, role, image) {
    let form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("nickname", nickname);
    form.append("role", role);
    if(image) form.append("image", image);

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

function getUserService(id,email,nickname){
    const params = {
        id: id,
        email: email,
        nickname: nickname
    }
    return axiosService.get("/users",{
        params : params
    }).then((res) => {
        console.log("action getUser :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("getUser error");
        console.log(err);
        return err;
    });
}

function getUserImageService(id){
    return axiosService.get("/users/"+id+"/image",{
        responseType: 'arraybuffer'
    }).then((res) => {
        console.log("action getUserImage :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("getUserImage error");
        console.log(err);
        return err;
    });
}

function saveUserLike(id,dealPostId){
    return axiosService.post("/users/"+id+"/likes",{
        dealPostId: dealPostId
    }).then((res) => {
        console.log("action saveUserLike :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("saveUserLike error");
        console.log(err);
        return err;
    });
}

function getUserLikedDealPostService(id){
    return axiosService.get("/users/"+id+"/likes").then((res) => {
        console.log("action getUserLike :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("getUserLike error");
        console.log(err);
        return err;
    });
}

export { 
    signupService, 
    signinService, 
    signoutService, 
    getUserService, 
    getUserImageService, 
    saveUserLike,
    getUserLikedDealPostService
};