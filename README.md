## Lista de codigos

[![](https://img.shields.io/badge/OBJ%20do%20campo%20zoom%20%20para%20input-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#obj-do-campo-zoom-para-input) [![](https://img.shields.io/badge/Percorre%20dados%20tabela%20PxF-5B618A?style=for-the-badge&logo=seach&logoColor=white)](#percorre-dados-tabela-pxf)

## Obj do campo zoom para input

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
##  Percorre dados tabela PxF

```javascript
	$('table.table[tablename="tb_exemplo"] tbody tr:visible').each(function(i, e) {
		var CAMPO = $(e).find('input[name^="NOME DO CAMPO"]').val();
		console.log(CAMPO);
	});

```
