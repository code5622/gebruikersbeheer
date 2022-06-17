<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;

class PermissionController extends Controller
{
    public function permissions() {
        return Permission::all();    
    }

    public function permission($id) {
        return Permission::find($id);    
    }

    public function store(Request $request) {
        $permission_name = $request->permission_name;
        Permission::create(['permission_name' => $permission_name]);
    }

    public function update(Request $request, $id) {
        $permission = Permission::find($id);
        $permission->permission_name = $request->permission_name;
        $permission->save();   
    }

    public function remove($id) {
        Permission::destroy($id);    
    }     

    public function permission_users($permission_id) {
        $permission = Permission::find($permission_id);
        return $permission->users->toJson(JSON_PRETTY_PRINT);
    }

    public function permission_roles($permission_id) {
        $permission = Permission::find($permission_id);
        return $permission->roles->toJson(JSON_PRETTY_PRINT);        
    }
}
