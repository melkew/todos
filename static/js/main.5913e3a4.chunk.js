(this.webpackJsonptodo1=this.webpackJsonptodo1||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(16),l=n.n(c),r=(n(23),n(17)),i=n(3),d=n(4),s=n(6),u=n(5),m=function(){return a.a.createElement("header",{className:"active"},a.a.createElement("h1",{style:{textAlign:"center",margin:"30px",color:"gray"}},"The Amazing To Do App"),a.a.createElement("p",{style:{marginBottom:"15px"}},"Add, Edit or Delete a Todo Item."))},p=(n(24),function(e){return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return e.handleChange(e.id)}}),a.a.createElement("span",{className:e.completed?"completed-item":null},e.title),a.a.createElement("button",{onClick:function(){e.deleteTodoHandler(e.id)}},"Delete"))}),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",correctLength:!0},e.onChangeHandler=function(t){e.setState({title:t.target.value})},e.onSubmitHandler=function(t){t.preventDefault(),e.state.title.length>3&&e.state.title.length<25?(e.props.addTodoItem(e.state.title),e.setState({title:"",correctLength:!0})):e.setState({correctLength:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{action:"",onSubmit:this.onSubmitHandler,className:"form"},a.a.createElement("input",{className:"input-text",type:"text",placeholder:"ToDo...",value:this.state.title,onChange:this.onChangeHandler}),a.a.createElement("input",{type:"submit",value:"hinzuf\xfcgen",className:"input-submit"}),this.state.correctLength?null:a.a.createElement("p",null,"Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!"))}}]),n}(o.Component),f=n(45),g=n(2),v=n.n(g),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.onChangeCheckbox=function(t){v.a.put("https://meladtodo.herokuapp.com/todos/".concat(t));var n=e.state.todos.map((function(e){return e._id===t&&(e.completed=!e.completed),e}));e.setState({todos:n})},e.deleteTodoHandler=function(t){console.log("delete item:",t),v.a.delete("https://meladtodo.herokuapp.com/todos/".concat(t));var n=e.state.todos.filter((function(e){return e._id!==t}));console.log(n),e.setState({todos:n})},e.addTodoItem=function(t){console.log("add:",t),v.a.post("https://meladtodo.herokuapp.com/todos",{title:t});var n={id:Object(f.a)(),title:t,completed:!1},o=Object(r.a)(e.state.todos);o.unshift(n),e.setState({todos:o}),console.log(o)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Komponente ist fertig (componentDidMount)"),v.a.get("https://meladtodo.herokuapp.com/todos").then((function(t){e.setState({todos:t.data})}))}},{key:"componentDidUpdate",value:function(){console.log("component did update!")}},{key:"render",value:function(){var e=this;return console.log("Komponente render wird aufgerufen"),a.a.createElement("div",{className:"container"},a.a.createElement(m,null),a.a.createElement(h,{addTodoItem:this.addTodoItem}),a.a.createElement("ul",null,this.state.todos.map((function(t){return a.a.createElement(p,{key:t._id,id:t._id,title:t.title,completed:t.completed,handleChange:e.onChangeCheckbox,deleteTodoHandler:e.deleteTodoHandler})}))))}}]),n}(a.a.Component);n(42);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,{text:"Mein Text kommt als property"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5913e3a4.chunk.js.map