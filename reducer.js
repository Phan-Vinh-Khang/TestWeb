/*
sử dụng combineReducers({
    var1:func1,
    var2:func2,
}) muốn sử dụng 2 func reducer khác nhau,combineReducers() sẽ hộp 2 func reducer lại làm 1 obj với các var properties
1 data static state có thể chứa nhiều data có thể ko cần sử dụng combineReducers()
nếu sử dụng 1 data static state chứa nhiều data mỗi lần dispatch phải ...state lại,
nếu 1 state reducer chứa quá nhiều data hieu nang se giam khi phai ...state
data state reducer obj ref vào obj data khác (1 obj có thể chứa nhiều data)

parameter action trong func reducer phải ref đến 1 static data obj có chứa properties 'type' (required)

sử dụng persist để luu static data state vào storage

khi call 1 func, parameter của func sẽ ref dc vào các doi so hidden(cac doi so nay dc them vao do su dung     )
*/