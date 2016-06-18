<div class="container">
    <div class="row">
        <div class="col s12 m6 l6" style="min-height: 100vh">
            <div class="pinned">
                <dj-social></dj-social>
                <dj-search></dj-search>
                <dj-player></dj-player>
            </div>
        </div>
        <div class="col s12 m6 l6">
            <div *ngFor="let mix of mixes; let i = index" style="padding: 30px 0">
                <dj-mix></dj-mix>
            </div>
        </div>
    </div>
</div>
