<?php

Route::get('/', [
    'uses' => 'AngularRoutesController@index',
    'as' => 'home'
]);

Route::get('/templates/{template}', 'AngularTemplatesController@index');

Route::get('/mixes', 'MixesController@getAll');
Route::get('/mixes/{mix}', 'MixesController@getOne');









// Route::group(['middleware' => ['web']], function () {
//     //
// });
