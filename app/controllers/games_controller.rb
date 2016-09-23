class GamesController < ApplicationController

  def create
    @game = Game.new

    if @game.save
      respond_to do |format|
        format.json { render json: @game, status: 200 }
      end
    else
      respond_to do |format|
        format.json {render nothing: true}
      end
    end
  end

  def update

  end

  def score
    #updating score in database but render as error
    @game = Game.find(params[:game_id])

    if params[:point]
      @game.score += params[:point].to_i
      if @game.save
        respond_to do |format|
          format.html
          format.json {render json: @game}
        end
      else
        respond_to do |format|
          format.html
          format.json {render json: @game}
        end

      end
    end

    
  

  end

  private

  def game_params
    params.require(:game).permit(:user_name)
  end
end
