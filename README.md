# MiniStore - Mini E-commerce Front-End

## 🚀 Visão Geral
MiniStore é um **mini e-commerce** feito com **React + TypeScript + Tailwind CSS v4**, consumindo a **Fake Store API** para exibir produtos reais. O projeto permite adicionar itens a um carrinho persistente usando `localStorage`, ideal para demonstração de habilidades em front-end.

Este projeto serve para **mostrar domínio de tecnologias modernas de front-end** com foco em: consumo de API, estado global, design responsivo e TypeScript.


## 🏗️ Estrutura do Projeto

```
ministore/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navbar com contador de itens no carrinho
│   │   ├── ProductCard.tsx   # Card de produto individual
│   │   └── Cart.tsx          # Carrinho de compras (opcional modal)
│   ├── pages/
│   │   ├── Home.tsx          # Lista de produtos
│   │   └── ProductDetail.tsx # Detalhes do produto
│   ├── context/
│   │   └── CartContext.tsx   # Context API para gerenciamento do carrinho
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```


## ⚛️ Tecnologias Utilizadas

- **React 18+** + **TypeScript**
- **Tailwind CSS v4** para estilos responsivos e minimalistas
- **Fake Store API** para produtos simulados
- **LocalStorage** para persistência do carrinho
- **Vite** como bundler rápido


## 📦 Funcionalidades

1. **Listagem de Produtos:** Consome a API e exibe produtos em grid responsivo.
2. **Adicionar ao Carrinho:** Adiciona produtos com persistência em `localStorage`.
3. **Contador no Navbar:** Mostra quantidade de itens no carrinho.
4. **Design Responsivo:** Funciona perfeitamente em dispositivos móveis, tablets e desktops.
5. **TypeScript e Context API:** Estado global e tipagem segura.


## 🔧 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ministore.git
cd ministore
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

```
http://localhost:5173
```


## 🌟 Extras

- Projeto 100% **TypeScript** com `type-only imports` compatíveis com `verbatimModuleSyntax`
- Layout minimalista e moderno usando **Tailwind CSS v4**
- **Persistência do carrinho** usando `localStorage`
- Base pronta para **deploy em Vercel**
- Código limpo e bem estruturado


## 📝 Licença

MIT License
