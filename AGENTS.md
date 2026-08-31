# Contexto do projeto

Este projeto e uma landing page profissional para uma barbearia.

## Fluxo obrigatorio de trabalho

Antes de implementar qualquer mudanca, todo agente deve:

1. Criar ou localizar uma Issue no GitHub para a tarefa.
2. Classificar a Issue com exatamente uma destas categorias:
   - `Correcao`: ajustes de bug, erro visual, comportamento incorreto ou regressao.
   - `Melhoria`: refinamentos de UX, desempenho, acessibilidade, design, conteudo ou manutencao.
   - `Nova funcao`: novas secoes, componentes, integracoes, fluxos ou capacidades.
3. Trabalhar em uma branch dedicada vinculada a Issue.
4. Entregar a mudanca por Pull Request.

## Padrao de Pull Request

Todo Pull Request deve conter:

- Issue relacionada, mencionada explicitamente na descricao.
- Resumo objetivo do que mudou.
- Como a mudanca foi validada, incluindo comandos, revisao visual ou testes manuais.
- Riscos conhecidos.
- Limitacoes.
- Proximos passos.

## Regras operacionais

- Nao implementar tarefas sem Issue relacionada, exceto preparacoes locais indispensaveis para viabilizar o proprio fluxo.
- Separar tarefas independentes em Issues e PRs distintos.
- Evitar misturar `Correcao`, `Melhoria` e `Nova funcao` no mesmo PR quando puderem ser entregues separadamente.
- Manter a descricao do PR clara o suficiente para orientar revisao, deploy e continuidade por outro agente.
- Atualizar este arquivo sempre que o processo de trabalho do projeto mudar.
