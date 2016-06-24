<dj-logo></dj-logo>
<div class="container">
    <div class="row">
        <div class="col s12" style="padding-top: 20px; min-height: 100vh">
            <!--<div class="pinned">-->
                <dj-social></dj-social>
                <!--<dj-search></dj-search>-->
                <dj-player></dj-player>
            <!--</div>-->
        </div>
        <div class="col s12" style="padding-top: 40px">
            <div *ngFor="let mix of mixes; let i = index" style="padding: 30px 50px">
                <dj-mix [mix]="mix" (mixChanged)="changeMix(mix)"></dj-mix>
            </div>
        </div>
    </div>
</div>
