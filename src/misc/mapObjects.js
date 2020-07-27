
export default (item)=>{
    let obj ={}
    obj['url']= item.urls.regular;
    obj['description'] = item.description;
    obj['username'] = item.user.username;
    obj['profileImg'] = item.user.profile_image.medium;
    return obj;
}