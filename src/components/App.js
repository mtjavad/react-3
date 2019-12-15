import React,{Component} from 'react';
import Header from './Header';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class App extends Component{
    counter=0;
    state={
        todos:[],
        showDone:false
    };
    addTask=(text)=>{
      this.setState(prevState=>{
          return {
              todos: [...prevState.todos,
                  {id:this.counter++, task:text,done:false}
              ],
          }
      })
    };
    deleteTask=(id)=>{
        this.setState(prevState=>{
            return {
                todos: prevState.todos.filter(el=>el.id!==id)
            }
        })
    };
    toggleDone=(id)=>{
        let item=this.state.todos.find(el=>el.id===id);
        item.done=!item.done;
        let filterTodo=this.state.todos.filter(el=>el.id!==id);
        this.setState({
            todos: [...filterTodo,item]
        });
        // console.log();
    };
    edit=(id,text)=>{
        let item=this.state.todos.find(el=>el.id===id);
        item.task=text;
        let filterTodo=this.state.todos.filter(el=>el.id!==id);
        this.setState({
            todos: [...filterTodo,item]
        });
    };
    render() {
        let {todos}=this.state;
        let filterTodo=todos.filter(el=>el.done===this.state.showDone);
        return (<div>
            <div className="App">
                <Header/>
                <main>
                    <AddTodo add={this.addTask}/>
                    <div className="todosList">
                        <div className="container">
                            <div className="d-flex flex-column align-items-center ">
                                <nav className="col-6 mb-3">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className={`nav-item nav-link font-weight-bold ${this.state.showDone===false?'active':''}`} style={{cursor: 'pointer'}}
                                           id="nav-home-tab" onClick={()=>this.setState({showDone:false})}>undone <span className="badge badge-secondary">{todos.filter(el=>el.done===false).length}</span></a>
                                        <a className={`nav-item nav-link font-weight-bold ${this.state.showDone===true?'active':''}`} style={{cursor: 'pointer'}}
                                           id="nav-profile-tab"  onClick={()=>this.setState({showDone:true})}>done <span className="badge badge-success">{todos.filter(el=>el.done===true).length}</span></a>
                                    </div>
                                </nav>

                                {todos.length>0 ? filterTodo.map(item=><TodoItem item={item} delete={this.deleteTask} done={this.toggleDone} edit={this.edit}/>) : <p>there is no task</p>}
                                {/*<div className="col-6 mb-2">*/}
                                    {/*<div*/}
                                        {/*className="d-flex justify-content-between align-items-center border rounded p-3">*/}
                                        {/*<div>*/}
                                            {/*hello roocket*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                            {/*<button type="button" className="btn btn-info btn-sm">edit</button>*/}
                                            {/*<button type="button" className="btn btn-danger btn-sm ml-1">delete</button>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-6 mb-2">*/}
                                    {/*<div*/}
                                        {/*className="d-flex justify-content-between align-items-center border rounded p-3">*/}
                                        {/*<div>*/}
                                            {/*hello roocket*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                            {/*<button type="button" className="btn btn-info btn-sm">edit</button>*/}
                                            {/*<button type="button" className="btn btn-danger btn-sm ml-1">delete</button>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-6 mb-2">*/}
                                    {/*<div*/}
                                        {/*className="d-flex justify-content-between align-items-center border rounded p-3">*/}
                                        {/*<div>*/}
                                            {/*hello roocket*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                            {/*<button type="button" className="btn btn-info btn-sm">edit</button>*/}
                                            {/*<button type="button" className="btn btn-danger btn-sm ml-1">delete</button>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>)
    }
}
export default App;