# Homeless
Projeto para cadastro e procura de pessoas moradoras de rua

# Documentação técnica

### Tecnologias utilizadas:
- **Banco de Dados:** Mysql
- **Linguagem de Programação:** Javascript
- **Framework Backend-end:** NodeJS 8.11.3
- **Libs Backend:** express, helmet, moment, mysql, path, winston, chai, mocha e supertest
- **IDE:** Sublime
- **SO:** Windows10

### Teste da aplicação
- Abra o terminal e navegue até a pasta do projeto de forma que no diretorio atual seja possivel visualizar o arquivo **package.json**.
- Rode o comando **npm test**

### Instalação da aplicação
- Abra o terminal e navegue até a pasta do projeto de forma que no diretorio atual seja possivel visualizar o arquivo **package.json**.
- Rode o comando **npm install** e aguarde a instalação de todas as dependências
- importe o arquivo **banco.sql** para o seu mysql
- Se necessário altere as configurações de conexão com o banco : **Arquivo: Backend/config/db/dbConfig.js**
- Rode o comando **npm start**
- A Aplicação trabalha com protocolo http e tem como base o seguinte endereço: **http://localhost:3000**

### Rotas da aplicação

**BaseUrl : http://localhost:3000**

- **GET** 
	- **/v1/acoes** Traz todos as ações cadastradas
	- **/v1/pessoas** Traz todos as pessoas procuradas cadastradas
	- **/v1/pessoas/:id** Busca os dados da pessoa com o ID informado

- **POST** 
	- **/v1/acoes** Insere nova ação
	- **/v1/pessoas** Insere uma nova pessoa procurada

- **PUT** 
	- **/v1/pessoas/:id** Atualiza informações da pessoa com o ID informado

- **DELETE** 
	- **/v1/acoes/:id** Desativa ação com o ID informado

- **Ex..: http://localhost:3000/v1/pessoas**

### Estrutura de pastas (Backend)
Todo o back-end do projeto se concentra na pasta backend. A única exceção é a pasta node_modules.

- backend
	- app
		- controllers
			- Acao.js
			- PessoaProcura.js
			- PessoaProcurada.js
			- PessoaProcuradaAcao.js
		- dao
			- AcaoDAO.js
			- PessoaProcuraDAO.js
			- PessoaProcuradaDAO.js
			- PessoaProcuradaAcaoDAO.js
		- middlewares
			- format2Object.js
		- routes
			- acao.js
			- pessoa.js
	- config
		- db
			- dbConfig.js
			- dbMysql.js
		- express.js
	- logs
		- error.log
	- test
		- projeto-test.js
	- utils
		- logger.js
	- server.js
- node_modules
- package.json

#### Backend
Possui toda a estrutra da parte backend da aplicação.

#### App
Possui pastas contendo os Controller, Middlewares, DAOs e Rotas da aplicação.

#### Controllers
Esta pasta possui os arquivos que contem as funções a serem chamadas para determinadas rotas identificadas nos arquivos da pasta Routes.

#### DAO
Esta pasta possui os arquivos que contem as consultas e regras de negocio da aplicação.

#### Middlewares
Pasta para arquivos que serão utilizados como helpers pela aplicação.

#### Routes
Esta pasta possui os arquivos de rotas da aplicação.

#### Config
Esta pasta possui os arquivos de configuração da aplicação.

#### Db
Esta pasta possui os arquivos de configuração dos bancos usados pela aplicação.

**Obs: O Banco utilizado nesse projeto é o Mysql : a lib para trabalhar com esse banco é [mysql](https://www.npmjs.com/package/mysql)**

O arquivo **dbConfig.js** representa uma classe com propriedades que são as conexões utilizadas no banco.

O arquivo **dbMysql.js** possui um função de execução em banco que trabalha no modelo de promise e funciona como um adapter, essa função recebe 4 paramêtros:

1.  'query'  : indica a query ou procedure a ser executada no banco.
2.  'params' : Parametros que podem ser utilizados na query/procedure no formato de array
3.  O tipo de retorno podendo ser um dos seguintes :
	- 'affectedRows' => retorna a quantidade de linhas afetadas por uma query.
	- 'changedRows' => retorna a quantidade de linhas alteradas pela query.
	- default => retorna resultado no estilo [ {}, {}, {} ].
4. Serve pra indicar se deve ser retornado apenas o primeiro registro da consulta.

O arquivo **express.js** possui todas as configurações iniciais do backend da aplicação, usa o framework **[express](https://www.npmjs.com/package/express)**, o middleware **[helmet](https://www.npmjs.com/package/helmet)** para proteção dos cabeçalhos das requisições e o nativo **path** para auxiliar na configuração da pasta que sera usada no FrontEnd.

#### Logs
Possui o arquivo **error.log** que grava os logs de ações que falharam na aplicação.

#### Test
Possui o arquivo projeto-test.js que contem todos os testes de backend da aplicação, as libs utilizados são : **[chai](https://www.npmjs.com/package/chai), [mocha](https://www.npmjs.com/package/mocha), e [supertest](https://www.npmjs.com/package/supertest)**.

#### Utils
Possui o arquivo **logger.js** que usa a lib **[winston](https://www.npmjs.com/package/winston)** para criar e escrever logs da aplicação.
#### Server.js
Este arquivo possui a inicialização do servidor.

#### Node_Modules
Possui todas as dependencias do backend da aplicação.
