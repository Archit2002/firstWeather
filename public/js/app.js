
// console.log('Client')
// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data) => {
//         if(data.msg){
//             console.log(data.msg)
//         }
//         else{
//             console.log(data.location)
//             console.log("temperature is " + data.forecast.temperature)
//         }
        
    
//     })
// })
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message11=document.querySelector('#One')
const message22=document.querySelector('#Two')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    message11.textContent='Loading...'
    message22.textContent=''
    fetch('/weather?address='+ encodeURIComponent(location)).then((response)=>{
    response.json().then((data) => {
        if(data.msg){
            // console.log(data.msg)
            message11.textContent=data.msg
        }
        else{
            message11.textContent=data.location
            message22.textContent="temperature is " + data.forecast.temperature
            // console.log(data.location)
            // console.log("temperature is " + data.forecast.temperature)
        }
        
    
    })
})
    // console.log('testing')
})