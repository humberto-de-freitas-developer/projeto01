


function check_login(){
    const usuarios = "admin"
    const password = "12345";
    const inputEmail = document.getElementsByName('usuario')[0].value;
    const inputSenha = document.getElementsByName('senha')[0].value;
 
    if(usuarios == inputEmail && password == inputSenha){
        document.location.href = "login.html";

    } else{
        alert("Usuário: admin / Senha: 12345");
        
    }
        
    

}
function exit (){
    document.location.href="index.html";
}
