var Item = React.createClass({

  render: function() {
    var id = 'item-' + this.props.id;
    return(
      <li>
        <div className='row'>
          <div className='col s10'>
            {this.props.name}
            {this.props.description}
            {this.props.quantity}
            {this.props.category}
            {this.props.price}
          </div>
        <div className='col s2'>
          <a onClick={this.toggleEdit}>Cancel</a>
        </div>
      </div>
    </li>
      );
  },








});