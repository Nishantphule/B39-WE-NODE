const fs = require('fs');


// write

const quote = "live it free"
fs.writeFile('./goku.html',quote,(err) => {
    console.log("Completed Writing!!")
})

const quote2 = " Live more worry less "

const [,,a] = process.argv

// for(var i=1;i<=a;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2, (err) => {
//             console.log("Completed Writing File!!")
//     })
// }

for(i=1;i<=a;i++){
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err) => {
        if(err) {
            console.log("❌")
        }
        else{
            console.log("Completed Writing File!!")
        }
    })
}



// read

// fs.readFile("./goku.txt","utf-8", (err,data) => {
//     if(err) {
//         console.log("❌")
//     }
//     else{
//         console.log(data)
//     }
    
// })



// update

// var quote3 = "Good afternoon"

// fs.appendFile('./goku.txt',quote3+"\n",(err) => {
//         console.log("Completed Writing!!")
//     })



// delete

fs.unlink("./delete.html", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Completed deleting!!!")
    }
})
