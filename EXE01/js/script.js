const button = document.querySelector('button');

button.addEventListener('click', function(event){
    console.log(event);

    document.querySelector('h1').classList.toggle('oculto'); /*Procura no documento html "h1", seleciona o 'h1' por meio do querySelector, 
                                                               por meio do 'classList' a lista de classes procura a class 'oculto'. O 'toggle' neste caso inclui ou retira
                                                               a class 'oculto'. O toggle()método da DOMTokenList, interface remove um token existente da lista e retorna false. Se o token não existir,
                                                               ele será adicionado e a função retornará true.*/
})
