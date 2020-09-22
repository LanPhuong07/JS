Mỗi phần tử trong mảng chúng thì có 2 phần index và value. Khi bạn sử dụng vòng lặp for in để duyệt qua từng phần tử trong mảng thì nó sẽ trả về index của phần tử. Ngược lại for of sẽ trả về value của phần tử.
Ví dụ:

For in:
``let toedoArr = [
“Read a book”,
“Coding”,
“Gym”
];
// For … in
for(let index in toedoArr){
console.log(index);
}``
// For .. of for(let value of toedoArr){ console.log(value); }
