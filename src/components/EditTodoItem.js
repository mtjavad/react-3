import React,{Component} from 'react';

class EditTodoItem extends Component{
    state={txt:this.props.item.task};
    editTask=(e)=>{
        this.setState({
            txt:e.target.value
        })
    };
    updateTask=()=>{
        this.props.edit(this.props.item.id,this.state.txt);
        this.setState({txt:''});
        this.props.hideEdit();
    };

    render() {
        const {item}=this.props;
        return (
            <div className="col-6 mb-2">
                <div
                    className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        <input type="text" value={this.state.txt} onChange={this.editTask}/>
                    </div>
                    <div>
                        <button type="button" className="btn btn-info btn-sm" onClick={this.updateTask}>save</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditTodoItem;