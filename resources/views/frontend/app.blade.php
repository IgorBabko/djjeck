<!-- <dj-navbar></dj-navbar> -->
<!-- <div class="parallax-container"> -->
<!-- <div class="parallax"> -->
<!-- <img src="img/main.jpeg"> -->
<!-- </div> -->
<!-- </div> -->
<div class="container">
    <div class="row">
        <div class="col s12 m6 l6">
            <dj-search></dj-search>

            <dj-player></dj-player>
        </div>
        <div class="col s12 m6 l6">
            <div *ngFor="let mix of mixes; let i = index" style="padding: 30px 0">
                <dj-mix></dj-mix>
            </div>
        </div>
    </div>
</div>
