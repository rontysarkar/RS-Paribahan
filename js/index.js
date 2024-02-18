let seatsLeft = parseInt(document.getElementById('seats-left').innerText);
let seatsCount =parseInt(document.getElementById('seats-count').innerText)
const selectSeats = [];


const seats = document.getElementsByClassName('seats');
for(const seat of seats){
  seat.addEventListener('click',function(){
    if(selectSeats.length < 4){
      seat.classList.add('bg-[#1dd100]')
      const seatName = seat.innerText
      selectseat(seatName);
     }
  })
}


function selectseat(seatName){
 if(! selectSeats.includes(seatName)){
    selectSeats.push(seatName)
    seatsLeft = seatsLeft - 1;
    seatsCount = seatsCount + 1;
    document.getElementById('seats-left').innerText = seatsLeft;
    document.getElementById('seats-count').innerText = seatsCount;
    
    
  }
}
