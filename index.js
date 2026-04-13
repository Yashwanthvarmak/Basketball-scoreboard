let home = document.getElementById("score-home")
let guest = document.getElementById("score-guest")

let count = 0
let guestCount = 0
function PlusOne() {
    count += 1;
    home.textContent=count
} 
function PlusTwo() {
    count += 2;
    home.textContent=count
} 
function PlusThree() {
    count += 3;
    home.textContent=count
} 
function GuestPlusOne() {
    guestCount += 1;
    guest.textContent=guestCount
} 
function GuestPlusTwo() {
    guestCount += 2;
    guest.textContent=guestCount
} 
function GuestPlusThree() {
    guestCount += 3;
    guest.textContent=guestCount
} 

