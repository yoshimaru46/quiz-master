class RenameAnswerToAnswerContent < ActiveRecord::Migration[5.1]
  def change
    rename_column :questions, :answer, :answer_content
  end
end
