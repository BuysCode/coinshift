# CoinShift - Currency Converter

Uma aplicação web moderna para conversão de moedas em tempo real com interface intuitiva e responsiva.

## 📋 Sobre o Projeto

**CoinShift** é um conversor de moedas que utiliza a API de taxas de câmbio em tempo real. A aplicação permite converter valores entre diferentes moedas (USD, EUR, GBP) de forma rápida e prática.

### Características Principais

- 🔄 Conversão de moedas em tempo real
- ✨ Interface moderna e intuitiva
- 🎨 Design responsivo e elegante
- ⚡ Performance otimizada com Vite
- 🔒 TypeScript para segurança de tipos
- 📱 Compatibilidade com dispositivos móveis
- 🌐 Integração com Exchange Rate API

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Linguagem**: TypeScript
- **Styling**: CSS
- **API**: Exchange Rate API (v6.exchangerate-api.com)
- **Linting**: ESLint com TypeScript Support
- **Package Manager**: npm

### Dependências Principais

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

### Dependências de Desenvolvimento

- @vitejs/plugin-react: Plugin React para Vite
- @types/react & @types/react-dom: Tipagens TypeScript para React
- typescript-eslint: Linting avançado com suporte a TypeScript
- eslint: Ferramenta de análise estática de código

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.0 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- Uma chave de API gratuita do [Exchange Rate API](https://www.exchangerate-api.com/)

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/coinshift.git
cd coinshift
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API:

```env
VITE_API_KEY=sua_chave_api_aqui
```

**Nota**: A chave de API é obtida gratuitamente em [exchangerate-api.com](https://www.exchangerate-api.com/). Após se registrar, você receberá sua chave de API.

## 💻 Como Executar

### Modo Desenvolvimento

Inicie o servidor de desenvolvimento na porta 3000:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

Compile a aplicação para produção:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`

### Preview do Build

Visualize a versão de produção localmente:

```bash
npm run preview
```

### Lint do Código

Verifique e corrija problemas de linting:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
coinshift/
├── src/
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── Header.tsx          # Cabeçalho com título da aplicação
│   │   └── Card.tsx            # Componente principal de conversão
│   ├── assets/                 # Arquivos estáticos (imagens, ícones)
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── App.css                 # Estilos globais
│   ├── index.css               # Estilos base
│   └── main.tsx                # Ponto de entrada da aplicação
├── public/                     # Arquivos públicos estáticos
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração TypeScript
├── tsconfig.app.json           # Configuração TS para aplicação
├── tsconfig.node.json          # Configuração TS para Node
├── eslint.config.js            # Configuração ESLint
├── package.json                # Dependências e scripts do projeto
├── index.html                  # Arquivo HTML principal
└── README.md                   # Este arquivo
```

## 🧩 Componentes

### Header
**Arquivo**: [src/components/Header.tsx](src/components/Header.tsx)

Componente que renderiza o cabeçalho da aplicação com o título "CoinShift". Possui styling bicolor para destacar visualmente a marca.

```tsx
export default function Header () {
  return (
    <header className="header">
      <h1>
        <span className="header-title-first">Coin</span>
        <span className="header-title-second">Shift</span>
      </h1>
    </header>
  )
}
```

### Card (Currency Converter)
**Arquivo**: [src/components/Card.tsx](src/components/Card.tsx)

Componente principal que contém toda a lógica de conversão de moedas. Gerencia:

- **Estado das moedas selecionadas**: Moeda de origem e destino (padrão: USD → EUR)
- **Estado do valor**: Quantidade a converter e resultado final
- **Estado de carregamento**: Indicador visual durante a requisição
- **Conversão de moedas**: Integração com Exchange Rate API

#### Funcionalidades

- Seleção de moedas (USD, EUR, GBP)
- Campo de entrada para quantidade
- Formatação de moeda na saída
- Estado de carregamento com spinner
- Tratamento de erros
- Botão convertedor com feedback visual

#### Estado (useState)

```typescript
const [fromCurrency, setFromCurrency] = useState<string>("USD")
const [toCurrency, setToCurrency] = useState<string>("EUR")
const [loading, setLoading] = useState<boolean>(false)
const [amount, setAmount] = useState<number>(0)
const [finalValue, setFinalValue] = useState<number>(0)
```

#### Função handleClick

Realiza a requisição à API de câmbio:

1. Define o estado de carregamento como `true`
2. Faz uma requisição GET para a Exchange Rate API
3. Extrai a taxa de câmbio para a moeda desejada
4. Calcula e formata o valor convertido
5. Atualiza o estado com o resultado

## 🔌 API Integration

### Exchange Rate API

A aplicação utiliza a **Exchange Rate API** (v6.exchangerate-api.com) para obter as taxas de câmbio em tempo real.

#### Endpoint Utilizado

```
GET https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{currency}
```

#### Resposta Esperada

```json
{
  "result": "success",
  "conversion_rates": {
    "USD": 1.0,
    "EUR": 0.92,
    "GBP": 0.79,
    ...
  }
}
```

#### Variáveis de Ambiente

- `VITE_API_KEY`: Sua chave de API do Exchange Rate API (armazenada em `.env.local`)

## 🎯 Como Usar a Aplicação

1. **Selecione a moeda de origem**: Escolha a moeda que você deseja converter (dropdown "From")
2. **Selecione a moeda de destino**: Escolha para qual moeda fazer a conversão (dropdown "To")
3. **Insira o valor**: Digite a quantidade que deseja converter no campo "Amount"
4. **Clique em "Convert"**: Pressione o botão para realizar a conversão
5. **Visualize o resultado**: O valor convertido será exibido em "Converted Amount" com formatação de moeda

### Exemplo de Uso

- Converter 100 USD para EUR:
  1. Selecionar "USD" em "From"
  2. Selecionar "EUR" em "To"
  3. Inserir "100" em "Amount"
  4. Clicar em "Convert"
  5. Resultado será exibido no formato de moeda (ex: €92.00 EUR)

## 🎨 Estilo e Design

A aplicação utiliza CSS3 para estilização moderna e responsiva:

- **Paleta de cores**: Gradientes e cores vibrantes
- **Tipografia**: Fontes modernas e legíveis
- **Responsividade**: Design adaptável a diferentes tamanhos de tela
- **Animações**: Spinner de carregamento durante a conversão
- **Acessibilidade**: Labels associados aos inputs

## ⚙️ Configuração Avançada

### Vite Configuration
**Arquivo**: [vite.config.ts](vite.config.ts)

```typescript
export default defineConfig({
  plugins: [react()],
})
```

### TypeScript Configuration
**Arquivo**: [tsconfig.json](tsconfig.json)

Configuração completa de TypeScript com suporte a React e imports absolutos.

### ESLint Configuration
**Arquivo**: [eslint.config.js](eslint.config.js)

Fornece linting de código com suporte a React Hooks e React Refresh.

## 🔒 Segurança

- A chave de API é armazenada em variável de ambiente (`.env.local`)
- A aplicação não expõe informações sensíveis no código-fonte
- Validação de resposta da API antes de usar os dados
- Tratamento de erros para falhas de conexão

## 📊 Performance

- ⚡ **Build rápido** com Vite
- 🎯 **Code splitting** automático
- 🔄 **React Fast Refresh** para desenvolvimento
- 📦 **Bundle otimizado** para produção
- 🎪 **Lazy loading** de componentes

## 🐛 Resolução de Problemas

### Erro: "API Key não definida"

**Solução**: Certifique-se de que o arquivo `.env.local` existe e contém `VITE_API_KEY=sua_chave_api`

### Erro: "Conversão não funciona"

**Solução**: 
- Verifique sua conexão com a internet
- Confirme que a chave de API é válida
- Verifique o console do navegador para mensagens de erro detalhadas

### Erro: "Porta 3000 já em uso"

**Solução**: Use uma porta diferente com o comando:
```bash
npm run dev -- --port 3001
```

## 🚀 Melhorias Futuras

- [ ] Suporte para mais moedas
- [ ] Histórico de conversões
- [ ] Favoritação de conversões frequentes
- [ ] Modo escuro
- [ ] Suporte offline com cache
- [ ] Gráficos de taxas históricas
- [ ] Suporte multi-idioma
- [ ] Mobile app nativa (React Native)

## 📝 Licença

Este projeto está sob licença privada. Todos os direitos reservados.

## 👨‍💻 Autor

Desenvolvido por [Seu Nome/Organização]

## 🤝 Contribuições

Se deseja contribuir para este projeto, por favor:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Versão**: 0.0.0  
**Último Update**: Março de 2026  
**Status**: Em Desenvolvimento ✨
