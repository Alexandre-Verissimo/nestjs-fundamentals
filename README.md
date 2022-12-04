<h1 align="center">
    Fundamentos com NestJS
</h1>

## Sobre
Esse é um projeto simples feito que visa perpassar por conceitos básicos fundamentais em conjunto com o framework NestJS.

## Tópicos
<ul>
    <li>Iniciando Projeto</li>
    <li>Configurando Endpoints</li>
    <li>Criando povo Modulo</li>
    <li>Parsing Parâmetros pela URL</li>
    <li>Injeção de Dependência</li>
    <li>Body Parsing, Dtos e Enities</li>
    <li>Swagger Api Docs</li>
    <li>Parsing Query Parâmetros</li>
    <li>Exception/Error Handler, Pipes e Validation</li>
</ul>

## Recursos
<ul>
    <li>@nestjs/swagger</li>
    <li>swagger-ui-express</li>
    <li>class-validator</li>
    <li>class-transformer</li>
    <li>uuid</li>    
</ul>

## Instalando e Executando
Para rodar o projeto será necessário ter em sua máquina o Node.Js e o NestJs. Acessando o link: https://nodejs.org/en/ baixe e instale a versão mais recente do Node.Js. Instalado o Node.Js, para fazer instalação do NestJs e rodar o projeto, abra um terminal e execute o seguinte comando:

```
$ npm install i -g @nestjs/cli
```
Com esse comando você instala o NestJs em sua máquina. Agora, vamos executar a instalação das dependências. Pra isso, abra o projeto que você baxou aqui do meu repositório com algum editor que desejar, eu utilizei o vscode, abra um terminal na raiz do projeto e execute:

```
$ npm install --save @nestjs/swagger swagger-ui-express uuid class-validator class-transformer
```

Por fim, é só rodar o projeto por um terminal acessando a raiz com o comando:

```
npm run start:dev
```

## Testando
Acessando a rota http://localhost:3000/ você consegue acessar os endpoints pelo swagger onde pode-se testar todas as endpoints do projeto.





