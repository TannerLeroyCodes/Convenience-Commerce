class ChangeTypeToName < ActiveRecord::Migration[7.0]
  def change
    rename_column :categories, :type, :name
  end
end
