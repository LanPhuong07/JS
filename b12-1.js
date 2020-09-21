var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
Trong JS array cũng là 1 object, khi a và b được khai báo, máy tính sẽ chừa lại 2 vùng nhớ cho 2 array này nằm ở 2 nơi khác nhau. Khi bạn so sánh === thì bạn vừa so sánh nó có cùng kiểu dữ liệu và cùng truy xuất đến vị trí đó không, mà như ở trên đã nói thì 2 array nằm 2 vị trí khác nhau, vì thế nó cho ra false
