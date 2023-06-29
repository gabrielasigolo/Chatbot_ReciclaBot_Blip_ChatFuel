/* Script utilizado para realizar a busca e salvamento do bairro do CEP informado pelo usuário através do 
chatbot no Messenger na API ViaCEP caso tenha passado pelo Scrip buscaCep e confirmado que a localidade faz
parte do projeto 8 Cidades com o Meio Ambiente
Link ViaCep: https://viacep.com.br/ws/{{cep}}/json/*/

function run(status, corpo) {
                if (status == 200){
                    let corpoC = JSON.parse(corpo);
                    let localidade = corpoC.localidade;
                    let bairro = corpoC.bairro;

                    if(localidade != undefined)
                    {
                        return bairro;
                    }
                    
                }
                return "Erro ao buscar o CEP informado";
            }