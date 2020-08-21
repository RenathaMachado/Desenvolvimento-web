function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(404).json({nope: true});
    } else {
      next();
    }
  }
 
 
 class despesas{
     constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
     }
     validarDados(){
        for (let i in this){
            if (this[i] == undefined || this[i] == '' || this[i] == null){  // this é utilizado pq representa o atributo
               return false
            
            }
        }
            return true
    }  
}

 // classe criada para quando for inserido novos dados os mesmos não sobrepor as informações anteriores.
//  Lógica para que os dados sejam inseridos no jason corretamente. Banco de dados
class bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){// valor null pq "id" não foi criado
            localStorage.setItem('id', 0) // valor sendo setado para que o id seja criado e receba o valor 0
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id') // recuperando o valor criado
        return (parseInt(proximoId) + 1) // cada nova lista a ser criada a mesma será inserida e não substituída
        
    }
     gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
        
    } 

    recuperarRegistros(){
        console.log('estamos aqui')
        //localStorage.getItem(d)
    }
}
 
 let Bd = new bd()

function cadastrarDespesa(){
   let ano = document.getElementById('ano')
   let mes = document.getElementById('mes')
   let dia = document.getElementById('dia')
   let tipo = document.getElementById('tipo')
   let descricao = document.getElementById('descricao')
   let valor = document.getElementById('valor')

   let Despesas = new despesas(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

   if (Despesas.validarDados()){
     //Bd.gravar(Despesas) 
     document.getElementById('modal_titulo').innerHTML= 'Registro inserido com sucesso'
     document.getElementById('modal-titulo-div').className= 'modal-header text-success'
     document.getElementById('modal-conteudo').innerHTML= 'Despesa foi cadastrada com sucesso '
     document.getElementById('modal-btn').innerHTML= 'Voltar'
     document.getElementById('modal-btn').className='btn btn-success'
    $('#sucessoGravacao').modal('show') // código Jquery
   }else{
    document.getElementById('modal_titulo').innerHTML= 'Erro na inclusão do registro' 
    document.getElementById('modal-titulo-div').className= 'modal-header text-danger' 
    document.getElementById('modal-conteudo').innerHTML= 'Verifique se todas as informações foram inseridas corretamente'
    document.getElementById('modal-btn').innerHTML= 'Voltar e corrigir'
    document.getElementById('modal-btn').className='btn btn-danger'
    $('#erroGravacao').modal('show') // código Jquery
   }
}

function carregaListaDespesas(){
    Bd.recuperarRegistros()
    //localStorage.getItem(d).innerHTML
}






