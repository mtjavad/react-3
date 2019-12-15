import React,{Component} from 'react';
import EditTodoItem from "./EditTodoItem";

class TodoItem extends Component{
    state={showEdit:false};
    hideEdit=()=>{
        this.setState({
            showEdit:false
        })
    };
    render() {
        const {item}=this.props;
        return (<>
                {this.state.showEdit ? <EditTodoItem item={item} edit={this.props.edit} hideEdit={this.hideEdit}/> :
                    <div className="col-6 mb-2">
                        <div
                            className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {item.task}
                            </div>
                            <div>
                                <button type="button" className="btn btn-info btn-sm"
                                        onClick={() => this.setState({showEdit: true})}>edit
                                </button>
                                <button type="button" className="btn btn-danger btn-sm ml-1"
                                        onClick={() => this.props.delete(item.id)}>delete
                                </button>
                                <button type="button"
                                        className={`btn btn-sm ml-1 ${item.done ? 'btn-warning' : 'btn-success'}`}
                                        onClick={() => this.props.done(item.id)}>{item.done ? 'undone' : 'done'}</button>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}
export default TodoItem;