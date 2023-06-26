const obj=[{id:1,name:"Ajay",age:22},{id:2,name:"vijay",age:20}]
console.log(obj)
//adduser
console.log("after adding")
const addUser=(obj)=>{
 obj.push({ id:3,name:"Rohan",age:14});
}
addUser(obj)
console.log(obj)
//edituser
console.log("after editing")
// const EditUser = obj.map(user => {
//   if (user.id == 1) {
//   user.name='Harry';
//   user.age='33'
//  }
//  return user;
// })
const editUser = (id,key,val) => {
  obj.forEach((o) => {
    if(o.id==id){
      o[key]=val
    }
  })
}
console.log(editUser(2,'age',19));
//getUser
const getUser = (id) => {
  return obj.find((it) => it.id === id);
}
const user=getUser(2);
console.log('id:', user.id); 
console.log('Name:', user.name);
console.log('Age:', user.age);
//deleteUser
const deleteUser = (id) => {
    const removeIndex = obj.findIndex(a => a.id === id)
    obj.splice(removeIndex,1)
}
const del=deleteUser(2)
console.log(obj)