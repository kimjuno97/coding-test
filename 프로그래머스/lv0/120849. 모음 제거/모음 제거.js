function solution(my_string) {
   return  my_string.split('').filter(x=>{
        if(x!=='a'&& x!=='e'&& x!=='i'&& x!=='o'&& x!=='u'){
            return x
        }}).join('')
}