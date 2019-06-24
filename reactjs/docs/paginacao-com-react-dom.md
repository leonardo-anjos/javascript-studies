# paginação com react dom

paginação é um órgão vital para um website, quando se trata de listas com enorme quantidade de informação

### adotando uma estratégia 

existem duas principais maneiras de fazer paginação:
- query string: acrescentado ```?page=2```
- path: acrescentando ```/2/``` ***obs: mais elegante fácil de trabalhar***

o valor de ```page``` é opcional, sendo que quando não tiver nenhum valor é considerado como ```1```

para trabalhar com valor opcional no react-router-dom a URL precisa de uma interrrogação no final da variável identificadora
```<Route path="blog/:page?" component={Blog} />```

### paginando




