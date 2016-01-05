class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :quantity
      t.string :category
      t.float :price

      t.timestamps null: false
    end
  end
end
