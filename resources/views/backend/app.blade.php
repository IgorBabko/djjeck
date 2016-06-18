<!DOCTYPE html>
<html>
    <head>
        <title>Dj Jeck</title>
        @include ('backend.partials.styles')
        <base href="/"/>
    </head>
    <body>

        @include ('backend.partials.slider')
        <app>
            @include('backend.loading')
        </app>
        @include ('backend.partials.scripts')
        @include ('backend.partials.livereload')
    </body>
</html>
