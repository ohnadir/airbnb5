
const addDate=(booking)=>{
    const newBooking = {
        check_in : booking?.check_in,
        check_out : booking.check_out,
        night: booking?.night,
        guests : booking?.guest
    }
    localStorage.setItem('date', JSON.stringify(newBooking));
}
const getDate=()=>{
    let date ;
    const stored = localStorage.getItem('date');
    if(stored){
        date =  JSON.parse(stored);
    }
    return date;
}

const bookingDate =()=>{

    const bookingDate = [];
    const date = JSON.parse(localStorage.getItem('date'));
    const firstIndex = date?.check_in?.slice(4, 6)
    const lastIndex = date?.check_out?.slice(4, 6)
    const middleIndex = date?.check_in?.slice(0, 3);
    const bookedDate = {
        "month" : middleIndex,
        "days" : bookingDate
    }
    for(let i = firstIndex; i <=lastIndex; i++){
        bookingDate.push(Number(i));
    }
    return bookedDate;
}


export { addDate, getDate, bookingDate };