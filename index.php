<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="app">
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" style="width: 150px">
                    </a>
                </div>
            </nav>
        </header>

        <body>
            <div class="overlay">
                <button type="button" class="btn-close text-white" @click="closeOverlay()"></button>
                <div class="text-white text-center">
                    <img :src="`${this.counter.poster}`" alt="" style="width: 200px">
                    <h5 class="m-0 mt-2">{{this.counter.title}}</h5>
                    <span>{{this.counter.author}}</span>
                    <h6>{{this.counter.year}}</h6>
                </div>
            </div>
            <div class="container my-4">
                <div class="row gap-2 m-auto justify-content-center">
                    <div class="card col-12 col-md-5 col-lg-3 text-center text-white p-3" 
                    v-for="(element, index) in data" 
                    :key="index"
                    @click="openOverlay(data[index])">
                        <img :src="`${element.poster}`" alt="">
                        <h5 class="m-0 mt-2">{{element.title}}</h5>
                        <span>{{element.author}}</span>
                        <h6>{{element.year}}</h6>
                    </div>
                </div>
            </div>
        </body>
    </div>


    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="main.js"></script>
</body>
</html>