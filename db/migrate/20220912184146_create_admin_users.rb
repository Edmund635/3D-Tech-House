class CreateAdminUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :admin_users do |t|
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
