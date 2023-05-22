/*
sử dụng combineReducers({
    var1:funcreducer1,
    var2:funcreducer2,
}) muốn sử dụng 2 func reducer khác nhau,combineReducers() sẽ hộp 2 func reducer lại làm 1 obj với các var properties
nhưng nếu như vậy khi call dispatch sẽ call func ở reducer nào?(test: ca 2 func reducer se dc call va action.type nao co thi se return datastate reducer neu ca 2 action.type deu co ca 2 se return datastatic reducer)
1 data static state có thể chứa nhiều data có thể ko cần sử dụng combineReducers()
nếu sử dụng 1 data static state chứa nhiều data mỗi lần dispatch phải ...state lại,
nếu 1 state reducer chứa quá nhiều data hieu nang se giam khi phai ...state
data state reducer obj ref vào obj data khác (1 obj có thể chứa nhiều data)

parameter action trong func reducer phải ref đến 1 static data obj có chứa properties 'type' (required)

sử dụng persist để luu static data state vào storage

khi call 1 func, parameter của func sẽ ref dc vào các doi so hidden(cac doi so nay dc them vao do su dung     )

reducer ver1:
sử dụng connect(funcname1,funcname2)(app) khi func app dc call(tu dong call khi chay chuong trinh)
2 funcname sẽ chay và return về staticdata,staticdata đó sẽ sẽ tu dong truyen cho app lam doi so
var parameter trong funcreturnveelementsẽ ref vào doi so do
(
    function funcname1(state ){
        return{
            statereducer:state.state
        }
    }
    function funcname2(dispatch){
        return{
            dispatch:dispatch('test')
        }
    }

    <App
     statereducer: state.state,
     dispatch: dispatch('test')
    />
    var obj trong funcreturnveelement app sẽ ref vào 2 doi so này 
)
reducer toolkit:
các func trong reducers sẽ tuong tu action.type
export các var properties ref đến func trong obj reducers để sử dụng
parameter sẽ ref đến doi so khi func dc call và sẽ tự dong' lai thành 1 obj và
thêm 1 var propertes type ref đến tên funcdccall.toString() và thêm 1 properties data ref vào doi so  dc truyen vao khi call func reducer
hoac
var action la 1 obj là có 2 properties type va data
properties type se ref vao ten funcdccall.toString()
properties data se ref vao doi so

staticdatastate chỉ ref dc đến obj// check

sử dụng useSelect() khi datastatereducer mới/thay đổi sẽ reload func ở nơi useSelect() dc call 
*/