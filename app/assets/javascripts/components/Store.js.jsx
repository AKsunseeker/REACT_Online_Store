var Store = React.createClass({
  getInitialState: function() {
    return { items: []};
  },

  componentDidMount: function() {
    var self = this;
    $.ajax({
      url: '/items',
      type: 'GET',
      success: function(data) {
        self.setState({items: data});
      }
    });
  },

  showAddForm: function(){
    this.setState({showAdd: !this.state.showAdd});
  },
  addItemName: function(e){
    this.setState({itemName: e.currentTarget.value});
  },
  addItemDescription: function(e){
    this.setState({itemDescription: e.currentTarget.value});
  },
  addItemQuantity: function(e){
    this.setState({itemQuantity: e.currentTarget.value});
  },
  addItemCategory: function(e){
    this.setState({itemCategory: e.currentTarget.value});
  },
  addItemPrice: function(e){
    this.setState({itemPrice: e.currentTarget.value});
  },

  addItemForm: function(){
    if(this.state.showAdd){
      return(<div>
               <form onSubmit={this.submitItem}>
                 <div className="input-field">
                  <input autoFocus="true" placeholder="Item Name" type="text" onChange={this.addItemName} />
                  <input autoFocus="true" placeholder="Item Description" type="text" onChange={this.addItemDescription} />
                  <input autoFocus="true" placeholder="Item Quantity" type="number" onChange={this.addItemQuantity} />
                  <input autoFocus="true" placeholder="Item Category" type="text" onChange={this.addItemCategory} />
                  <input autoFocus="true" placeholder="Item Price" type="float" onChange={this.addItemPrice} />
                  <br />
                  <br />
                  <button className='btn waves-effect' type='submit'>Save New Item</button>
                 </div>
               </form>
             </div>)
    };
  },

  submitItem: function(e){
    e.preventDefault();
    var self = this;
    $.ajax({
      url: '/items',
      type: 'POST',
      data: {item:{name: this.state.itemName, description: this.state.itemDescription, quantity: this.state.itemQuantity, category: this.state.itemCategory, price: this.state.itemPrice}},
      success: function(data){
        var items = self.state.items;
        items.push(data);
        self.setState({items: items, showAdd: false, itemName: null, itemDescription: null, itemQuantity: null, itemCategory: null, itemPrice: null});
      }      

    });


  },

  displayItems: function() {
    var items = [];
    for (var i = 0; i < this.state.items.length; i++) {
      var item = this.state.items[i];
      var key = "Item-" + item.id;
      items.push(<Item id={item.id} name={item.name} description={item.description} key={key} category={item.category} price={item.price} />)
    }
    return items;
  },



  refreshList: function(){
    var self = this;
    $.ajax({
      url: '/items',
      type: 'GET',
      success: function(data){
        self.setState({items: data });
      }
    });
  },

  render: function() {
    return(<div>
            <h1>Online Bait(Live & Dead) Store</h1>
            <hr />
            <a className='btn' onClick={this.showAddForm}>+ Add Item +</a>
            
            {this.displayItems()}
            {this.addItemForm()}
            
           </div>)
  }


});