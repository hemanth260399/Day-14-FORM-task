function foo(){
    let firstname=document.getElementById("Firstname").value
    let lastname=document.getElementById("Lastname").value
    let email=document.getElementById("Email").value
    let doorno=document.getElementById("flat no").value
    let area=document.getElementById("Area,street,village").value
    let District=document.getElementById("District").value
    let pincode=document.getElementById("pincode").value
    let gender=document.getElementById("Gender").value
    let foods=document.querySelectorAll('.checkbox')
    let state=document.getElementById("State").value
    let country=document.getElementById("Country").value
    let emptyfood=[]
    let foodsplit=[...foods]
    foodsplit.forEach(food=>{
        if(food.checked==true){
            emptyfood.push(food.value)
        }
    })
    emptyfood=emptyfood.join(",")
    console.log(emptyfood)
    let a=document.createElement("table")
    let row1=document.createElement("tr")
    a.append(row1)
    row1.innerHTML="<td>FIRST NAME</td>"
    row1.innerHTML += `<td>${firstname}</td>`
    let row2=document.createElement("tr")
    row2.innerHTML="<td>Last NAME</td>"
    row2.innerHTML += `<td>${lastname}</td>`
    a.append(row2)
    let row3=document.createElement("tr")
    row3.innerHTML="<td>EMAIL ADDRESS</td>"
    row3.innerHTML += `<td>${email}</td>`
    a.append(row3)
    let row4=document.createElement("tr")
    row4.innerHTML="<td>ADDRESS</td>"
    row4.innerHTML += `<td>
    ${doorno},
    ${area},
    ${District}</td>`
    a.append(row4)
    let row5=document.createElement("tr")
    row5.innerHTML="<td>PINCODE</td>"
    row5.innerHTML += `<td>${pincode}</td>`
    a.append(row5)
    let row6=document.createElement("tr")
    row6.innerHTML="<td>GENDER</td>"
    row6.innerHTML += `<td>${gender}</td>`
    a.append(row6)
    let row7=document.createElement("tr")
    row7.innerHTML="<td>Favourite food</td>"
    row7.innerHTML += `<td>${emptyfood}</td>`
    a.append(row7)
    let row8=document.createElement("tr")
    row8.innerHTML="<td>State</td>"
    row8.innerHTML += `<td>${state}</td>`
    a.append(row8)
    let row9=document.createElement("tr")
    row9.innerHTML="<td>Country</td>"
    row9.innerHTML += `<td>${country}</td>`
    a.append(row9)
    document.body.append(a)
    let outerbox=document.getElementById("outerbox").reset()
}
