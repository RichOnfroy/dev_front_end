$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome'
        }, 
        messages: {
            email: 'Por favor, digite um e-mail valido'
        },
        messages: {
            telefone: 'Por favor, digite seu telefone'
        },
        messages: {
            cpf: 'Por favor, digite seu CPF'
        },
        messages: {
            endereco: 'Por favor, digite seu Endereço'
        },
        messages: {
            cep: 'Por favor, digite seu cep'
        }
       
    })
})