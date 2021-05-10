# Klickpages
Aplicativo JavaScript que exibe quantas paradas são necessárias para completar uma viagem durante uma viagem no espaço sideral fictício.

# Pré requisitos
- Git ([https://git-scm.com/](https://git-scm.com/))
- Node ([https://nodejs.org/](https://nodejs.org/))

# Instalação
Para baixar e rodar na sua própria máquina o projeto é bem simples, é só seguir o passo-a-passo a seguir:

## Start
Partindo do princípio que vocês não estão familiarizados com o **Git** ou **Node.js**, então primeiro você precisa instalar o [Node.js](https://nodejs.org/) no seu pc, caso o seu pc seja **Windows** eu recomento estar utilizando o gerenciador de pacotes [Chocolatey](https://chocolatey.org/) para baixar o **Node.js** e todas as outras dependências. Após a instalação do **Node.js**, recomendo você baixar e instalar o **[Git](https://git-scm.com/)** na sua máquina.

## Clonando o Repositório
Com o Git e o Node.js instalado na sua máquina, para pegar a **URL** do projeto é só clicar em **Code** no GitHub.

Com a **URL** do projeto em mãos, crie em algum lugar do seu pc uma pasta para criarmos uma cópia do repositório, dentro dela (Se você estiver utilizando o Windows) abra o **cmd** ou **powershell** e digite os comandos abaixo:

```
git@github.com:AlessandroAlberg/nata.house.git
cd nata.house
npm install
```

## Executar API e Testes

Para a execução da nossa API basta executar o comando abaixo:

```
npm start
```

## Rotas HTTP

Na API existe 3 rotas HTTP:
- /spaceships

Na rota podemos fazer requisições HTTP:
**GET**
### Spaceships
Na rota de Spaceships temos:

**GET**
```
body: {
    distancia: int
}

- Retorno
{
    nome: string,
    paradas: int
    ...
}
```