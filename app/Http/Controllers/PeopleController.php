<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\People;

class PeopleController extends Controller
{
    public function get(){
        return response()->json(People::get());
        
    }

    public function delete($id){
        return response()->json(People::destroy($id));
    }

    public function put(Request $request,$id){
        $people = People::find($id);
        $people->fname = $request->input('fname');
        $people->mname = $request->input('mname');
        $people->lname = $request->input('lname');
        $people->sex   = $request->input('sex'); 
        $people->house_number = $request->input('house_number');
        $people->save();

        return response()->json($people);
    }

    public function post(Request $request){
        $people = new People();
        $people->fname =  $request->input('fname');
        $people->mname =  $request->input('mname');
        $people->lname =  $request->input('lname');
        $people->sex   =  $request->input('sex');
        $people->house_number = $request->input('house_number');
        $people->save();

        return response()->json($people);
    }
}
