(function(){
  emailjs.init("Natan"); 
})();

function enviarEmail() {
  const serviceID = "service_vzkk2uf"; 
  const templateID = "template_9kf57zc"; 
  
  const params = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value
  };

  emailjs.send(serviceID, templateID, params)
  .then(response => {
      alert("Email enviado com sucesso!");
      console.log("SUCCESS!", response.status, response.text);
  }, error => {
      alert("Erro ao enviar email: " + error.text);
      console.log("FAILED...", error);
  });
}
