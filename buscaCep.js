/* Script utilizado para realizar a busca do CEP informado pelo usuário através do chatbot no Messenger 
na API ViaCEP e verificar se faz parte de alguma das 8 cidades participantes do Projeto 8 Cidades com o 
Meio Ambiente.
Link ViaCep: https://viacep.com.br/ws/{{cep}}/json/*/

function run(status, corpo) {
                if (status == 200){
                    let corpoC = JSON.parse(corpo);
                    let localidade = corpoC.localidade;

                    if(localidade != undefined)
                    {
                        if(localidade != "Salto" && localidade != "Itu" && localidade != "Indaiatuba" &&
                        localidade != "Cabreuva" && localidade != "Sorocaba" && localidade != "Itupeva" &&
                        localidade != "Capivari" && localidade != "Boituva"){
                            return "O CEP informado não faz parte do projeto 8 cidades com o Meio Ambiente"
                        }
                        return localidade;
                    }
                }
                return "Erro ao buscar o CEP informado";
            }