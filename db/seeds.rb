require 'csv'

user = User.find_by_email("votanphu.2101@gmail.com")
User.create(email: "votanphu.2101@gmail.com", password: "12345678") if user.blank?

csv_text = File.read('todo.csv')
csv = CSV.parse(csv_text, :headers => true)
@all_lists = {}
csv.each do |row|
  rows = row.to_hash()

  if !rows["No"].nil?
    @list = TodoList.find_by_content(rows["Content"])

    if @list.blank?
      @list = TodoList.create!(content: rows["Content"])
    end
  end

  if !@list.content.nil? && rows["No"].nil?
    todo_item_exist = TodoItem.find_by_content(rows["Content"])
    @list.todo_items.create!(content: rows["Content"], trainer: rows["Trainer"], trainee: row["Tranee"],
      duration: rows["Duration (h)"].nil? ? "0.5" : rows["Duration (h)"], required: rows["Required"] == "yes" ? true : false, priority: rows["Priority"],
      material_link: rows["Material link"], status: rows["Status"], comment: rows["Comment"] ) if todo_item_exist.blank?
  end
end

User.create(email: "votanphu.2101@gmail.com", password: "12345678")
