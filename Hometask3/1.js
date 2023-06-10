const user_input = +prompt('Введите температуру в градусах Цельсия');
alert(`Цельсия: ${user_input}\nФаренгейт: ${Math.floor(((9 / 5) * user_input + 32)*100)/100}`)