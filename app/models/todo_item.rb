class TodoItem < ApplicationRecord
  belongs_to :todo_list

  def done?
    return true if status == "Complete"
  end

  def in_progress?
    return true if status == "In-Progress"
  end

  def not_started?
    return true if status == "Not Started"
  end

  def pending?
    return true if status == "Pending"
  end

  def pending!
    update!(status: "Pending")
  end

  def not_started!
    update!(status: "Not Started")
  end

  def done!
    update!(status: "Complete")
  end

  def in_progress!
    update!(status: "In-Progress")
  end

  # Status of a task
  def display(index = id)
    puts "- #{index} [Done] #{content} (#{duration}h)".colorize(:green) if done?
    puts "- #{index} [inPro] #{content} (#{duration}h)".colorize(:yellow) if in_progress?
    puts "- #{index} [notStart] #{content} (#{duration}h)".colorize(:red) if not_started?
    puts "- #{index} [Pending] #{content} (#{duration}h)".colorize(:cyan) if pending?
  end

  # Display all all tasks's status
  def self.display(items = TodoItem.all)
    items.each { |item| item.display }
  end
end
