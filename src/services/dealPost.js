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
            return res;
        }).catch((err) => {
            console.log("getDealPostPage error");
            console.log(err);
        });
}

function getDealPostService(id) {
    return axiosService
        .get("/deal-posts/" + id)
        .then((res) => {
            console.log("action getDealPost :");
            return res;
        }).catch((err) => {
            console.log("getDealPost error");
            console.log(err);
        });
}

function updateDealPostService({id, title, content, category, price, viewCnt}) {
    return axiosService
        .put("/deal-posts/" + id, {
            title: title,
            content: content,
            category: category,
            price: price,
            viewCnt: viewCnt
        }).then((res) => {
            console.log("action updateDealPost :");
            console.log(res);
            return res;
        }).catch((err) => {
            console.log("updateDealPost error");
            console.log(err);
            return err;
        });
}

export { saveDealPostService, getDealPostPageService, getDealPostService, updateDealPostService };