@extends('backend::layouts.master')

@section('content')
    <div class="error-page">
        <h2 class="headline text-yellow" style="line-height: 0.6; margin-top: 0;"> 404</h2>
        <div class="error-content">
            <h3><i class="fa fa-warning text-yellow"></i> 404 </h3>
            <p>description</p>
        </div>
        {{-- .error-content --}}
    </div>
@stop