# atividade-web

Aplicação web desenvolvida com React e Vite como atividade prática de desenvolvimento front-end.

## Sobre

A página exibe dois painéis lado a lado, um escuro e um claro com um botão central que inverte as cores de ambos os lados com uma animação suave. Cada painel exibe um ícone e um texto que também transitam junto com a mudança de tema.

## Tecnologias

- React 19
- Vite 8
- CSS com transições e variáveis customizadas

## Como rodar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Saatake/atividade-web.git
cd atividade-web
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse em `http://localhost:5173`.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

```
src/
  App.jsx
  pages/
    MainPage.jsx
    MainPage.css
```