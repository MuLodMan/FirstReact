import lc  from "leancloud-storage"
var APP_ID = '5zVNvGpbbFQ8G0w43Qf5Nrf6-gzGzoHsz';
var APP_KEY = 'UvhVqykWuBjPLoNVWRiO5hUd';

lc.init({
  appId: APP_ID,
  appKey: APP_KEY
});
let UserInfo =lc.Object.extend("UserInfo"),
    Todo = lc.Object.extend("TodoList");
    UserInfo = new UserInfo()
    Todo = new Todo(0)
export{UserInfo,Todo,lc}
 