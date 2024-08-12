## Controlled x Ucontrolled

    - Controlled
        - manter em tempo real o estado, a informação que o user insere dentro do meu state
        - Contra: toda vez que altera, o react recaucula o component, e dependendo da interface, atrapalha na perfomance
    - Uncontrolled
        - busca informação do valor do input somente quando precisarmos dela
    - O react Hook ajuda nisso

### React Hook

    - npm i react-hook-form
    - hooks são funções que tem o prefixo use que acoplam uma funcionalidade

### Zod

    - é uma lib de validação
    - npm i zod
    - para integrar o zod ao react-hook-form
        - npm i @hookform/resolvers

### UseEffect

    - primeiro parametro (Quem eu vou chamar[functions, etc])
    - segundo parametro  (quem eu vou alterar)
        - se não tiver parametro, ele só vai executar assim que for renderizado na tela
    - muito comum
