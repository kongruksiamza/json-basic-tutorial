const list = document.getElementById("list")
let output=''
fetch("users.json")
.then(res=>res.json())
.then(json=>{
    json.users.forEach(item=>{
        output+="<li>"+item.name+"</li>"
    })
    list.innerHTML=output
}).catch(err=>{
    console.log(err)
})