
export default (obj,upindex,name,description)=>{
    return obj.map((item,index)=>index===upindex?{...item,username:name,description:description}:item)
}