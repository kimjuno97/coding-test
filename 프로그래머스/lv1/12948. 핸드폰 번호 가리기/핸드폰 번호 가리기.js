function solution(phone_number) {
    return phone_number.replace(phone_number.slice(0,-4),'*'.repeat(phone_number.length-4))
}