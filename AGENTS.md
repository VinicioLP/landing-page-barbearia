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

Nenhum código deve entrar na branch `main` sem passar pela esteira de qualidade aplicável ao escopo da mudança.

## Regras operacionais

- Não implementar tarefas sem Issue relacionada, exceto preparações locais indispensáveis para viabilizar o próprio fluxo.
- Separar tarefas independentes em Issues e PRs distintos.
- Evitar misturar `Correção`, `Melhoria` e `Nova função` no mesmo PR quando puderem ser entregues separadamente.
- Manter a descrição do PR clara o suficiente para orientar revisão, deploy e continuidade por outro agente.
- Atualizar este arquivo sempre que o processo de trabalho do projeto mudar.

## Esteira de qualidade

Toda mudança deve declarar no PR quais gates foram executados, quais não se aplicam e por quê. A profundidade da esteira deve acompanhar o risco da entrega: não criar burocracia sem valor, mas não permitir entrada em `main` sem validação objetiva.

Gates mínimos antes de merge em `main`:

- Issue vinculada e classificada como `Correção`, `Melhoria` ou `Nova função`.
- Branch dedicada e Pull Request aberto.
- Lint, formatação e checagens estáticas aplicáveis passando.
- Testes aplicáveis passando ou justificativa explícita quando ainda não existirem.
- Revisão visual em desktop e mobile para qualquer mudança de interface.
- Revisão de acessibilidade quando houver UI, formulário, navegação, modal, mídia ou conteúdo interativo.
- Revisão de segurança para formulários, integrações externas, dados do usuário, scripts de terceiros e deploy.
- Performance budget verificado para páginas públicas, assets e interações críticas.
- Riscos, limitações e próximos passos registrados no PR.

Ferramentas a considerar quando fizerem sentido para a stack:

- Observabilidade: Sentry para erros de frontend; OpenTelemetry para instrumentação padronizada quando houver backend, APIs ou tracing distribuído; Datadog ou New Relic apenas quando houver necessidade real de APM, infraestrutura, logs centralizados ou operação contínua.
- Qualidade e lint: Biome para lint e formatação em projetos JS/TS; Commitlint quando houver padronização de commits; Knip quando houver dependências, exports ou arquivos mortos a controlar; arch-contract quando houver fronteiras arquiteturais reais; Stryker quando houver lógica crítica suficiente para justificar testes de mutação.
- Testes: unitários para lógica e componentes isolados; integração para fluxos entre módulos, APIs ou formulários; end-to-end com Playwright para jornadas principais; Codecov quando houver cobertura a acompanhar em CI; Endtest apenas se fizer sentido para fluxos monitorados em nuvem ou testes sem manutenção local pesada.
- Segurança e operação: rate limit em endpoints, formulários, webhooks e qualquer ação suscetível a abuso; revisão de segurança antes de expor integrações; separação clara entre frontend e backend quando houver backend; termos de uso e política de privacidade revisados e aprovados pelo jurídico antes de coletar dados pessoais, publicar formulários sensíveis, usar analytics não essencial ou lançar campanhas.

Regras de arquitetura:

- Evitar overengineering e dependências que não resolvem um problema atual.
- Evitar bottlenecks absurdos em renderização, carregamento, rede, build e deploy.
- Componentizar desde o início, mantendo componentes pequenos, nomeados pelo domínio e fáceis de substituir.
- Aplicar DRY com critério, sem criar abstrações prematuras para duplicações pequenas ou ainda instáveis.
- Antes de criar um componente, procurar componentes existentes e reutilizar ou evoluir o que já existe.
- Separar responsabilidades de apresentação, estado, integração externa e regras de negócio quando essas camadas existirem.
- Documentar decisões arquiteturais relevantes no PR quando houver trade-off real.

## Padrão de interface, motion e feedback

Antes de implementar qualquer interface, o agente deve trabalhar como designer de produto sênior e fazer um preflight de design com três camadas:

1. Referência visual:
   - Analisar a referência anexada, descrita, gerada ou escolhida para a tela.
   - Extrair layout, hierarquia, espaçamento, densidade, paleta, tipografia e padrões de componentes.
   - Quando não houver referência visual, não iniciar a implementação da interface; primeiro propor ou solicitar uma direção visual clara.
2. Critério de UI/UX:
   - Revisar contraste, grid, responsividade, acessibilidade, estados vazios, loading, erro e microcopy.
   - Apontar riscos antes de codar, incluindo riscos de legibilidade, excesso visual, baixa conversão, acessibilidade, performance, motion excessivo e manutenção.
   - Definir como a tela será validada em desktop, mobile e estados relevantes.
3. Componentes:
   - Procurar componentes existentes do projeto antes de criar novos.
   - Reutilizar, compor ou evoluir componentes existentes sempre que isso preservar consistência e reduzir manutenção.
   - Quando fizer sentido para a stack, usar padrões de shadcn/ui, 21st.dev, Magic UI ou Aceternity como inspiração ou base, sem copiar componentes decorativos sem função.
   - Não inventar componentes ornamentais que não ajudem navegação, compreensão, conversão, feedback ou confiança.

Depois de implementar uma tela, o agente deve reportar:

- O que foi inspirado na referência visual.
- Quais componentes existentes, padrões ou bibliotecas foram usados.
- Quais decisões melhoram a qualidade visual, a usabilidade e a consistência do produto.

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
