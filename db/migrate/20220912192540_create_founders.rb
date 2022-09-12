class CreateFounders < ActiveRecord::Migration[6.1]
  def change
    create_table :founders do |t|
      t.string :founder1
      t.string :founder2
      t.string :founder3
      t.string :founder4
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :image4
      t.string :desc1
      t.string :desc2
      t.string :desc3
      t.string :desc4
      t.belongs_to :admin_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
