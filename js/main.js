

function print() {
    let firstName = document.getElementById('f_name').value;
    console.log(firstName);
    let lastName = document.getElementById('l_name').value;
    console.log(lastName);

    let result = firstName + " " + lastName;
    console.log(result);

    document.getElementById('printhere').innerHTML = result;
    let p = document.getElementById('printhere').style.cssText ='color : blue; font-size : 50px; text-align : center; background-color : bisque; border-radius : 20px' 
}