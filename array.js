- cách sử dụng object: object sắp xếp dữ liệu dựa vào các thông tin key: value; 
	key: value khi truy xuất dữ liệu ta cũng sẽ gọi ra các key.
- cách sử dụng array: array sắp xếp dữ liệu dựa vào thứ tự các dữ liệu; 
	khi truy xuất ta sẽ truy cập vào thứ tự các index , bắt đầu từ [0]
Ví dụ: 
var arrA = {
  name : 'Phuong',
  age: 20,
  isMale: false
}
var myNameA = arrA.name;
myNameA;
var arrB = ['Phuong',20,false];
var myNameB = arrB[0];
myNameB;
