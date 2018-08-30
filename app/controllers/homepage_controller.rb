class HomepageController < ApplicationController
  before_action :authenticate_user!

  def index
    lists = TodoList.includes(:todo_items)
    @lists = lists.as_json(include: :todo_items)
  end
end
