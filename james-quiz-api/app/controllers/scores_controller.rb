class ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]

  # GET /scores
  def index
    @scores = Score.all
    render json: @scores
  end

  # GET /scores/1
  def show
    render json: @score
  end

  # POST /scores
  def create
    # {"score"=>{"points"=>2, "userName"=>"", "quizName"=>"HTML"}}
    quiz = Quiz.find_by({name: params["score"]["quizName"]})
    @score = quiz.scores.create({points: params["score"]["points"],username: params["score"]["userName"]})
    scores = quiz.scores.order("points desc").limit(3)
    
    if @score.errors.empty?
      render json: scores, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scores/1
  def update
    if @score.update(score_params)
      render json: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scores/1
  def destroy
    @score.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = Score.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def score_params
      params.require(:score).permit(:username, :quiz_id, :points)
    end
end
