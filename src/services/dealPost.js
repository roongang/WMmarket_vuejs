import { axiosService } from "@/util/axiosUtil";

function saveDealPostService (title, content, category, price, files) {
    let form = new FormData();
    form.append("title", title);
    form.append("content", content);
    form.append("category", category);
    form.append("price", price);
    for (let file of files) {
        form.append("files", file);
    }

    return axiosService
        .post("/deal-posts", form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            console.log("action saveDealPost :");
            console.log(res);
        }).catch((err) => {
            console.log("saveDealPost error");
            console.log(err);
        });
}

function getDealPostPageService(page, size) {
    const params = {
        page: page,
        size: size
    }
    return axiosService
        .get("/deal-posts/page",{
            params : params
        }).then((res) => {
            console.log("action getDealPostPage :");
            console.log(res);
        }).catch((err) => {
            console.log("getDealPostPage error");
            console.log(err);
        });
}

export { saveDealPostService, getDealPostPageService };