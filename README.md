# Projeto ONG

## 📌 Apresentação

Este projeto consiste no desenvolvimento de uma plataforma web para uma Organização Não Governamental (ONG), criada com o objetivo de apresentar a instituição, divulgar seus projetos e atividades e facilitar a interação com pessoas interessadas em contribuir ou participar das ações.

O projeto foi desenvolvido durante as etapas da disciplina de desenvolvimento Front-End, utilizando HTML5, CSS3 e JavaScript.

## 🎯 Objetivos

* Apresentar as informações da ONG de forma organizada;
* Divulgar projetos e ações sociais;
* Disponibilizar um formulário de cadastro;
* Criar uma interface responsiva;
* Aplicar conceitos de acessibilidade;
* Utilizar JavaScript para interações e manipulação do conteúdo;
* Armazenar informações utilizando `localStorage`;
* Aplicar boas práticas de versionamento com Git e GitHub.

## 🚀 Funcionalidades

O projeto possui as seguintes funcionalidades:

* Página inicial com apresentação da ONG;
* Página de projetos e ações;
* Formulário de cadastro;
* Navegação entre as páginas;
* Interações utilizando JavaScript;
* Validação dos campos do formulário;
* Armazenamento local de informações;
* Componentes visuais responsivos;
* Menu e elementos interativos;
* Feedback visual para ações do usuário.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Visual Studio Code
* W3C Validator

## 📂 Estrutura do projeto

```text
projeto-ong/
│
├── index.html
├── cadastro.html
├── projetos.html
├── README.md
│
└── cs/
    ├── style.css
    │
    ├── js/
    │   ├── app.js
    │   ├── modal.js
    │   ├── script.js
    │   │
    │   └── js/
    │       ├── formulario.js
    │       └── storage.js
```

## 💻 Instalação e execução local

Para executar o projeto localmente, é necessário ter o Git instalado e realizar o download do repositório.

Clone o projeto utilizando:

```bash
git clone https://github.com/Sousadoria/projeto-ong.git
```

Depois, entre na pasta do projeto:

```bash
cd projeto-ong
```

O projeto pode ser aberto no Visual Studio Code e executado em um navegador.

## 🌐 Deploy

O projeto será disponibilizado utilizando o GitHub Pages, permitindo que os arquivos HTML, CSS e JavaScript sejam executados diretamente em um ambiente de produção.

A publicação será realizada a partir do repositório do GitHub.

## ♿ Acessibilidade

Durante o desenvolvimento foram aplicadas práticas relacionadas à acessibilidade, incluindo:

* utilização de elementos HTML semânticos;
* organização hierárquica dos títulos;
* utilização de textos alternativos nas imagens;
* associação entre `label` e campos de formulário;
* navegação por teclado;
* destaque visual para foco;
* utilização adequada de elementos interativos;
* utilização de atributos ARIA quando necessários;
* preocupação com contraste entre texto e fundo.

As páginas também foram verificadas utilizando o W3C Validator durante o desenvolvimento.

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, utilizando recursos do CSS3, como:

* Flexbox;
* CSS Grid;
* Media Queries;
* unidades relativas;
* componentes adaptáveis.

O objetivo é proporcionar uma experiência adequada em computadores, tablets e dispositivos móveis.

## 🔀 Versionamento

O controle de versões foi realizado utilizando Git e GitHub.

Foi adotada uma organização baseada em branches, separando o desenvolvimento principal das funcionalidades e alterações específicas.

Exemplo de fluxo utilizado:

```text
main
  ↓
develop
  ↓
feature/*
```

Também foram utilizadas mensagens de commit seguindo o padrão Conventional Commits, como:

```text
feat: adiciona nova funcionalidade
fix: corrige problema
docs: atualiza documentação
perf: otimiza desempenho
```

## 🧪 Testes e validações

Durante o desenvolvimento foram realizados testes relacionados a:

* funcionamento das páginas;
* navegação;
* formulário;
* validação dos campos;
* funcionalidades JavaScript;
* armazenamento local;
* responsividade;
* acessibilidade;
* validação do código HTML.

## 🔧 Manutenção

Para realizar alterações no projeto, recomenda-se criar uma nova branch a partir de `develop`, realizar as alterações e registrar um commit descrevendo claramente o que foi modificado.

Exemplo:

```bash
git checkout develop
git checkout -b feature/nova-funcionalidade
```

Depois das alterações:

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade
```

As alterações podem posteriormente ser submetidas por meio de um Pull Request para revisão.

## 👩‍💻 Autoria

Projeto desenvolvido por **Sousadoria** como parte das atividades acadêmicas de desenvolvimento Front-End.
