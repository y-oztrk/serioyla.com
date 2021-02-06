<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--bootsprap css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <!-- Özel CSS Linkleri -->
    <link rel="stylesheet" type="text/css" href="style/custom.css">
    <title>Seri Oyla</title>
</head>

<!--Header bölümü-->

<body class="bg-dark">
    <div class="d-flex h-100 text-center text-white " style="background-color: #1D2125;">
        <div class="container col-8 w-100 h-100 p-2 mx-auto flex-column ">
            <header class="mb-auto">
                <div class="ps-5" id="title-div">
                    <!--float-md-start mb-0-->
                    <a href="index.html" style="text-decoration: none;">
                        <h3 class="float-md-start mb-0 mt-2 .col-md-6" style="padding-left: calc(17% - 3%);"
                            id="title-h3"><span
                                style="font-size: 40px; color: #FC042C; font-family: Audiowide, cursive;">SERİ</span><span
                                style="font-size: 30px; font-family: Audiowide, cursive; color: aliceblue;">OYLA</span><span
                                style="font-size: 15px; color: #606470;">beta</span>
                        </h3>
                    </a>
                </div>
                <nav class="nav nav-masthead justify-content-center float-md-end pt-3 col-7" id="navbar">
                    <a class="nav-link active" aria-current="page" href="#">Serioyla</a>
                    <a class="nav-link" href="#">İletişim</a>
                    <a class="nav-link" href="#">Giriş Yap</a>
                    <a class="nav-link" href="#">Kaydol</a>
                </nav>
        </div>
    </div>
    <!--Header bölümünün Bitişi-->

    <div class="container pt-4">
        <div class="row d-flex flex-column justify-content-center align-items-center">
            <span class="col-6 border border-secondary border-2 p-4 border-light" style="border-radius: 25px;"
                id="main-content-span">
                <div class="container">
                    <div class="ps-5" style="text-align: justify;" id="voting-title">
                    <h2 class="pb-2 d-inline-block" style="color: #28df99; border-bottom: 1px solid #28df99; font-size: 24px;">Programlama Dilleri</h2>
                </div>
                    <div class="input-wrapper">
                        <input class="fancy-radio" hidden id="radio1" name="radio-group" type="radio"></input>
                        <label class="fancy-radio-label" for="radio1">
                            <span class="fancy-label--text">Aliquam tincidunt mauris eu risus</span>
                            <span class="fancy-radiobutton">
                                <span class="radiobutton-dot"></span>
                            </span>
                        </label>
                    </div>
                    <div class="input-wrapper">
                        <input class="fancy-radio" hidden id="radio2" name="radio-group" type="radio"></input>
                        <label class="fancy-radio-label" for="radio2">
                            <span class="fancy-label--text">Aliquam tincidunt mauris eu risus</span>
                            <span class="fancy-radiobutton">
                                <span class="radiobutton-dot"></span>
                            </span>
                        </label>
                    </div>
                    <div class="input-wrapper">
                        <input class="fancy-radio" hidden id="radio3" name="radio-group" type="radio"></input>
                        <label class="fancy-radio-label" for="radio3">
                            <span class="fancy-label--text">Aliquam tincidunt mauris eu risus</span>
                            <span class="fancy-radiobutton">
                                <span class="radiobutton-dot"></span>
                            </span>
                        </label>
                    </div>
                    <div class="input-wrapper">
                        <input class="fancy-radio" hidden id="radio4" name="radio-group" type="radio"></input>
                        <label class="fancy-radio-label" for="radio4">
                            <span class="fancy-label--text">Aliquam tincidunt mauris eu risus</span>
                            <span class="fancy-radiobutton">
                                <span class="radiobutton-dot"></span>
                            </span>
                        </label>
                    </div>
                    <div class="col-12 pt-3 share-buttons-div">
                        <button type="button" class="btn btn-danger">Oyla</button>
                            <div class="input-group mb-3 ps-5 share-link">
                                <input type="text" class="form-control w-auto ps-4" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>  
                            </div>
                        
                            
                    </div>
                </div>

            </span>
        </div>
    </div>


</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
            integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj"
            crossorigin="anonymous"></script> -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="js/script.js"></script>

</html>