import data from "../../data.json";

const promise = new Promise((resolve, reject)=>{
    let status = 200

    if(status === 200){
        setTimeout(()=>{
            resolve(data)
        }, 1000)
    }else{
        setTimeout(()=>{
            reject("Status other than 200")
        }, 1000)
    }
});

export const getData=()=>{
    return(
        promise
    )
}