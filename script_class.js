//lista que armazena os livros
let livros = []
let id = 0;
//dom
const display = document.getElementById("display")
const ul1 = document.getElementById('ul1')
const button1 = document.getElementById('button1')
const form = document.getElementById('form')
const enviar = document.getElementById('enviar')


//funcionalidade do botao novo livro
//permite que um quase 'pop-up' apareca
button1.addEventListener("click", function() {
    form.style.display = "block"
})

//envia os dados do livro para a lista "livros"
enviar.addEventListener('click', function() {
    let titulo = document.querySelectorAll('input')[0].value
    let autor = document.querySelectorAll('input')[1].value
    let paginas = document.querySelectorAll('input')[2].value
    let genero = document.querySelectorAll('input')[3].value
    let info = document.querySelectorAll('input')[4].value
    id += 1
    livro = new Livro(titulo, autor, paginas, genero, info, id)
    addLivros(livro)
    render()
})


//construtor do objeto livro
class Livro {
    constructor(titulo, autor, paginas, genero, info){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.genero = genero;
        this.info = info;
    }
}



//funcao que adiciona livros 
function addLivros(livro) {
    livros.push(livro)
}

//loop de renderizacao
function render() {
    ul1.innerHTML = ' '
    for (let i = 0; i < livros.length; i++) {
        //cria o botao 'delete' ao lado de cada livro na lista
        let deleteButton = document.createElement('BUTTON')
        deleteButton.className = 'delete'
        let text = document.createTextNode("deletar")
        deleteButton.appendChild(text);

        // cria o botao 'read' ao lado de cada livro na lista
        //juntamente com o seu icone
        let icone = document.createElement('i')
        icone.innerHTML = '<i class="fa-regular fa-bookmark"></i>'
        let readButton = document.createElement('button')
        text = document.createTextNode('marcar como lido')
        readButton.appendChild(text)

        //evento do botao de 'marcar como lido'
        readButton.addEventListener('click', function() {
            marcarLido(i, icone);
        })

        //evento do batao de 'deletar'
        deleteButton.addEventListener('click', () => removeLivro(i));

        //criacao de um elemento html para cada livro na lista
        const li = document.createElement('li')
        li.textContent = livros[i].titulo

        //'grudando' tudo 
        ul1.appendChild(li)
        li.appendChild(icone)
        li.appendChild(deleteButton)
        li.appendChild(readButton)

    }
}

function removeLivro(index) {
    livros.splice(index, 1)
    render();
}

function marcarLido(index, icone) {
    if (livros[index].lido == false) {
        livros[index].lido = true
        icone.innerHTML = '<i class="fa-solid fa-bookmark"></i>'
        console.log(livros[index].lido)
        console.log(livros[index].parentNode.nodeName)
    } else {
        livros[index].lido = false
        icone.innerHTML = '<i class="fa-regular fa-bookmark"></i>'
        console.log(livros[index].lido)
    }
}

