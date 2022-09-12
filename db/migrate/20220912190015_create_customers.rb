class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :username
      t.string :password
      t.belongs_to :admin_user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
