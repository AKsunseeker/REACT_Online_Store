var Store = React.createClass({
  getInitialState: function() {
    return { items: []};
  },

  componentDidMount: function() {
    var self = this;
    $.ajax({
      url: '/items',
      type: 'GET',
      success: function() {
        self.setState({items: data});
      }
    });
  },

  displayItems: function() {
    var items = [];
    for (var i = 0; i < this.state.items.length; i++) {
      var item = this.state.items[i];
      items.push(<Item id={item.id} name={item.name} description={item.description} category={item.category} price={item.price} />)
    }
    return items;
  },

  render: function() {
    return(<div>
            <h1>Online Bait(Live & Dead) Store</h1>
            <hr />
            {this.displayItems()}
           </div>)
  }





});