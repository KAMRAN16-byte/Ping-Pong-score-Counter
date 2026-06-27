let player_one_score = 0
let player_two_score = 0
const player_one_button = document.querySelector('#Player_one_button')
const player_two_button = document.querySelector('#Player_two_button')
const reset = document.querySelector('#reset')
const player_one_score_span = document.querySelector('#player_one')
const player_two_score_span = document.querySelector('#player_two')
const score_seletor = document.querySelector('#score_limit')
let select_value = score_seletor.value

reset.addEventListener('click', () => {
    player_one_score = player_two_score = 0
    player_two_score_span.innerText = player_one_score_span.innerText = 0
    player_one_button.disabled = player_two_button.disabled = false
    player_one_score_span.setAttribute('class', '')
    player_two_score_span.setAttribute('class', '')

})

player_one_button.addEventListener('click', () => {
    player_one_score += 1
    player_one_score_span.innerText = player_one_score
    if (player_one_score == select_value) {
        player_one_button.disabled = true
        player_two_button.disabled = true
        player_one_score_span.setAttribute('class', 'text-green-600')
        player_two_score_span.setAttribute('class', 'text-red-600')
    }
})

player_two_button.addEventListener('click', () => {
    player_two_score += 1
    player_two_score_span.innerText = player_two_score
    if (player_two_score == select_value) {
        player_one_button.disabled = true
        player_two_button.disabled = true
        player_two_score_span.setAttribute('class', 'text-green-600')
        player_one_score_span.setAttribute('class', 'text-red-600')
    }
})

score_seletor.addEventListener('change', () => {
    select_value = score_seletor.value
})