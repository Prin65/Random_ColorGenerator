const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);//for making hex color
    const randomCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode; 
    document.querySelector("h1").innerText="Yup!! New Color";

    navigator.clipboard.writeText(randomCode);//copy to clipboard
    
}
document.getElementById("btn").addEventListener("click", getColor);


//getColor(); //to generate color on page load