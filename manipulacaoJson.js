const fs = require('fs');

// Carrega o arquivo JSON diretamente como um objeto
const animais = require("./animais.json");

const novoAnimal = {
    id: 1,
    nome: "Cachorro",
    tipo: "Mamífero",
    habitat: "Residências humanas"
}

// Adiciona o novo animal ao array
animais.push(novoAnimal);

// Converte o array de animais atualizado para JSON, com formatação legível
const animaisAtualizados = JSON.stringify(animais, null, 2); // Adiciona formatação legível

// Escreve o novo conteúdo no arquivo JSON
fs.writeFile('./animais.json', animaisAtualizados, (err) => {
    if (err) {
      console.log('Erro ao salvar o arquivo:', err);
    } else {
      console.log('Novo animal adicionado');
    }
});

const idAnimalAlterado = 1; // ID do animal que irei alterar
const novoHabitat = "Floresta tropical"; // Novo habitat para o animal

// Encontrando o animal com o id correspondente
const animal = animais.find((a) => a.id === idAnimalAlterado);

if (animal) {
    animal.habitat = novoHabitat;

    // Converte o array de animais atualizado para JSON com formatação legível
    const animaisAtualizados = JSON.stringify(animais, null, 2);

    // Escreve o novo conteúdo no arquivo JSON
    fs.writeFile('./animais.json', animaisAtualizados, (err) => {
        if (err) {
            console.log('Erro ao salvar o arquivo:', err);
        } else {
            console.log('Habitat do animal alterado com sucesso');
        }
    });
} else {
    console.log('Animal não encontrado com o id:', idAnimalAlterado);
}

const idParaRemover = 2;

// Encontrar o índice do animal a ser removido
const indice = animais.findIndex(a => a.id === idParaRemover); //findIndex retorna o numero do índice 

// Verificar se o animal foi encontrado
if (indice !== -1) {
  // Usar splice() para remover o animal no índice encontrado
  animais.splice(indice, 1); // O segundo parâmetro é a quantidade de itens a remover
  console.log('Animal removido:', idParaRemover);
} else {
  console.log('Animal não encontrado com o id:', idParaRemover);
}

console.log(animais);



const transformarEmJson = JSON.stringify(animais);



console.log(animais);