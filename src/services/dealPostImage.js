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

export { getDealPostImageService };