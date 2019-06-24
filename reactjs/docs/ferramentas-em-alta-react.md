# ferramentas em alta para desenvolvedores React 

### 1. Apollo / Relay (GraphQL)

o que é? https://blog.rocketseat.com.br/o-que-estudar-em-2018-como-front-end/

ambos quando aplicados junto com react servem como clientes para uma API construída com GraphQL, ou seja, são utilizados diretamente para consumir os dados do back-end

comparando os dois, hoje é melhor utilkizar o (Apollo)[https://www.apollographql.com/], pois alem de possuir uma sintaxe mais clara e uma menor curva de aprendizado ele está crescendo desenfreadamente. Por outro lado o (Relay)[https://facebook.github.io/relay/] tem se mostrado uma alternativa mais apta para escalabilidade e estruturas mais complexas por lidar melhor com cache em grandes aplicações 

### 2. (Flow)[https://flow.org/] / (TypeScript)[https://www.typescriptlang.org/] (Tipagem estática)

um ponto importante para todos programadores react é a ***tipagem estática***. Geralmente aprendemos utilizar apenas as ***PropTypes*** que fazem a tipagem de propriedades dos nossos componentes de forma dinamica

### 3. Next.js (server-side rendering)

o react roda do lado do cliente, front-end, ou seja, qualquer requisição aos dados do back-end são feiras após carregamento inicial da aplicação 

o react não é nada além de js e o nodejs onsegue entender o js pelo lado do servidor, então se jutarmos os dois... #BOOM!   

O NextJS permite renderizar a parte visual construida pelo ***react no lado do servidor*** trazendo todos os dados em tela já no primeiro carregamento removendo qualquer problema de indexação

https://blog.rocketseat.com.br/ssr-nextjs-reactjs/

