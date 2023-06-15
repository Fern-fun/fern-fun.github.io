import{R as n,j as s,a as e,I as c}from"./index-ed06aa7e.js";const l="/assets/api.fern.fun-2c877eaf.jpg",h="/assets/elektronhack-622083c3.jpg",u="/assets/tools.fern.fun-3fef3888.jpg",g="/assets/ssh-alert-8a70701b.jpg",d="/assets/cloud.fern.fun-158dfbd3.jpg",m="/assets/game.fern.fun-fede3a51.jpg",f="/assets/pi.fern.fun-5ef06ea6.jpg",p=[{title:"elektronhack",description:"Our project involves organizing a hackathon event that brings together developers, designers, and entrepreneurs to collaborate on building innovative solutions within a limited time frame.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"},{name:"QQLKAA",icon:"https://avatars.githubusercontent.com/u/27441333?v=4"}],isPrivate:!1,img:h,href:"https://zse.edu.pl/elektronhack/",tags:["react","polish"]},{title:"tools.fern.fun",description:"The project aims to develop web development tools that assist programmers in creating websites efficiently and with ease",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!1,img:u,href:"https://tools.fern.fun/",tags:["react","english"]},{title:"ssh-alert",description:"ssh alert is a simple tool to alert you when someone is trying to login to your server via ssh.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!1,img:g,href:"https://github.com/MrJacob12/ssh-alert",tags:["rust","english"]},{title:"cloud.fern.fun",description:"Cloud storage project is a platform for storing and accessing data over the internet, providing users with scalable and secure storage infrastructure.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!0,img:d,href:"",tags:["react","typescript","english"]},{title:"game.fern.fun",description:"The guessing game project involves identifying the correct flag from a set of options. Players are challenged to test their knowledge and recognition of various flags from around the world.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!1,img:m,href:"https://game.fern.fun/",tags:["react","english"]},{title:"api.fern.fun",description:"This API project is designed to provide a backend service for a web or mobile application. It allows users to create, read, update, and delete data through RESTful endpoints.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!0,img:l,href:"https://api.fern.fun/",tags:["python","english"]},{title:"pi.fern.fun",description:"Server dashboard project is a web application that provides an overview of server status, system health metrics, and logs in real-time.",author:[{name:"MrJacob12",icon:"https://avatars.githubusercontent.com/u/46843555?v=4"}],isPrivate:!1,img:f,href:"https://pi.fern.fun/",tags:["react","english"]}],v="/assets/lock-8c46c67c.svg";function _(){const[r,i]=n.useState([]);return n.useEffect(()=>{p.forEach(t=>{i(o=>[...o,s("div",{className:"lab-element hoverScale",children:[s("div",{className:"lab-container__img",children:[t.isPrivate?e("div",{className:"lab-container__img-private",children:e("img",{src:v,alt:"lock"})}):null,e("img",{src:t.img,alt:"lab"})]}),e("div",{className:"lab-container__title",children:s("div",{children:[e("div",{children:t.href!==""?e("a",{href:t.href,target:"_blank",rel:"noreferrer",children:t.title}):t.title}),e("div",{children:e(c,{children:t.description})})]})}),s("div",{className:"lab-container__content",children:[e("div",{className:"lab-container__content__tags",children:t.tags.map(a=>s("span",{className:a,children:["#",a]},a))}),e("div",{className:"lab-container__content__author",children:t.author.map(a=>s("a",{href:`https://github.com/${a.name}`,target:"_blank",rel:"noreferrer",children:[a.icon!==""?e("img",{src:a.icon,alt:"author",className:"author-icon"}):null,e("span",{className:"author",children:a.name},a.name)]},a.name))})]})]},t.title)])})},[]),e("div",{className:"lab-container fadeInFromBottom",children:r.map(t=>t)})}export{_ as default};
