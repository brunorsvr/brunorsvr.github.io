const apiUrl = 'https://682e00e5746f8ca4a47b8708.mockapi.io/api/v1/animals';

function carregarAnimais() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('animal-list');
      ul.innerHTML = '';
      data.forEach(animal => {
        const li = document.createElement('li');
        li.textContent = `${animal.id} - ${animal.nome}, ${animal.idade} anos, ${animal.raca}`;

        const btn = document.createElement('button');
        btn.textContent = 'Remover';
        btn.className = 'remove-btn';
        btn.onclick = () => removerAnimal(animal.id);

        li.appendChild(btn);
        ul.appendChild(li);
      });
    })
    .catch(error => console.error('Erro:', error));
}

function cadastrarAnimal(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const raca = document.getElementById('raca').value;

  fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ nome, idade, raca })
  })
  .then(response => response.json())
  .then(() => {
    carregarAnimais();
    document.getElementById('animal-form').reset();
  })
  .catch(error => console.error('Erro:', error));
}

function removerAnimal(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
  })
  .then(() => carregarAnimais())
  .catch(error => console.error('Erro:', error));
}

document.getElementById('animal-form').addEventListener('submit', cadastrarAnimal);

carregarAnimais();