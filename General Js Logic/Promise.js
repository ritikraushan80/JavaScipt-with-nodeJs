const checkPromise =  function(empType){
    return new Promise((resolve, reject) =>{
        if (empType == 'Full Time') {
           resolve('I am Full time employee !!')
        }else{
            reject('I am Part time employee !!')
        }
    })
}
checkPromise('Full Time').then(data => console.log('True:', data))
.catch(err => console.log('Flase:', err))