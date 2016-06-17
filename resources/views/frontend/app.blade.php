<div class="container">
    <div class="row">
        <div class="col s12 m6 l4" *ngFor="let mix of mixes; let i = index">
            <dj-mix></dj-mix>
        </div>
    </div>
</div>










<div id="player" class="modal" style="width: 500px">
    <dj-player></dj-player>
</div>
<dj-controls></dj-controls>