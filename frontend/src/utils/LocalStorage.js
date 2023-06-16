
const addDate=(booking)=>{
    console.log(booking)
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

export { addDate, getDate };