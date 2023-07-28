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
function Livro(titulo, autor, paginas, genero, info) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
    this.lido = false;
    this.info = function() {
        return info;
    }
};


//funcao que adiciona livros 
function addLivros(livro) {
    livros.push(livro)
}

//primeiro livro criado
livro1 = new Livro('o idiota', 'Fiodor dostoievski', '200', 'romance', 'livro classico, uma das obras mais aclamadas de dostoievski')

livro2 = new Livro('os irmaos karamazov', 'Fiodor dostoievsk', '200', 'romance', 'Considerada a maior obra de Fiodor Dostoievski')

addLivros(livro1)
addLivros(livro2)
console.log(livros[0].info())
console.log(livros[2])


//loop de renderizacao

function render() {
    ul1.innerHTML = ' '
    for (let i = 0; i < livros.length; i++) {
        //cria o botao ao lado de cada livro na lista
        let deleteButton = document.createElement('BUTTON')
        deleteButton.className = 'delete'

        let readButton = document.createElement('button')
        let text = document.createTextNode('marcar como lido')
        readButton.appendChild(text)
        readButton.addEventListener('click', function(){
            marcarLido(i);
        })


        text = document.createTextNode("deletar")
        deleteButton.appendChild(text);

        const li = document.createElement('li')
        deleteButton.addEventListener('click', () => removeLivro(i));
        li.textContent = livros[i].titulo
        ul1.appendChild(li)
        li.appendChild(deleteButton)
        li.appendChild(readButton)

    }
}

function removeLivro(index) {
    livros.splice(index, 1)
    render();
}

function marcarLido(index) {
    livros[index].lido = true
    console.log(livros[index].lido)
}

