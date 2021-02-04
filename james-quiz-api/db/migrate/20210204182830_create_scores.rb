class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :username
      t.integer :quiz_id
      t.integer :points

      t.timestamps
    end
  end
end
