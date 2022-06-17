<?php

use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('roles')->group(function() {
    Route::get('/', [RoleController::class, 'roles']);
    Route::get('{id}', [RoleController::class, 'role']);
    Route::post('store', [RoleController::class, 'store']);
    Route::put('update/{id}', [RoleController::class, 'update']);
    Route::delete('remove/{id}', [RoleController::class, 'remove']);
    Route::post('attach_permission/{role_id}/{permission_id}', [RoleController::class, 'attach_permission']);
    Route::post('detach_permission/{role_id}/{permission_id}', [RoleController::class, 'detach_permission']);
});

Route::get('role_users/{id}', [RoleController::class, 'role_users']);     
Route::get('role_permissions/{id}', [RoleController::class, 'role_permissions']);   
Route::get('roles_permissions', [RoleController::class, 'roles_permissions']);
