let time = new Date();
let hora = time.getHours();
let minutos = time.getMinutes();
let segundos = time.getSeconds();
let horaTotal = `${hora}:${minutos}`;

const menu = [
    {
        opção: 'Cardápio',
        opções: [
            'Pizza',
            'Hamburguer',
            'Pastel'
        ],
        id: '1'
    },
    {
        opção: 'Reservar uma mesa', 
        opções: [
            'Mesa para 2',
            'Mesa para 3',
            'Mesa para 4'
        ],
        id: '2'
    }
]

const cardapio = [
    {
        opção: 'Pizza',
        opções: [
            'Mussarela',
            'Calabresa',
            'Portuguesa'
        ],
        id: '1'
    },
    {
        opção: 'Hamburguer',
        opções: [
            'Tradicional',
            'Chedda Bacon',
            'XTudo'
        ],
        id: '2'
    },
    {
        opção: 'Pastel',
        opções: [
            'Pastel de Carne',
            'Pastel de queijo',
            'Pastel de presunto'
        ],
        id: '3'
    }
]

verificaHora();
document.querySelector('.btn_send').addEventListener('click', sendMsg);
document.querySelector('input').addEventListener('keyup', keyUp);

function verificaHora() {
    if(horaTotal >= '05:00' && horaTotal <= '18:00') {
        document.querySelector('.area_chat').style.backgroundColor = '#eee';
    }else {
        document.querySelector('.area_chat').style.backgroundColor = '#222';
        document.querySelector('.area_chat').style.border = '0';
        document.querySelector('.container .area_chat .single').style.boxShadow = 'none';
    }
}

function keyUp(e) {
    if(e.key == 'Enter') {
        sendMsg(); 
    }
}

function sendMsg() {
    let areaPadrao = document.querySelector('.area_padrao');
    let areaCardapio = document.querySelector('.cardapio');
    let areaReserva = document.querySelector('.reserva');
    let input = document.querySelector('input').value;

    if(!input) {

    }else {
        let html = `
            <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
            <div class="client_msg"><p>${input}</p></div>
            <div class="item_msg_auto"><p>Olá, ${horaTotal >= '5:00' && horaTotal <= '12:00' ? 'Bom dia' : horaTotal > '12:00' && horaTotal <= '18:00' ? 'Boa tarde' : 'Boa noite'}, o que você deseja?</p></div>
            <div class="item_padrao"><p>${menu[0].opção}</p></div>
            <div class="item_padrao"><p>${menu[1].opção}</p></div>                               
        `;

        document.querySelector('.area_title .active').style.backgroundColor = '#4efa48';
        areaPadrao.style.display = 'block';
        areaPadrao.innerHTML = html;
    }

    if(input.length != 0) {

        if(input.toLowerCase() == 'cardapio' || input.toLowerCase() == 'cardápio') {
            document.querySelector('.cardapio').innerHTML = `
                <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                <div class="client_msg"><p>${input}</p></div>
                <div class="cardapio_item"><p>${menu[0].opções[0]}</p></div>
                <div class="cardapio_item"><p>${menu[0].opções[1]}</p></div>
                <div class="cardapio_item"><p>${menu[0].opções[2]}</p></div>
                <div class="cardapio_item voltar"><p>Voltar</p></div>
            `;

            document.querySelector('.cardapio .voltar p').style.backgroundColor = '#888';
            document.querySelector('.cardapio .voltar p').style.color = '#fff';
            document.querySelector('.area_padrao').style.display = 'none';
            document.querySelector('.cardapio').style.display = 'block';

        }else if(input.toLowerCase() == 'reservar uma mesa') {
            document.querySelector('.reserva').innerHTML = `
                <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                <div class="client_msg"><p>${input}</p></div>
                <div class="reserva_item"><p>${menu[1].opções[0]}</p></div>
                <div class="reserva_item"><p>${menu[1].opções[1]}</p></div>
                <div class="reserva_item"><p>${menu[1].opções[2]}</p></div>
                <div class="reserva_item voltar"><p>Voltar</p></div>
            `;

            document.querySelector('.reserva .voltar p').style.backgroundColor = '#888';
            document.querySelector('.reserva .voltar p').style.color = '#fff';
            document.querySelector('.area_padrao').style.display = 'none';
            document.querySelector('.reserva').style.display = 'block';
        }

        document.querySelector('input').value = '';     
    }

    if(input.toLowerCase() === 'voltar') {
        areaReserva.style.display = 'none';
        areaCardapio.style.display = 'none';
        areaPadrao.style.display = 'block';
    }

    if(areaCardapio.style.display === 'block') {
        if(input.toLowerCase() == 'pizza') {
            areaPadrao.style.display = 'none';
            document.querySelector('.cardapio').innerHTML = `
                <div class="item_variante">
                    <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                    <div class="client_msg"><p>${input}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[0].opções[0]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[0].opções[1]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[0].opções[2]}</p></div>
                    <div class="cardapio_item voltar"><p>Voltar</p></div>
                </div>
            `;

            document.querySelector('.cardapio .voltar p').style.backgroundColor = '#888';
            document.querySelector('.cardapio .voltar p').style.color = '#fff';

        }else if(input.toLowerCase() == 'hamburguer') {
            areaPadrao.style.display = 'none';
            document.querySelector('.cardapio').innerHTML = `
                <div class="item_variante">
                    <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                    <div class="client_msg"><p>${input}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[1].opções[0]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[1].opções[1]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[1].opções[2]}</p></div>
                    <div class="cardapio_item voltar"><p>Voltar</p></div>
                </div>
            `;

            document.querySelector('.cardapio .voltar p').style.backgroundColor = '#888';
            document.querySelector('.cardapio .voltar p').style.color = '#fff';

        }else if(input.toLowerCase() == 'pastel') {
            areaPadrao.style.display = 'none';
            document.querySelector('.cardapio').innerHTML = `
                <div class="item_variante">
                    <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                    <div class="client_msg"><p>${input}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[2].opções[0]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[2].opções[1]}</p></div>
                    <div class="cardapio_item_option"><p>${cardapio[2].opções[2]}</p></div>
                    <div class="cardapio_item voltar"><p>Voltar</p></div>
                </div>
            `;

            document.querySelector('.cardapio .voltar p').style.backgroundColor = '#888';
            document.querySelector('.cardapio .voltar p').style.color = '#fff';
        }else {
            areaPadrao.style.display = 'none';
        }

        document.querySelector('input').value = ''; 
    
    }  
    
    if(areaReserva.style.display == 'block') {
        if(input.toLowerCase() == 'mesa para 2') {
            areaPadrao.style.display = 'none';
            document.querySelector('.reserva').innerHTML = `
                <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                <div class="client_msg"><p>${input}</p></div>
                <div class="reservado_com_sucesso"><p>${input} reservada com sucesso! <i class="fa-solid fa-check"></i></p></div>
                <div class="reserva_item voltar"><p> 1 - Finalizar atendimento</p></div>
            `;
        }else if(input.toLowerCase() == 'mesa para 3') {
            areaPadrao.style.display = 'none';
            document.querySelector('.reserva').innerHTML = `
                <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                <div class="client_msg"><p>${input}</p></div>
                <div class="reservado_com_sucesso"><p>${input} reservada com sucesso! <i class="fa-solid fa-check"></i></p></div>
                <div class="reserva_item voltar"><p> 1 - Finalizar atendimento</p></div>
            `;
        }else if(input.toLowerCase() == 'mesa para 4') {
            areaPadrao.style.display = 'none';
            document.querySelector('.reserva').innerHTML = `
                <div class="item_hora"><span>${horaTotal.toLocaleString('pt-BR', {timezone: 'UTC'})}</span></div>
                <div class="client_msg"><p>${input}</p></div>
                <div class="reservado_com_sucesso"><p>${input} reservada com sucesso! <i class="fa-solid fa-check"></i></p></div>
                <div class="reserva_item voltar"><p> 1 - Finalizar atendimento</p></div>
            `;
        }else {
            areaPadrao.style.display = 'none';
        }

        if(input === '1') {
            areaPadrao.style.display = 'none';
            areaCardapio.style.display = 'none';
            areaReserva.style.display = 'none';

            document.querySelector('.area_loading').innerHTML = '<div class="loader"></div>';

            setTimeout(() => {
                window.location.href = '/';
            }, 200);
        }
    }
}