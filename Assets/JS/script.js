let userEl = document.getElementById("User")
let passEl = document.getElementById("Pass")
let loginBtn = document.getElementById("Loginbtn")
document.title = "Log In"
let counter = 0
let users = [["admin01","123"],["admin02","234"],["admin03","345"]]

// loginBtn.addEventListener("click", function(){
//     console.log(counter)
//     if(counter >= 2){
//         alert(`You have reached max attmpts`)
//     }else{
//         counter ++
//         for(let i=0; i<users.length; i++){
//             if(userEl.value == users[i][0] && passEl.value == users[i][1] ){
            
//                 document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
//                 setTimeout(second_page,3000)
//             }
//         }
        
//     }
//     alert(`You still have ${3-counter} attempts`)   
// })

loginBtn.addEventListener("click", function(){
if(counter >=3){
    alert(`Max limit attempts reached`)
}else{
    counter ++
    // alert(`Incorrect Username or Password <br> You still have ${3-counter}`)
    for(let i=0; i<users.length; i++){
        if(userEl.value == users[i][0] && passEl.value == users[i][1]){
            document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
            setTimeout(second_page,3000)
            // if((userEl.value = true) && (passEl.value = true)){
            //     document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
            // setTimeout(second_page,3000)
            }else{
                alert(`Incorrect Username or Password 
You still have ${3-counter} atttempts`)
                break
            }
        }
    }
    
})

function second_page(){
    window.location.replace("list.html")
}          

