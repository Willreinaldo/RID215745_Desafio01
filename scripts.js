document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();   
    console.log('Formulário enviado');
  
    const formData = new FormData(this); 
    console.log('Dados do formulário coletados:', formData);
  
    const data = {
      Name: formData.get('Name'),  
      Email: formData.get('Email'),  
      Created: new Date().toISOString()   
    };
    console.log('Dados para envio:', data);
  
     const webhookUrl = 'https://api.sheetmonkey.io/form/rETbx5AjBRgCztG8T2vAyJ';  
  
     fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),   
    })
    .then(response => {
      console.log('Resposta do servidor:', response);   
      return response;  
    })
    .then(() => {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();   
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar a mensagem!');
    });
  });
  