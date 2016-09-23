class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :user_name
      t.integer :score, default: 0
      t.datetime :completion
      t.timestamps null: false
    end
  end
end
