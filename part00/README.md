## 0.4: Novo diagrama das notas

graph TD
  subgraph Browser
    A --> B[Abrir página] 
    B --> C[Escrever nota no campo de texto]
    C --> D[Clicar no botão "Submit"]
    D --> E[Enviar requisição POST para o servidor]
  end

  subgraph Server
    E --> F[Receber requisição POST]
    F --> G[Processar a nova nota]
    G --> H[Salvar nota no banco de dados]
    H --> I[Enviar resposta]
  end

  B --> I[Atualizar a interface com a nova nota]


## 0.5: Diagrama de SPA

graph TD
  subgraph Browser
    A[Abrir a página SPA] 
    A --> B[Carregar o JavaScript da SPA]
    B --> C[Inicializar a SPA]
    C --> D[Renderizar a interface da SPA]
    D --> E[Interagir com a SPA]
  end

  subgraph SPA
    E --> F[Realizar navegação interna]
    F --> G[Enviar requisições assíncronas para o servidor]
    G --> H[Receber e processar dados do servidor]
    H --> I[Atualizar a interface da SPA com os dados]
  end

  subgraph Server
    G --> J[Receber requisições]
    J --> K[Processar requisições]
    K --> L[Consultar banco de dados, se necessário]
    L --> G[Enviar dados de volta à SPA]
  end


## 0.6: Nova nota no diagrama de SPA

graph TD
  subgraph Browser
    A[Abrir a página SPA] 
    A--> B[Carregar o JavaScript da SPA]
    B --> C[Inicializar a SPA]
    C --> D[Renderizar a interface da SPA]
    D --> E[Interagir com a SPA]
    E --> F[Preencher o conteúdo da nova nota no formulário]
    G --> H[Clicar no botão "Save"]
    H --> I[Enviar requisição POST para o servidor]
  end

  subgraph SPA
    I --> J[Receber e processar a requisição]
    J --> K[Salvar a nova nota no banco de dados]
    K --> L[Enviar resposta de confirmação no Console]
    L --> M[Atualizar a lista de notas na interface]
  end

  subgraph Server
    I --> O[Receber requisição POST]
    O --> P[Processar a nova nota]
    P --> Q[Salvar nota no banco de dados]
    Q --> K[Enviar resposta de confirmação]
  end
