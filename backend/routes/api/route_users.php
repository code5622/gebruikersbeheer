<?php

use App\Http\Controllers\UserRolePermissionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('users')->group(function() {
    Route::get('', [UserController::class, 'users']);           
    Route::get('{id}', [UserController::class, 'user']);          
    Route::put('update/{user_id}', [UserController::class, 'update']);
    Route::delete('remove/{_userid}', [UserController::class, 'remove']);
 
   
});

Route::get('user_role/{user_id}/{role_id}', [UserRolePermissionController::class, 'user_role']);  
Route::get('users_roles_permissions', [UserRolePermissionController::class, 'users_roles_permissions']);  
Route::get('user_role_permission/{user_id}/{role_id}/{permission_id}', [UserRolePermissionController::class, 'user_role_permission']);  

Route::get('roles', [UserController::class, 'roles']);  
Route::get('user_roles/{id}', [UserController::class, 'user_role']);     
Route::get('user_permissions/{id}', [UserController::class, 'user_permissions']);  
Route::get('authorization', [UserController::class, 'authorization']); 

Route::middleware(['role:financeCR, 1'])->prefix('users')->group(function () {

});

Route::post('attach_user_role_permission/{user_id}/{role_id}/{permission_id}', [UserController::class, 'attach_user_role_permission']);
Route::post('detach_user_role_permission/{user_id}/{role_id}/{permission_id}', [UserController::class, 'detach_user_role_permission']);
Route::post('attach_role/{user_id}/{role_id}', [UserController::class, 'attach_role']);
Route::post('detach_role/{user_id}/{role_id}', [UserController::class, 'detach_role']);
Route::post('attach_permission/{user_id}/{permission_id}', [UserController::class, 'attach_permission']);
Route::post('detach_permission/{user_id}/{permission_id}', [UserController::class, 'detach_permission']);   

