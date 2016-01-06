var Item = React.createClass({

  getInitialState: function(){
    return{ edit: false};
  },

  deleteItem: function(){
    var self = this;
    $.ajax({
      url: '/items/' + this.props.id,
      type: 'DELETE',
      success: function(){
        self.props.refreshStore();
      }
    });
  },


  render: function() {
    var id = 'item-' + this.props.id;
    return(
      <li>
        <div className='row'>
          <div className='col s10'>
            <p>Name: {this.props.name}</p>
            <p>Description: {this.props.description}</p>
            <p>Quantity: {this.props.quantity}</p>
            <p>Category: {this.props.category}</p>
            <p>Price: {this.props.price}</p>
            <button className="btn green">BUY</button>
            <button className="btn red" onClick={this.deleteItem}>Delete Bait</button>
          </div>
        <div className='col s2'>
          <a onClick={this.toggleEdit}>Cancel</a>
        </div>
      </div>
    </li>
      );
  },








});