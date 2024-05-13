### Lista de codigos

[![](https://img.shields.io/badge/OBJ%20do%20campo%20zoom%20%20para%20input-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#obj-do-campo-zoom-para-input) [![](https://img.shields.io/badge/Percorre%20dados%20tabela%20PxF-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#percorre-dados-tabela-pxf) [![](https://img.shields.io/badge/Recupera%20email%20via%20dataset-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#recupera-email-via-dataset) [![](https://img.shields.io/badge/Recupera%20email%20via%20fluigsdk-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#recupera-email-via-fluigsdk) [![](https://img.shields.io/badge/Desabilitar%20campos%20usar%20setShowDisabledFields-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#para-desabilitar-campos-usar-setshowdisabledfields) [![](https://img.shields.io/badge/desabilitar%20o%20bot%C3%A3o%20de%20excluir%20do%20form%20filho-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#para-desabilitar-o-botão-de-excluir-do-form-filho-usar-sethidedeletebutton) [![](https://img.shields.io/badge/ocultar%20os%20bot%C3%B5es%20Imprimir-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#para-ocultar-o-os-botões-imprimir-e-imprimir-em-nova-janela-deve-se-utilizar-o-método-sethideprintlink) [![](https://img.shields.io/badge/esconder%20campos-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#para-esconder-campos-usar-o-setvisible-ou-setvisiblebyid) [![](https://img.shields.io/badge/Ultimo%20evento,%20recebe%20o%20form-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#afterprocessing-ultimo-evento-recebe-o-form) [![](https://img.shields.io/badge/Primeiro%20evento%20a%20ser%20chamado,%20recebe%20o%20form-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#beforeprocessing-primeiro-evento-a-ser-chamado-recebe-o-form) [![](https://img.shields.io/badge/ao%20chamar%20o%20bot%C3%A3o%20%20%20%20%20%20movimentar-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#beforemovementoptions-é-chamado-ao-chamar-o-botão-movimentar-antes-de-mosstrar-as-opções-recebe-o-número-da-atividade-atual) [![](https://img.shields.io/badge/%C3%89%20chamado%20antes%20de%20ser%20movimentado-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#beforesendvalidade-é-chamado-antes-de-ser-movimentado-após-já-ter-selecionado-a-atividade-destino-recebe-numero-da-atividade-e-o-número-da-proxima) [![](https://img.shields.io/badge/Retorna%20o%20modo%20atual%20do%20form-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#getformmode-retorna-o-modo-atual-do-form) [![](https://img.shields.io/badge/Mascar%C3%A1s-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#mascarás) [![](https://img.shields.io/badge/Zoom-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#zoom) [![](https://img.shields.io/badge/Evento%20que%20retorna%20os%20campos%20de%20um%20pai%20filho-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#getchildrenfromtable-evento-que-retorna-os-campos-de-um-pai-filho-passando-o-nome-da-table) [![](https://img.shields.io/badge/%C3%ADndices%20de%20uma%20tabela%20filha-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#getchildrenindexes-retorna-os-índices-de-uma-tabela-filha-passando-o-nome-da-table) [![](https://img.shields.io/badge/usar%20o%20enableFields%20para%20os%20filhos-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#enablefields-é-possivel-usar-o-enablefields-para-os-filhos-precisa-o-indice-da-linha) [![](https://img.shields.io/badge/hAPI%20API%20de%20WorkFlow-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#hapi---api-de-workflow) [![](https://img.shields.io/badge/Esconde%20bot%C3%B5es%20do%20anexos-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#esconde-botões-do-anexos) [![](https://img.shields.io/badge/Esconde%20a%20caixa%20de%20anexos-5B618A?style=for-the-badge&logo=seach&logoColor=white )](#esconde-a-caixa-de-anexos) [![](https://img.shields.io/badge/Remover%20Duplicatas-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#remover-duplicatas) [![](https://img.shields.io/badge/Toast%20com%20tempo%20para%20sumir-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#toast-com-tempo-para-sumir) [![](https://img.shields.io/badge/Verifica%20se%20existem%20duplas%20iguais-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#verifica-se-existem-duplas-iguais) [![](https://img.shields.io/badge/Consultado%20o%20dataset%20da%20solicita%C3%A7%C3%A3o%20atual-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#consultado-o-dataset-da-solicitação-atual)

[![]()]()

### Obj do campo zoom para input

```javascript
    function configurarCampo(valor, campoId, selectedItem) {
    var campo = $("#" + campoId);
    
    	if(selectedItem.InputId == "ID DO CAMPO QUE QUERO PARA ENTRAR NO IF") {
	        if (valor !== undefined && valor !== null && valor !== "") {
		        campo.prop("readonly", true);
		        campo.val(valor);
        
		    } else {
		        campo.prop("readonly", false);
	    }
    }

}

configurarCampo(selectedItem[" "], "text_exemple", selectedItem);
```
###  Percorre dados tabela PxF

```javascript
    $('table.table[tablename="tb_exemplo"] tbody tr:visible').each(function(i, e) {
      var CAMPO = $(e).find('input[name^="NOME DO CAMPO"]').val();
      console.log(CAMPO);
    });

```

### Recupera email via dataset

```javascript
	var login = fluigAPI.getUserService().getCurrent().getLogin();

	var constraintMatricula = DatasetFactory.createConstraint("login", login, login, ConstraintType.MUST);
	var consulta = DatasetFactory.getDataset("colleague", null, [constraintMatricula], null);
	var matricula = consulta.values[0][1];
```

###  Recupera email via FluigSDK

```javascript
	fluigAPI.getUserService().getCurrent().getEmail();
```

### Para desabilitar campos usar setShowDisabledFields
```js
form.setShowDisabledFields(true);
```

### Para desabilitar o botão de excluir do form filho, usar setHideDeleteButton
```js
form.setHideDeleteButton(false);
```

### Para ocultar o os botões Imprimir e Imprimir em nova Janela, deve-se utilizar o método setHidePrintLink.
```js
form.setHidePrintLink(true);
```

### Para esconder campos usar o setVisible ou setVisibleById

```js
if(form.getFormMode() != "VIEW")  {
    customHTML.append("<script>");
    customHTML.append("function MostraEscondeBtn_zoom()");
    customHTML.append("{");
    customHTML.append("document.getElementById(\'zoomUsuario\').className = \'show\';");
    customHTML.append("document.getElementById(\'zoomModulo\').className = \'show\';");
    customHTML.append("}");
    customHTML.append("</script>");
}
```

### afterProcessing: Ultimo evento, recebe o form

nesse evento os dados já foram salvos, pode ser usado para verificar asinformações

```js
function afterProcessing(form){
}
```

### beforeProcessing: Primeiro evento a ser chamado, recebe o form

### beforeMovementOptions: É chamado ao chamar o botão      movimentar, antes de mosstrar as opções, recebe o número da atividade atual


```js
<script>
  var beforeMovementOptions = function(numState) {
    console.log("_________________ beforeMovementOptions");
    console.log("numState: " + numState);
    console.log("valor campo: " + document.form.c7_total.value);
    if (document.form.c7_total.value == '') {
      throw ("Erro: nenhum valor selecionado!");
    }
    return true;
  }
</script>
```

### beforeSendValidade: É chamado antes de ser movimentado, após já ter selecionado a atividade destino, recebe numero da atividade, e o número da proxima

```js
<script>
var beforeSendValidate = function(numState,nextState){
    console.log("-beforeSendValidate-");
    console.log("numState: " + numState);
    console.log("nextState: " + nextState);
    throw("Erro Xyz");
}
</script>
```

```js
<script>
var beforeSendValidate = function(numState,nextState){
  console.log("-beforeSendValidate-");
  console.log("numState: " + numState);
  console.log("nextState: " + nextState);
  var isOk = confirm("Deseja realmente enviar o processo ?");
  return isOk;
 }
</script>
```

### getFormMode: Retorna o modo atual do form

```js
form.getFormMode()
```

* ADD: inclusão
* MOD: edição
* VIEW: visualização
* NONE: qndo não há comunicação com o form, como na validação
  
### Mascarás

```html
    <input name="cep" type="text" mask="00000-000">
```

``` O fluig mobile não suporta o atributo mask.```

| Código | Descrição                      |
| :----: | ------------------------------ |
|   0    | Somente Números                |
|   9    | Somente Números mais opcional  |
|   \#   | Somente números mais recursivo |
|   A    | Números ou letras              |
|   S    | Somente letras entre A-Z e a-z |

### Zoom

```js
    <input
        type="zoom"
        id = "c7_total"
        name="c7_total"
        data-zoom="{
            'displayKey':'colleagueName',
            'datasetId':'colleague',
            'maximumSelectionLength':'2',
            'placeholder':'Escolha o usuário',
            'fields':[
                {
                  'field':'colleagueId',
                  'label':'ID'
                },{
                  'field':'colleagueName',
                  'label':'Nome',
                  'standard':'true'
                },{
                  'field':'login',
                  'label':'Login'
                }
            ]
        }"
    />
```

* type: o atributo type para este componente obrigatoriamente é 'zoom'
* name: nome do campo
* data-zoom: parâmetros do zoom em formato json onde:
  * maximumSelectionLength: limite de registros selecionáveis, caso não seja informado, o valor padrão é 1.
  * resultLimit: número máximo de resultados que serão listados na busca, o valor padrão é 300.
  * placeholder: texto de placeholder, que irá aparecer no zoom. Pode ser utilizado para instrução.
    * displayKey: coluna filtrável e de exibição após selecionado o registro
    * filterValues: atributo do dataset e valor para serem filtrados. Devem ser colocados em pares, separados por vírgula (,) onde o primeiro valor é o nome do campo e o segundo refere-se ao valor do campo.
  * datasetId ou cardDatasetId: opte por uma das opções:
    * datasetId:  é o nome do dataset (Built-in, CardIndex ou Customized).
    * cardDatasetId: é o numero de outro formulário para consulta.
    * fields: Estrutura do filtro
      * field: atributo do dataset que será utilizado.
      * label: descrição da coluna.
      * standard: a coluna que será utilizada como ordenação padrão e valor do registro selecionado.

### getChildrenFromTable: Evento que retorna os campos de um pai filho, passando o nome da table

### getChildrenIndexes: Retorna os índices de uma tabela filha, passando o nome da table

```js
    function validateForm(form){
      var indexes = form.getChildrenIndexes("tabledetailname");
      var total = 0;
      for (var i = 0; i < indexes.length; i++) {
        var fieldValue = parseInt(form.getValue("valor___" + indexes[i]));
        if (isNaN(fieldValue)){
            fieldValue = 0;
        }
        total = total + fieldValue;
        log.info(total);
      }
      log.info(total);
      if (total < 100) {
        throw "Valor Total da requisição não pode ser inferior a 100";
      }
    }
```

### enableFields: É possivel usar o enableFields para os filhos, precisa o indice da linha

```js
function enableFields(form){
  var indexes = form.getChildrenIndexes("ingredientes");
  for (var i = 0; i < indexes.length; i++) {
    form.setEnabled("quantidade___" + indexes[i], false);
    form.setEnabled("unidade___" + indexes[i], false);
    form.setEnabled("produto___" + indexes[i], false);
  }
}
```

## hAPI - API de WorkFlow

Em todos os eventos do processo é possível obter informações da API de Workflow. Cada evento possui acesso ao handle da API de workflow pela variável global hAPI. Os seguintes métodos estão disponíveis através da hAPI:

| Método    | Especificação |
| :----: | :--------: |
| getCardValue("nomeCampo") | Permite acessar o valor de um campo do formulário do processo, onde: nomeCampo = nome do campo do formulário. |

* nomeCampo: nome do campo do formulário. 

```js
var campoCheckbox = hAPI.getCardValue("campoCheckbox") == "on" ? true : false;
```

---
| Método | Especificação   |
| :----: | :----: |
| setCardValue("nomeCampo", "valor") | Permite definir o valor de um campo do formulário do processo, onde:nomeCampo: nome do campo do formulário; valor: valor a ser definido para o campo do formulário. |

* nomeCampo: nome do campo do formulário;
* valor: valor a ser definido para o campo do formulário.

| Método | Especificação   |
| :------: | :-----: |
| setAutomaticDecision(numAtiv, listaColab, "obs") | **A propriedade automaticTasks esta depreciada não havendo mais suporte a partir da atualização 1.5.9 do fluig.** É recomendada a utilização da atividade de [Serviço](http://tdn.totvs.com/pages/releaseview.action?pageId=237397494) ou Gateway Exclusivo. |
| getActiveStates() | Retorna uma lista das atividades ativas do processo. |
| getActualThread(numEmpresa, numProcesso, numAtiv) | Retorna a thread da atividade que está ativa, lembrando que em caso de atividades paralelas, retorna 0, 1, 2 e assim sucessivamente. |

* numEmpresa: número da empresa;
* numProcesso: número da solicitação;
* numAtiv: número da atividade.

```js
function afterTaskCreate(colleagueId) {
  
    var nrProxAtividade = getValue("WKNextState");
    if (nrProxAtividade == "5"){ //atividade entre paralelas
  
        var data = new Date();
        var numEmpresa = getValue("WKCompany");
      
        //seta o dia, mês (Janeiro é 0) e ano
        data.setDate(20);
        data.setMonth(10);
        data.setFullYear(2010);
         
        // Recupera o numero da solicitação
        var numProcesso = getValue("WKNumProces");
      
        // Seta o prazo para as 14:00
        hAPI.setDueDate(numProcesso, hAPI.getActualThread(numEmpresa, numProcesso, nrProxAtividade), colleagueId, data, 50400);
    }
}
```
---
| Método| Especificação     |
| :----: | :-------: |
| setDueDate(numProcesso, numThread, "userId", dataConclusao, tempoSeg) | Permite alterar o prazo de conclusão para uma determinada atividade do processo |

* numProcesso: número da solicitação;
* numThread: número da thread (normalmente 0, quando não se utiliza atividades paralelas);
* userId: o usuário responsável pela tarefa;
* dataConclusao: a nova data de conclusão;
* tempoSeg: tempo que representa a nova hora de conclusão, calculado em segundos após a meia-noite.

### Esconde botões do anexos
  
  ```js
	window.parent.$(".loadFilesSection").show();
	$(window.parent.document.querySelectorAll("[data-attachments-remove-attach]")[0]).show();
  ```

### Esconde a caixa de anexos 
  ```js
  window.parent.$("#processTabs").find("li").last().hide();
  ```

### Remover Duplicatas
  ```js
  function removerDuplicatasEmails(atual) {
      var palavras = atual.split(";"); // split do array

      var palavrasUnicas = [];
      var palavrasVistas = {};

      for (var i = 0; i < palavras.length; i++) {
        var palavraAtual = palavras[i].trim();
        if (!palavrasVistas[palavraAtual]) {
          palavrasUnicas.push(palavraAtual);
          palavrasVistas[palavraAtual] = true;
        }
      }

      var novaString = palavrasUnicas.join(";"); // Quando unificar 

      if (novaString.startsWith(";")) {  // Se começar com ; remove
        novaString = novaString.slice(1);
      }

      $("#hidden_email").val(novaString); 
    }
  ```

###  Toast com tempo para sumir
  ```js
	setTimeout(function () {
		FLUIGC.toast({
			message: "",
			title: "",
			type: "warning",
			timeout: "slow",
		});
	}, 500);
  ```

### Verifica se existem duplas iguais
  ```js
  if (selectedItem.inputId.startsWith('zConta_contabilCC') || selectedItem.inputId.startsWith('ztxt_centro_custo_pxf')) {
      const todasDuplas = [];

      $('table[tablename="tb_itens_ccr"] tbody tr:visible').each(function (i, e) {
        const centroCusto = $(e).find("[name^='ztxt_centro_custo_pxf']").val();
        const contaContabil = $(e).find("[name^='zConta_contabilCC']").val();

        const novaDupla = centroCusto + " - " + contaContabil;

        if (todasDuplas.includes(novaDupla)) {

          var matches = selectedItem.inputId.match(/\d+$/);

          $("#ztxt_centro_custo_pxf___" + matches).text("")
          $("#zConta_contabilCC___" + matches).text("")

          setTimeout(function () {
            FLUIGC.toast({
              message: " Linha com " + centroCusto + " e " + contaContabil + " existente!",
              title:
                "Atenção ",
              type: "warning",
              timeout: "slow",
            });
          }, 500);
        } else {
          todasDuplas.push(novaDupla);
        }
      });
    }
  ```

### Consultado o dataset da solicitação atual

  ```js
	var ctsPed = DatasetFactory.createConstraint('Coluna', "Nº SOLIC", "Nº SOLIC", ConstraintType.MUST);
	var dtsPed = DatasetFactory.getDataset('DTS', null, new Array(ctsPed), null).values;
  ```
