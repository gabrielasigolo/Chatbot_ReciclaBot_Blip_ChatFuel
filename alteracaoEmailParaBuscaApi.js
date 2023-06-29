/* Scrip realizado para alterar o e-mail inserido pelo usuário através do Messenger no Facebook devido a
particularidade da API utilizada, alterando o caractere @ por %40. 
Link API envio de e-mail do Blip: https://http.msging.net/messages */

function run(email) {
    let email = email;
    novoEmail = email.replace(/@/g, "%40")
   
   return novoEmail;
            }


/* Corpo da requisição na API de envio de e-mail 
{
   "to":"email%40gmail.com@mailgun.gw.msging.net",
   
   "type":"text/plain",

   "content":"Olá, foi aberta uma solicitação para agendamento de retirada de materiais na cidade de {{localidade}} no bairro {{bairro}}.
   Entre em contato com o cliente para dar continuidade ao procedimento.
   
   E-mail: {{email}}
   Telefone: {{telefone}}
   
   Até mais, ReciclaBot."
}
 */