const student= () =>{
    return new Promise(resolve =>
        {
        setTimeout(function(){
            resolve ('Ready waiting for school Bus')
        },2000)
    })
}

const schoolBus = () =>{
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve ('Waiting')
        },3000)
    })
}

const school = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            resolve ('School off !!')
        },5000)
    })
}

const Class = () =>{
return new Promise((resolve, reject) =>{
    setTimeout(function(){
        reject(new Error ('Go to Home !!'))
    },5000)
})
}

async function dession(){
    try{
        const std = await student()
        const schBus = await schoolBus()
        const sch = await school()
        const cls = await Class().catch(err => console.log('Class:',err))
        return {std, schBus, sch, cls}
    }catch(err){
        console.log('School Off: ', err);
            throw err
    }
}

dession().then(sol => console.log('Final Dession :', sol))
.catch(err => console.log('Catch part:', err))