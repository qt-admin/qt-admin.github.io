import{d as w,r as h,a as v,c as b,b as m,u as x,e as o,w as n,f as i,g as N,o as V,h as k,t as C,E as l,i as y,A as E,s as I,p as L,j as S,_ as U}from"./index-Ca2subOT.js";const B=""+new URL("bg_login-DdiFcylE.svg",import.meta.url).href,R=r=>(L("data-v-2333f4cc"),r=r(),S(),r),A={class:"wrap"},T={class:"card"},j=["src"],D=R(()=>m("h5",{class:"login-title"},"欢迎登录",-1)),F=w({__name:"login",setup(r){const f=N(),e=h({userName:"admin",password:"admin123"}),c=v(!1);function g(){const{userName:_,password:a}=C(e);if(!_){l.warning("请输入用户名");return}if(!a){l.warning("请输入密码");return}c.value=!0,y.post(E.login,{user_name:e.userName,password:e.password}).then(t=>{c.value=!1;const{data:s,message:u,success:d}=t||{};if(!d){l.error(u||"服务器错误");return}if(!s||!s.token){l.error("登录失败，请稍后重试");return}I(s.token),f.push("/")}).catch(t=>{l.error(t||"服务器错误"),c.value=!1})}return(_,a)=>{const t=i("el-input"),s=i("el-form-item"),u=i("el-button"),d=i("el-form");return V(),b("main",A,[m("section",T,[m("img",{class:"bg-login",src:x(B)},null,8,j),o(d,{class:"form"},{default:n(()=>[D,o(s,null,{default:n(()=>[o(t,{modelValue:e.userName,"onUpdate:modelValue":a[0]||(a[0]=p=>e.userName=p),class:"login-input",placeholder:"请输入用户名","prefix-icon":"User",clearable:"",maxlength:20},null,8,["modelValue"])]),_:1}),o(s,null,{default:n(()=>[o(t,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=p=>e.password=p),type:"password","show-password":"",class:"login-input",placeholder:"请输入密码","prefix-icon":"Lock",clearable:"",maxlength:20},null,8,["modelValue"])]),_:1}),o(s,null,{default:n(()=>[o(u,{disabled:!e.userName||!e.password,loading:c.value,class:"w-100%",type:"primary","auto-insert-space":"",onClick:g},{default:n(()=>[k("登录")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})])])}}}),q=U(F,[["__scopeId","data-v-2333f4cc"]]);export{q as default};
