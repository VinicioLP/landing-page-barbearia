# Contexto do projeto

Este projeto é uma landing page profissional para uma barbearia.

## Fluxo obrigatório de trabalho

Antes de implementar qualquer mudança, todo agente deve:

1. Criar ou localizar uma Issue no GitHub para a tarefa.
2. Classificar a Issue com exatamente uma destas categorias:
   - `Correção`: ajustes de bug, erro visual, comportamento incorreto ou regressão.
   - `Melhoria`: refinamentos de UX, desempenho, acessibilidade, design, conteúdo ou manutenção.
   - `Nova função`: novas seções, componentes, integrações, fluxos ou capacidades.
3. Trabalhar em uma branch dedicada vinculada à Issue.
4. Entregar a mudança por Pull Request.

## Padrão de Pull Request

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

## Padrão de interface, motion e feedback

Toda interface criada ou alterada neste projeto deve seguir os princípios da skill `design-motion-principles`, com o contexto de landing page profissional:

- Priorizar a lente de Jakub Krehel para polimento sutil de produção.
- Usar a lente de Jhey Tompkins com moderação para momentos de marca, descoberta e encantamento visual.
- Aplicar a lente de Emil Kowalski como filtro para decidir se uma animação deve existir, especialmente em navegação, formulários e ações frequentes.

Antes de adicionar qualquer animação, o agente deve aplicar o gate de frequência:

- Interações raras podem ter motion mais expressivo quando isso reforçar a marca.
- Interações ocasionais devem ter motion sutil, rápido e funcional.
- Interações frequentes devem ser instantâneas ou quase sem animação.
- Ações iniciadas por teclado não devem depender de animação.

Requisitos obrigatórios:

- Usar lazy loading quando fizer sentido para imagens, seções pesadas, mapas, widgets externos, galerias ou conteúdo abaixo da primeira dobra.
- Criar skeleton screens ou placeholders estruturais para carregamentos perceptíveis.
- Usar animações suaves de entrada e saída em seções, cards, listas, menus, modais e feedbacks temporários.
- Incluir estados de progresso em elementos interativos que disparam ações assíncronas, como envio de formulário, abertura de agenda, carregamento de mapa ou envio para WhatsApp.
- Fornecer feedback visual claro para ações do usuário, incluindo hover, focus, active, sucesso, erro, vazio, indisponível e carregando.
- Manter transições consistentes entre telas, cards, modais, menus e listas.
- Preferir animações com `transform`, `opacity`, `filter`, `clip-path` ou `mask`; evitar animar `width`, `height`, `top`, `left`, `margin`, `padding` ou `font-size`.
- Usar `will-change` apenas de forma pontual e específica em elementos que realmente serão animados.
- Garantir suporte a `prefers-reduced-motion` em toda animação.
- Evitar loops decorativos, pulsações chamativas, parallax agressivo, zoom amplo, rotação excessiva ou qualquer motion que possa causar desconforto.

Diretrizes de timing e sensação:

- Hover e feedbacks pequenos: 150ms a 220ms.
- Entradas de elementos: 220ms a 450ms, combinando opacidade, deslocamento leve e, quando fizer sentido, blur sutil.
- Saídas de elementos: mais discretas que as entradas, com menor deslocamento e menor destaque visual.
- Modais, drawers e menus: movimento deve partir da origem lógica do componente.
- Easing deve usar curvas customizadas ou springs suaves; evitar `ease` genérico como padrão.

Antes de finalizar qualquer entrega com interface, o agente deve revisar a experiência como designer de produto sênior e corrigir sinais de amadorismo:

- Transições bruscas, travadas ou com atraso perceptível.
- Elementos que aparecem ou somem sem feedback.
- Estados de carregamento vazios ou genéricos.
- Botões sem progresso quando uma ação demora.
- Hover, focus ou active inconsistentes.
- Animações que competem com o conteúdo principal.
- Layout shifts causados por carregamento tardio.
- Falta de alternativa para usuários com redução de movimento ativada.
