class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.string :content
      t.string :trainer, default: "Self-training"
      t.string :trainee, default: "New members"
      t.decimal :duration, default: 0.5
      t.boolean :required, default: true
      t.string :priority, default: "High"
      t.string :material_link
      t.string :status, default: "Not Started"
      t.string :comment

      t.timestamps
    end
  end
end
