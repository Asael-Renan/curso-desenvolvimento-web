class Despesa {
    constructor(ano, mes, dia, descricao, tipo, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if (this[i] == null || this[i] == undefined || this[i] == '') {
                return false
            } else {
                return true
            }
        }
    }
}

class Bd {

    constructor () {
        let id = localStorage.getItem('id')
        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) +1
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDispesa () {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        descricao.value,
        tipo.value,
        valor.value
        )

        if (despesa.validarDados()){
            //bd.gravar(despesa)
            console.log('gravou')
        } else {
            console.log('nao gravou')
            alert('Dados invalidos')
        }
}
