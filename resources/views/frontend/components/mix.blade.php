<div class="card mix">
    <div class="cover-wrapper">
        <img class="materialboxed cover" src="@{{ mix.cover }}">
    </div>
    <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">@{{ mix.name }}</span>
        <p style="float: right; margin-top: 5px"><a href="@{{ mix.url }}" download class="btn-floating waves-effect waves-light red download"><i class="fa fa-download" aria-hidden="true"></i></a><a class="btn-floating waves-effect waves-light red play" (click)="changeMix(mix)"><i class="fa fa-play" aria-hidden="true"></i></a></p>
    </div>
</div>
