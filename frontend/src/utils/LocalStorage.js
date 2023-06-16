
const addDate=(booking)=>{
    const newBooking = {
        check_in : String(booking?.check_in)?.slice(4, 16),
        check_out : String(booking?.check_out)?.slice(4, 16),
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