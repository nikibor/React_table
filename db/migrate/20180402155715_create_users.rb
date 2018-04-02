class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.references :role, foreign_key: true
      t.references :status, foreign_key: true
      t.string :email
      t.string :name
      t.string :surname
      t.date :birth

      t.timestamps
    end
  end
end
