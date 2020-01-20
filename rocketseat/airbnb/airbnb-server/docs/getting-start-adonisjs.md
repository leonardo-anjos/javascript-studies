# Iniciando com AdonisJS

o AdonisJS é um framework para NodeJS que vai focar mais na regra de negócio da aplicação sem perder muito tempo com o funcionamento pos trás das funcionalidades comuns como manipulação de dados, envio de e-mail, autenticação etc

### criando API REST com AdonisJS

AdonisJS utiliza o padrão ***MVC*** como arquitetura e toda camada de banco de dados é abstraída pelo ***Lucid ORM***, isso quer dizer que escrevemos uma consulta no banco de dados como ```SELECT * FROM users WHERE id = 1```, ao invés utilizaremos métodos disponíveis nos nossos modelos, como : ```const user = User.find(1)```

