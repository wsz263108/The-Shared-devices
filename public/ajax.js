// ajax({
//     url:'',                  路由地址------------必填项
//     type:'',                 get/post,默认get
//     async:'',                是否异步,默认true
//     dataType:'',             是否执行JSON.parse方法,默认不执行
//     data:'',                 前端需要传递的数据,字符串/对象  默认为空字符串
//     proce:function(r){}       接受响应里面需要做的事情,不填则不执行
// })

function ajax(options){
  // 判断是否有url值  
  if(!options.url){
      throw new Error('url是必填选项')
  }
  // 判断type输入是否是get和post
  if(typeof options.type === 'string' || options.type=== undefined){
      if(!(options.type===undefined || options.type.toUpperCase()==='GET' || options.type.toUpperCase()==='POST' || options.type==='')){
          throw new Error('type只支持get/post')
      }
  }else{
      throw new Error('请按照规则传入type数据')
  }
  // 判断是否异步
  if(!(typeof options.async==='boolean' || options.async===undefined)){
      throw new Error('async只接受bool类型的值')
  }
  //是否执行JSON.parse 方法
  if(!(typeof options.dataType==='boolean' || options.dataType===undefined)){
      throw new Error('dataType只接收bool类型的值')
  }
  //判断data data可以接收的内容可以是一个字符串,也可以是一个对象
  if(!(typeof options.data==='string' || options.data===undefined ||Object.prototype.toString.call(options.data)==='[object Object]')){
      throw new Error('data只能传递字符串或者对象')
  }
  // 准备默认值
  const _default={
      url:options.url,
      type:options.type?options.type.toUpperCase():'GET',
      async:typeof(options.async)==='boolean'?options.async:true,
      dataType:typeof(options.dataType)==='boolean'?options.dataType:false,
      data:typeof(options.data)==='string'?options.data:''
  }
  // 单独处理对象形式的data
  if(Object.prototype.toString.call(options.data)==='[object Object]'){
      let str=''
      for(let attr in options.data){
          str+=`${attr}=${options.data[attr]}&`
      }
      _default.data=str.slice(0,-1)
  }

  // 准备发送请求     使用_default对象里面的默认值
  // 1.创建一个ajax对象ajax
  let xhr
  if(XMLHttpRequest){
      xhr=new XMLHttpRequest()
  }else{
      xhr=new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 2.配置请求参数
  xhr.open(_default.type,_default.url+`${_default.type==="GET" ? '?'+_default.data:''}`,_default.async)
   // 判断是否添加请求头
   if(_default.type==='POST'){
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
  }

  xhr.send(_default.type==='GET' ? "": _default.data)
  // 3.接受响应  
  xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
          let r
          if(_default.dataType){
              r=JSON.parse(xhr.responseText);
          }else{
              r=xhr.responseText;
          }
          if('proce' in options){
              options.proce(r)
          }
      }
  }
}