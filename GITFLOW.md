# GitFlow - Fluxo de Trabalho para a Calculadora

## 1. Estrutura das Branches

- **main**: Contém a versão estável e pronta para produção do projeto.
- **develop**: Centraliza as alterações em desenvolvimento antes de serem integradas na main.
- **feature/**: Cada nova funcionalidade deve ser desenvolvida em uma branch separada, com o prefixo `feature/`, por exemplo:
  - `feature/calculadora`

## 2. Commits e Mensagens

Os commits devem ser frequentes e seguir uma estrutura semântica:

- `feat`: Adição de novas funcionalidades.
- `fix`: Correções de bugs.
- `refactor`: Melhorias no código sem mudar a funcionalidade.
- `docs`: Alterações na documentação.
- `style`: Ajustes de formatação ou estilo do código.

Exemplos:
```sh
 git commit -m "feat: adiciona suporte ao teclado na calculadora"
 git commit -m "fix: corrige erro ao calcular expressões inválidas"
```

## 3. Processo de Merge e Pull Requests

1. **Criar uma branch de funcionalidade:**
   ```sh
   git checkout -b feature/calculadora
   ```
2. **Desenvolver a funcionalidade, com commits frequentes.**
3. **Fazer push da feature branch para o repositório remoto:**
   ```sh
   git push origin feature/calculadora
   ```
4. **Abrir um Pull Request (PR) para a branch develop.**
5. **Revisar o código e resolver possíveis conflitos.**
6. **Fazer o merge na develop:**
   ```sh
   git checkout develop
   git merge feature/calculadora --no-ff
   git push origin develop
   ```
7. **Após testes e validação, integrar a develop na main:**
   ```sh
   git checkout main
   git merge develop --no-ff
   git push origin main
   ```

## 4. Versionamento e Tags

Após a integração na main, uma tag deve ser criada para marcar a versão do projeto:

```sh
git tag -a v1.0 -m "Versão 1.0 da calculadora"
git push origin v1.0
```

