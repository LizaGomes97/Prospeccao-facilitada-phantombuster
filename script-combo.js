/**
 * Script para alterar o tamanho da página para 200 itens e extrair os dados
 */

// PARTE 1: Alterar o tamanho da página para 200 itens
function alterarTamanhoPagina() {
  console.log("Iniciando alteração do tamanho da página...");
  
  // Encontrar o elemento select dentro da estrutura especificada
  const fieldGroup = document.querySelector('[data-testid="FieldGroup-csvInteractiveTablePageSizeSelect"]');
  
  if (!fieldGroup) {
    console.error('Elemento FieldGroup-csvInteractiveTablePageSizeSelect não encontrado');
    return false;
  }
  
  // Encontrar o select dentro da div relativa
  const selectElement = fieldGroup.querySelector('div.tw-relative > select.tw-block.tw-py-1\\.5.tw-pl-2.tw-pr-5.tw-w-full.disabled\\:tw-opacity-100.tw-font-qanelas.tw-font-medium.tw-text-body-l.tw-text-body-primary.disabled\\:tw-text-body-tertiary.tw-text-ellipsis.tw-overflow-hidden.tw-whitespace-nowrap.tw-appearance-none.tw-bg-base.tw-border-primary.tw-rounded-1\\.5.disabled\\:tw-bg-primary.disabled\\:tw-cursor-not-allowed.focus\\:tw-ring.focus\\:tw-border-highlight.focus\\:tw-ring-highlight\\/20.hover\\:tw-ring.hover\\:tw-border-highlight.hover\\:tw-ring-highlight\\/20.\\!tw-py-1.tw-border-base');
  
  if (!selectElement) {
    console.error('Elemento select não encontrado dentro do FieldGroup');
    return false;
  }
  
  // Verificar se já existe opção com valor 200
  let optionElement = Array.from(selectElement.options).find(option => option.value === '200');
  
  // Se não existir, vamos criar a opção
  if (!optionElement) {
    optionElement = document.createElement('option');
    optionElement.value = '200';
    optionElement.textContent = '200 itens por página';
    selectElement.appendChild(optionElement);
  }
  
  // Definir o valor 200 como selecionado
  selectElement.value = '200';
  
  // Disparar evento de mudança para que a página responda à alteração
  const changeEvent = new Event('change', { bubbles: true });
  selectElement.dispatchEvent(changeEvent);
  
  console.log('Tamanho da página alterado para 200 itens com sucesso!');
  return true;
}

// PARTE 2: Extrair dados da página
function extrairDados() {
  console.log("Iniciando extração de dados...");
  
  // Array para armazenar os dados extraídos
  const dados = [];
  
  // Determinando número máximo de itens na lista
  let maxIndex = 0;
  const titleElements = document.querySelectorAll('[data-testid$="_title"]');
  maxIndex = titleElements.length;
  
  console.log(`Total de elementos encontrados: ${maxIndex}`);
  
  // Extrair dados para cada item
  for (let i = 0; i < maxIndex; i++) {
    const item = {
      titulo: "",
      categoria: "",
      numero: ""
    };
    
    // Extrair Título
    try {
      // Seguir o caminho exato da especificação
      const tituloTd = document.querySelector(`[data-testid="${i}_title"]`);
      if (tituloTd) {
        const tituloSpan = tituloTd.querySelector('span.tw-flex.tw-items-center.tw-gap-2 > span.tw-truncate > span.tw-font-qanelas.tw-text-body-secondary.tw-truncate.tw-max-w-full.\\!tw-block.tw-font-medium.tw-text-body-l');
        if (tituloSpan) {
          item.titulo = tituloSpan.getAttribute('title') || tituloSpan.textContent.trim();
        }
      }
    } catch (e) {
      console.error(`Erro ao extrair título para o item ${i}:`, e);
    }
    
    // Extrair Categoria
    try {
      const categoriaTd = document.querySelector(`[data-testid="${i}_category"]`);
      if (categoriaTd) {
        const categoriaSpan = categoriaTd.querySelector('span.tw-flex.tw-items-center.tw-gap-2 > span.tw-truncate > span.tw-font-qanelas.tw-text-body-secondary.tw-truncate.tw-max-w-full.\\!tw-block.tw-font-medium.tw-text-body-l');
        if (categoriaSpan) {
          item.categoria = categoriaSpan.getAttribute('title') || categoriaSpan.textContent.trim();
        }
      }
    } catch (e) {
      console.error(`Erro ao extrair categoria para o item ${i}:`, e);
    }
    
    // Extrair Número
    try {
      const numeroTd = document.querySelector(`[data-testid="${i}_phoneNumber"]`);
      if (numeroTd) {
        const numeroSpan = numeroTd.querySelector('span.tw-flex.tw-items-center.tw-gap-2 > span.tw-truncate > span.tw-font-qanelas.tw-text-body-secondary.tw-truncate.tw-max-w-full.\\!tw-block.tw-font-medium.tw-text-body-l');
        if (numeroSpan) {
          item.numero = numeroSpan.getAttribute('title') || numeroSpan.textContent.trim();
        }
      }
    } catch (e) {
      console.error(`Erro ao extrair número para o item ${i}:`, e);
    }
    
    // Adicionar ao array de dados apenas se tiver pelo menos um campo preenchido
    if (item.titulo || item.categoria || item.numero) {
      dados.push(item);
    }
  }
  
  return dados;
}

// Função para criar tabela HTML
function criarTabela(dados) {
  // Criar elemento de tabela
  const tabela = document.createElement('table');
  tabela.style.borderCollapse = 'collapse';
  tabela.style.width = '100%';
  tabela.style.marginTop = '20px';
  tabela.style.fontFamily = 'Arial, sans-serif';
  
  // Criar cabeçalho
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const headers = ['Título', 'Categoria', 'Número'];
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid #ddd';
    th.style.padding = '8px';
    th.style.textAlign = 'left';
    th.style.backgroundColor = '#f2f2f2';
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  tabela.appendChild(thead);
  
  // Criar corpo da tabela
  const tbody = document.createElement('tbody');
  
  dados.forEach((item, index) => {
    const row = document.createElement('tr');
    row.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f9f9f9';
    
    // Adicionar células com dados
    const campos = ['titulo', 'categoria', 'numero'];
    campos.forEach(campo => {
      const td = document.createElement('td');
      td.textContent = item[campo] || '-';
      td.style.border = '1px solid #ddd';
      td.style.padding = '8px';
      row.appendChild(td);
    });
    
    tbody.appendChild(row);
  });
  
  tabela.appendChild(tbody);
  return tabela;
}

// Função para exportar dados para CSV
function exportarParaCSV(dados) {
  let csvContent = 'Título,Categoria,Número\n';
  
  dados.forEach(item => {
    const titulo = item.titulo ? `"${item.titulo.replace(/"/g, '""')}"` : '""';
    const categoria = item.categoria ? `"${item.categoria.replace(/"/g, '""')}"` : '""';
    const numero = item.numero ? `"${item.numero.replace(/"/g, '""')}"` : '""';
    
    csvContent += `${titulo},${categoria},${numero}\n`;
  });
  
  return csvContent;
}

// Função para mostrar resultados
function mostrarResultados(dados) {
  // Criar tabela visual
  const tabela = criarTabela(dados);
  
  // Criar container para exibir a tabela na página
  const container = document.createElement('div');
  container.id = 'resultado-extracao';
  container.style.position = 'fixed';
  container.style.top = '10px';
  container.style.right = '10px';
  container.style.width = '80%';
  container.style.maxHeight = '80vh';
  container.style.backgroundColor = '#fff';
  container.style.zIndex = '9999';
  container.style.padding = '15px';
  container.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  container.style.overflowY = 'auto';
  container.style.borderRadius = '5px';
  
  // Adicionar cabeçalho
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '15px';
  
  const titulo = document.createElement('h2');
  titulo.textContent = 'Dados Extraídos';
  titulo.style.margin = '0';
  
  const botoesContainer = document.createElement('div');
  
  // Adicionar botão para copiar dados como CSV
  const btnCopiar = document.createElement('button');
  btnCopiar.textContent = 'Copiar como CSV';
  btnCopiar.style.marginRight = '10px';
  btnCopiar.style.padding = '8px 12px';
  btnCopiar.style.cursor = 'pointer';
  btnCopiar.style.backgroundColor = '#4CAF50';
  btnCopiar.style.color = 'white';
  btnCopiar.style.border = 'none';
  btnCopiar.style.borderRadius = '4px';
  btnCopiar.onclick = function() {
    const csvContent = exportarParaCSV(dados);
    navigator.clipboard.writeText(csvContent)
      .then(() => alert('Dados copiados para a área de transferência!'))
      .catch(err => console.error('Erro ao copiar dados: ', err));
  };
  
  // Adicionar botão para fechar
  const btnFechar = document.createElement('button');
  btnFechar.textContent = 'Fechar';
  btnFechar.style.padding = '8px 12px';
  btnFechar.style.cursor = 'pointer';
  btnFechar.style.backgroundColor = '#f44336';
  btnFechar.style.color = 'white';
  btnFechar.style.border = 'none';
  btnFechar.style.borderRadius = '4px';
  btnFechar.onclick = function() {
    document.body.removeChild(container);
  };
  
  // Adicionar informações
  const info = document.createElement('p');
  info.textContent = `Total de ${dados.length} itens encontrados.`;
  info.style.margin = '10px 0';
  
  // Adicionar elementos ao container
  botoesContainer.appendChild(btnCopiar);
  botoesContainer.appendChild(btnFechar);
  header.appendChild(titulo);
  header.appendChild(botoesContainer);
  
  container.appendChild(header);
  container.appendChild(info);
  container.appendChild(tabela);
  
  // Adicionar container à página
  document.body.appendChild(container);
}

// Função principal que coordena todo o processo
function executarScriptCompleto() {
  // Primeiro: alterar o tamanho da página
  console.log("Iniciando o script completo...");
  
  // Mostrar mensagem de processamento
  const msgProcessando = document.createElement('div');
  msgProcessando.id = 'msg-processando';
  msgProcessando.style.position = 'fixed';
  msgProcessando.style.top = '20px';
  msgProcessando.style.left = '50%';
  msgProcessando.style.transform = 'translateX(-50%)';
  msgProcessando.style.padding = '10px 20px';
  msgProcessando.style.borderRadius = '4px';
  msgProcessando.style.backgroundColor = '#3498db';
  msgProcessando.style.color = 'white';
  msgProcessando.style.fontFamily = 'Arial, sans-serif';
  msgProcessando.style.zIndex = '10000';
  msgProcessando.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  msgProcessando.textContent = 'Processando... Aguarde enquanto alteramos o tamanho da página e extraímos os dados.';
  document.body.appendChild(msgProcessando);
  
  // Alterar o tamanho da página
  const resultadoAlteracao = alterarTamanhoPagina();
  
  if (!resultadoAlteracao) {
    document.body.removeChild(msgProcessando);
    alert('Não foi possível alterar o tamanho da página. Verifique o console para detalhes.');
    return;
  }
  
  // Esperar um tempo para a página carregar os novos dados
  setTimeout(() => {
    // Extrair os dados
    const dados = extrairDados();
    
    // Remover mensagem de processamento
    if (document.getElementById('msg-processando')) {
      document.body.removeChild(msgProcessando);
    }
    
    // Exibir dados no console
    console.table(dados);
    
    // Mostrar resultados na tela
    mostrarResultados(dados);
    
    console.log("Script completo executado com sucesso!");
  }, 2000); // Esperar 2 segundos para carregar os dados
}

// Executar o script completo
executarScriptCompleto();
