class TodoList < ApplicationRecord
  has_many :todo_items

  # display one list
  def display
    puts "------#{id} #{content}--------".colorize(:blue)
    todo_items.each_with_index{ |item, index| item.display(index)}
  end

  # Display all lists
  def self.display(lists = TodoList.all)
    lists.each { |list| list.display}
  end

  def add_task(content)
    todo_items.create!(content: content)
  end

  def remove_task(id)
    todo_items.each_with_index { |item, index| item.detroy if index == id}
  end
end
