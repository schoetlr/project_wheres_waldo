class Game < ActiveRecord::Base

  def self.top_ten
    Game.order(score: "desc").limit(10)
  end
end
