class UpdateAdminUserToPasswordDigest < ActiveRecord::Migration[6.1]
  def change
    rename_column :admin_users, :password, :password_digest
  end
end
