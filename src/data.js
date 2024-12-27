export  const API_KEY = 'AIzaSyCR9___f5g05pQwpWVMwISR_jaX6057Jwo';

export const valueConverter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'k';
    }
    else{
        return value;
    }
}