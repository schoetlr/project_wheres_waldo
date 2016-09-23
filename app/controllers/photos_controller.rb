class PhotosController < ApplicationController
  def waldo
    @games = Game.top_ten
  end
end
