function sendMail(){
    var params={
        name : document.getElementById("yourName").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("message").value

    };
const serviceID = "service_6e2vh1f";
const templateID = "template_tuywcpi";

emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("yourName").value="";
        document.getElementById("Email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your request is sent");

    });

}