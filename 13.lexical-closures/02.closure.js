// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Closure aur chai</title>
// </head>
// <body style="background-color: #313131;">
//     <button id="orange">Orange</button>
//     <button id="green">Green</button>
// </body>

//     <script>
//         // document.getElementById("orange").onclick = function(){
//         //     document.body.style.backgroundColor = `orange`
//         // }
//         // document.getElementById("green").onclick = function(){
//         //     document.body.style.backgroundColor = `green`
//         // }

//         function clickHandler(color){
//             // document.body.style.backgroundColor = `${color}`

//             return function(){
//                 document.body.style.backgroundColor = `${color}`
//             }
//         }

//         document.getElementById('orange').onclick = clickHandler("orange")
//         document.getElementById('green').onclick = clickHandler("green")
//     </script>
// </html>