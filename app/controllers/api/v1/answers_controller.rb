# frozen_string_literal: true

module Api
  module V1
    class AnswersController < ApplicationController
      before_action :set_question, only: %i[index create]
      before_action :set_answer, only: %i[show]

      # GET /questions/:question_id/answers
      def index
        @answers = @question.answers
        render json: @answers
      end

      # GET /answers/:id
      def show
        render json: @answer
      end

      # POST /questions/:question_id/answers
      def create
        @answer = @question.answers.build(answer_params)

        if @answer.save
          render json: @answer, status: :created, location: api_v1_answer_url(@answer)
        else
          render_error_message(model: @answer, status: :unprocessable_entity)
        end
      end

      private

      def set_question
        @question = Question.find(params[:question_id])
      end

      def set_answer
        @answer = Answer.find(params[:id])
      end

      def answer_params
        params.require(:answer).permit(:question_id, :content)
      end
    end
  end
end
