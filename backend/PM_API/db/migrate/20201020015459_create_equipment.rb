class CreateEquipment < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :description
      t.string :department
      t.string :location

      t.timestamps
    end
  end
end
