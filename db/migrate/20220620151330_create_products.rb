class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.references :category, null: false, foreign_key: true
      t.string :description
      t.integer :stock
      t.float :price
      t.boolean :favorite, default: false
      t.string :image_url

      t.timestamps
    end
  end
end
