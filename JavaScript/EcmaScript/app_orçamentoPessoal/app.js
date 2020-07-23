 class despesas{
     constructor(ano, mes, dia, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.descricao = descricao
        this.valor = valor
     }
 }

 // classe criada para quando for inserido novos dados os mesmos não sobrepor as informações anteriores.

class bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.getItem('id',0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
    }
     gravar(d){
        //localStorage.setItem('Despesas', JSON.stringify(d))
        let id = this.getProximoId()
        localStorage.setItem('id', id)
    }
 }
 
 let Bd = new bd()

function cadastrarDespesa(){
   let ano = document.getElementById('ano')
   let mes = document.getElementById('mes')
   let dia = document.getElementById('dia')
   let descricao = document.getElementById('descricao')
   let valor = document.getElementById('valor')

   let Despesas = new despesas(ano.value, mes.value, dia.value, descricao.value, valor.value)

    Bd.gravar(Despesas)
}




