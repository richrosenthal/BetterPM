class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :completion
      t.string :tools_needs

      t.timestamps
    end
  end
end
