let arr =[1,2,3,4,5,6,7]

// arr.forEach((item,index) =>{
//   console.log(item,index)
// })

// const newArr = arr.map((item) =>{
//   return item * 2
// })
// console.log(newArr);

//reduce

const elem = arr.find((item,index) => item === 4 )


console.log(typeof +'2');




// const a = [1, 2, 3]
// console.log(a[2]);
// console.log(a.at(-1));

//document.body.previousElementSibling()

// localStorage examples
// const phoneNumber = ['998900909840','998974635203']
// localStorage.setItem('phoneNumber', phoneNumber)

// const myBirthDay =['30.05.2003']
// localStorage.setItem('myBirthDay', myBirthDay)

// let myData = {
// age: 21,
// sex: 'female',
// pets:['cat']

// }

// localStorage.setItem('myData',JSON.stringify(myData))


// let myDataJson = localStorage.getItem("myData")
//  myData = JSON.parse(myDataJson)
//  console.log(myData.pets[0]);
 

// localStorage.clear()


// console.log(titanic);
// console.log(titanic.Director);
// console.log(titanic["Director"]);




// function changeBackgroundColor() {
//   const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBD33", "#A833FF"]; // array of colors
//   let index = 0;

//   setInterval(() => {
//     document.body.style.backgroundColor = colors[index];
//     index = (index + 1) % colors.length; // loop back to start
//   }, 1000); // change color every 1000ms (1 second)
// }

// changeBackgroundColor();

