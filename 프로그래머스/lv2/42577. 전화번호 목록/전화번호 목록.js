function solution(phone_book) {
    phone_book.sort();
    
    for(let i=0; i<phone_book.length-1; i++) {
        const nextString = phone_book[i+1].substr(0, phone_book[i].length);
        if(phone_book[i] === nextString){
            return false;
        }
    }
    return true;
}

