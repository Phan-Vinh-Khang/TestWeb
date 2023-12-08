/*
useDispatch sẽ ref vào func dispatch
(ref vào store trong wrap Provider, store ref vào func dispatch nên useDispatch sẽ ref dc vào func dispatch)

useSelector ref vào state

nếu 1 state redux thay đổi thì ở các function sử dụng useSelector() có return liên quan đến
data thay dôi sẽ load lại function
{
    data:1,
    data2:2
}
nếu data1 thay đổi ở những nơi sử dụng
useSelector((data)=>{
return data.data1
})
sẽ load lại và nơi return về data2 sẽ ko load lại
function useSelector sẽ kiem tra state dc return ở function doi so dc call trong function useSelector
và sau đó sẽ kiểm tra data 2 state có khác nhau hay ko, nếu khác sẽ load lại function nơi useSelector dc call
và nếu function dispatch() dc call dác function useSelector sẽ dc call để kiểm tra có thay đổi ở state như trên ko
nếu có sẽ load lại function, nếu ko sẽ k load lại function
*/