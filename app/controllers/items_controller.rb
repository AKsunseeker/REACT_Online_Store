class ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :quantity, :catagory, :price)
  end
end
