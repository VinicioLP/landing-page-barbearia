# Contexto do projeto

Este projeto é uma landing page profissional para uma barbearia.

## Fluxo obrigatorio de trabalho

Antes de implementar qualquer mudanca, todo agente deve:

1. Criar ou localizar uma Issue no GitHub para a tarefa.
2. Classificar a Issue com exatamente uma destas categorias:
   - `Correção`: ajustes de bug, erro visual, comportamento incorreto ou regressão.
   - `Melhoria`: refinamentos de UX, desempenho, acessibilidade, design, conteúdo ou manutenção.
   - `Nova função`: novas seções, componentes, integrações, fluxos ou capacidades.
3. Trabalhar em uma branch dedicada vinculada à Issue.
4. Entregar a mudanca por Pull Request.

## Padrao de Pull Request

Todo Pull Request deve conter:

- Issue relacionada, mencionada explicitamente na descrição.
- Resumo objetivo do que mudou.
- Como a mudança foi validada, incluindo comandos, revisão visual ou testes manuais.
- Riscos conhecidos.
- Limitações.
- Próximos passos.

## Regras operacionais

- Não implementar tarefas sem Issue relacionada, exceto preparações locais indispensáveis para viabilizar o próprio fluxo.
- Separar tarefas independentes em Issues e PRs distintos.
- Evitar misturar `Correção`, `Melhoria` e `Nova função` no mesmo PR quando puderem ser entregues separadamente.
- Manter a descrição do PR clara o suficiente para orientar revisão, deploy e continuidade por outro agente.
- Atualizar este arquivo sempre que o processo de trabalho do projeto mudar.
