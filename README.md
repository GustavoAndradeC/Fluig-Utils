## Lista de codigos

[![](https://img.shields.io/badge/Funções-2F3134?style=for-the-badge&logo=hyperledger&logoColor=white)](https://github.com/Ileriayo/markdown-badges)


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

configurarCampo(selectedItem["BANCO"], "text_exemple", selectedItem);
```

```javascript
$('table.table[tablename="tb_exemplo"] tbody tr:visible').each(function(i, e) {
    var CAMPO = $(e).find('input[name^="NOME DO CAMPO"]').val();
    console.log(CAMPO);
});

```
