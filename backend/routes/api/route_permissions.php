<?php

use App\Http\Controllers\PermissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('permissions')->group(function() {
    Route::get('/', [PermissionController::class, 'permissions']);
    Route::get('{id}', [PermissionController::class, 'permission']);
    Route::post('store', [PermissionController::class, 'store']);
    Route::put('update/{id}', [PermissionController::class, 'update']);
    Route::delete('remove/{id}', [PermissionController::class, 'remove']);
    Route::post('attach', [PermissionController::class, 'attach']);
    Route::post('detach', [PermissionController::class, 'detach']);
});

Route::get('permission_users/{id}', [PermissionController::class, 'permission_users']);     
Route::get('permission_roles/{id}', [PermissionController::class, 'permission_roles']);   