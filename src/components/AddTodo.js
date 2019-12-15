import React,{Component} from 'react';

class AddTodo extends Component {
    counter=0;
    state={inputVal:''};
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.add(this.state.inputVal);
        this.setState({inputVal:''})
    };
    handleInput=(e)=>{
        this.setState({
            inputVal:e.target.value
        })
    };

    render() {
        return (
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <div className="form-inline">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control mx-sm-3" placeholder="I want to do ..." value={this.state.inputVal} onChange={this.handleInput}/>
                            <button className="btn btn-primary" type={"submit"}>add</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default AddTodo;