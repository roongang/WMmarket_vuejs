import { axiosService } from "@/util/axiosUtil";

function getDealPostImageService(imageId){
    return axiosService
    .get("/deal-post-images/" + imageId,{
        responseType: "arraybuffer"
    }).then((res) => {
        console.log("action getDealPostImage :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("getDealPostImage error");
        return err;
    });
}

function deleteDealPostImageService (imageId){
    return axiosService
    .delete("/deal-post-images/" + imageId)
    .then((res) => {
        console.log("action deleteDealPostImage :");
        console.log(res);
        return res;
    }).catch((err) => {
        console.log("deleteDealPostImage error");
        return err;
    });
}

function saveDealPostImageService (dealPostId, files){
    let form = new FormData();
    form.append("dealPostId", dealPostId);
    for (let file of files) {
        form.append("files", file);
    }

    return axiosService
        .post("/deal-post-images", form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log("action saveDealPostImage :");
            console.log(res);
            return res;
        }).catch((err) => {
            console.log("saveDealPostImage error");
            console.log(err);
        });
}

export { getDealPostImageService, deleteDealPostImageService, saveDealPostImageService };