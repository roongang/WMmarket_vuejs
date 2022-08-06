function createImageUrl(res){
    const image=res.data;
    const blob=new Blob([image],{type:res.headers["content-type"]});
    const url=URL.createObjectURL(blob);
    return url;
}

export { createImageUrl };