class TagsController < ApplicationController

  def index
    @tags = Tag.all

    respond_to do |format|
      format.html {}

      format.json {render json: @tags}
    end
  end

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

  def destroy
    @tag = Tag.find(params[:id])

    if @tag.destroy
      flash[:success] = "Tag destroyed"
      respond_to do |format|
        format.html

        format.json { render json: @tag, status: 200}
      end
    else
      flash[:error] = "Something went wrong"
      respond_to do |format|
        format.html

        format.json{render nothing: true, status: 400}
      end
    end

  end


  private

  def tag_params
    params.require(:tag).permit(:x, :y, :character)
  end

end
