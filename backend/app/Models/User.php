<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $hidden = ['password'];

    public function roles() {
        return $this->belongsToMany(Role::class, 'user_roles', 'user_id', 'role_id');
    }

    public function permissions() {
        return $this->belongsToMany(Permission::class, 'user_permissions', 'user_id', 'permission_id');
    } 

    public function role_permissions() {
        return $this->belongsToMany(User::class, 'user_role_permissions', 'user_id', 'permission_id')->withPivot('role_id');
    }  
    
    public function userHasRole($role_name) {
        foreach($this->roles as $role) {
            if($role_name == $role->role_name) 
                return true;
        }
        return false;
    }
}
