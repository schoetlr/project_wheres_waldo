class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      flash[:success] = "Tag created"
       respond_to do |format|
         format.html { redirect_to root_path }

         format.json { render json: @tag, status: :created}
       end
    else
      flash[:error] = "Something went wrong"
      respond_to do |format|
        format.html {}

        format.json { render nothing: true, status: 400 }
      end
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:x, :y, :character)
  end

end
