// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

const getData=(resource)=>{
    return new Promise((resolve,reject)=>{
        const request= new XMLHttpRequest()
        request.addEventListener('readystatechange',()=>{
            if(request.readyState<4){
                overlay.classList.remove('hidden')
            }else if(request.readyState==4 && request.status==200){
                overlay.classList.add('hidden')
                const data=JSON.parse(request.responseText)
                resolve(data.results)
            }else if(request.readyState==4){
                reject('ERROR!!!')
            }
        })
        request.open('GET',resource);
        request.send();
    })
}
const reload=()=>{
    getData(API)
        .then((data)=>{
            updateUI(data);
        }).catch((err)=>{
            console.log(err)
        })
}
document.addEventListener('DOMContentLoaded',reload)
// const [gender,...]=data
// console.log(gender);
/*

function getdata(resource){
    return new promise((resolve,reject)=>{  

    })
}

 */
