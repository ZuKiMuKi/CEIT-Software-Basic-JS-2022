let randomNumber = Math.floor(Math.random() * 100) //ຕົວເລກທີ່ສຸ່ມຈາກ 1-100
let guess = 0
let times = 0

while (guess != randomNumber) {
    times += 1
    guess = prompt("ເດົາຕົວເລກຕັ້ງແຕ່1-100: ")
    if (guess > randomNumber) {
        alert("ລອງຕົວເລກໜ້ອຍກວ່ານີ້")
    } else if (guess < randomNumber) {
        alert("ລອງຕົວເລກຫຼາຍກວ່ານີ້")
    } else {
        alert("ຍິນດີນໍາ,ທ່ານເຮັດສໍາເລັດແລ້ວ!")
        alert("ທ່ານລອງທັງໝົດ " + times + " ຄັ້ງ.")
    }
}