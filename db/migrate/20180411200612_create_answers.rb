class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.references :question, index: true, foreign_key: true, null: false
      t.text :content
      t.boolean :correct, default: false
    end
  end
end
