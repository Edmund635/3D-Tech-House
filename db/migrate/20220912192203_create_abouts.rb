class CreateAbouts < ActiveRecord::Migration[6.1]
  def change
    create_table :abouts do |t|
      t.string :mission
      t.string :email
      t.string :etsy
      t.belongs_to :admin_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
