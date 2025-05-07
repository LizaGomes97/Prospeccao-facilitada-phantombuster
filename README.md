# Guia de Uso: Script de Extração de Dados

Este guia explica como usar o script para extrair dados de uma tabela na web, mesmo sem conhecimento técnico avançado.

## O que este script faz?

Este script tem duas funções principais:
1. Aumenta o número de itens exibidos na página para 200 (em vez dos 10, 20 ou 50 padrão)
2. Extrai os dados da tabela, organizando-os em três colunas: Título, Categoria e Número

## Como utilizar o script (passo a passo com imagens)

### 1. Abra a página que contém a tabela

Primeiro, navegue até a página onde se encontram os dados que você deseja extrair.

### 2. Abra o Console do navegador

O console é uma ferramenta que permite executar códigos diretamente no seu navegador. Veja como acessá-lo nos navegadores mais comuns:

#### No Google Chrome:
- Clique com o botão direito em qualquer lugar da página
- Selecione "Inspecionar" no menu que aparece
- Na janela que abrir, clique na aba "Console"

OU

- Pressione as teclas `Ctrl + Shift + J` (Windows/Linux) ou `Cmd + Option + J` (Mac)

#### No Mozilla Firefox:
- Clique com o botão direito em qualquer lugar da página
- Selecione "Inspecionar" ou "Inspecionar elemento"
- Na janela que abrir, clique na aba "Console"

OU

- Pressione as teclas `Ctrl + Shift + K` (Windows/Linux) ou `Cmd + Option + K` (Mac)

#### No Microsoft Edge:
- Clique com o botão direito em qualquer lugar da página
- Selecione "Inspecionar" no menu que aparece
- Na janela que abrir, clique na aba "Console"

OU

- Pressione as teclas `Ctrl + Shift + J`

### 3. Cole o script no Console

- Copie todo o código do script (selecione o código completo e pressione `Ctrl+C` ou clique com o botão direito e selecione "Copiar")
- Clique na área do Console onde você pode digitar
- Cole o código pressionando `Ctrl+V` ou clicando com o botão direito e selecionando "Colar"

### 4. Execute o script

- Após colar o código no Console, pressione a tecla `Enter`
- Você verá uma mensagem "Processando..." que indica que o script está trabalhando

### 5. Veja os resultados

Após alguns segundos (o tempo pode variar dependendo da quantidade de dados), uma tabela aparecerá na tela mostrando:
- Uma tabela com todos os dados extraídos organizados em colunas
- O número total de itens encontrados
- Botões para "Copiar como CSV" e "Fechar"

### 6. Salve ou copie os dados

Para salvar os dados extraídos, você tem duas opções:

#### Opção 1: Copiar como CSV (recomendado)
- Clique no botão "Copiar como CSV"
- Uma mensagem aparecerá informando que os dados foram copiados
- Abra o Excel, Google Planilhas ou qualquer outro programa de planilhas
- Crie uma nova planilha em branco
- Cole os dados pressionando `Ctrl+V`
- Os dados serão organizados automaticamente em colunas

#### Opção 2: Copiar diretamente da tabela
- Selecione os dados na tabela exibida (clique e arraste)
- Copie com `Ctrl+C`
- Cole no programa desejado com `Ctrl+V`

### 7. Feche a janela de resultados

Quando terminar de usar os dados, clique no botão "Fechar" para remover a tabela da tela.

## Problemas comuns e soluções

### O script não funciona ou apresenta erro
- Verifique se você copiou o código completo
- Certifique-se de que está na página correta que contém a tabela
- Tente recarregar a página e executar o script novamente

### Não consigo encontrar o Console
- Tente usar os atalhos de teclado mencionados acima
- Procure pelo menu "Mais ferramentas" ou "Ferramentas de desenvolvimento" no menu do seu navegador

### Os dados estão incompletos
- Verifique se a página carregou completamente antes de executar o script
- Se a página tiver muitos dados, pode ser necessário rolar para baixo para carregar mais itens antes de executar o script

### A mensagem "Processando..." não desaparece
- Aguarde um pouco mais, pois páginas com muitos dados podem demorar para processar
- Se demorar mais de 30 segundos, recarregue a página e tente novamente

## Observações importantes

- Este script foi desenvolvido especificamente para extrair dados desta página em particular
- O script não envia nenhum dado para a internet ou para terceiros; tudo acontece apenas no seu navegador
- Nenhuma alteração permanente é feita na página; após recarregar, tudo volta ao normal

## Dicas adicionais

- Para melhor desempenho, feche outras abas e programas antes de executar o script em páginas com muitos dados
- Se precisar extrair dados regularmente, considere salvar o script em um arquivo de texto para usar novamente no futuro
- O formato CSV pode ser aberto no Excel e em outros programas de planilha para análises adicionais
