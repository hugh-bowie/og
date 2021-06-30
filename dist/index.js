<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <script src="https://kit.fontawesome.com/a0f6ed9619.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@200;300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./css/simplelightbox.min.css">
        <link rel="stylesheet" href="./css/style.css">
        <title>Original Grind Coffee Co.</title>
    </head>

    <body id="home">
        <nav class="navbar">
            <div class="container">
                <h1 class="logo">Cold Brew Coffee Maker -1 Gallon</h1>
                <ul class="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <!-- <li><a href="#specs">Specs</a></li> -->
                    <li><a href="#buynow">Buy Now</a></li>
                </ul>
            </div>
        </nav>

        <!-- Showcase -->
        <section class="section-a">
            <div class="container">
                <div>
                    <h1>Cold Brew Coffee Maker -1 Gallon</h1>

                    <p>
                    <h3>About this item</h3>
                    <ul></ul>

                    </p>
                    <a href="#" class="btn">Read More</a>
                </div>
                <img src="./img/1.jpg" alt="" />
            </div>
        </section>

        <!-- Large Text -->
        <section id="about" class="section-b">
            <div class="overlay">
                <div class="section-b-inner py-5">

                    <h2 class="text-5 mt-1">Enjoy the fresh-brewed taste of cold brew iced coffee.</h2>
                    <p class="mt-1">
                    <ul>
                        <li> If you’re a coffee lover who enjoys cold brew coffee, there’s nothing more enjoyable than
                            starting your day or topping off the evening with a delicious cup. That’s why we created the
                            Original Grind Co. Cold Brew Coffee Maker that lets you brew premium, all-natural cold brew
                            coffee flavors in your own fridge!</li>
                    </ul><br>

                    <ul>A large, versatile pitcher with stainless-steel filter, this infuser system lets you make up to
                        16 cups of fresh coffee, tea, or fruit-infused waters completely hands free; and with
                        barista-quality results. An easy-to-use 1-gallon system that can fit in your refrigerator and
                        features an adjustable spigot for quick, no-mess pouring, it’s like having your very own coffee
                        shop at home.
                    </ul>
                    </p>
                </div>
            </div>
        </section>

        <!-- Gallery -->
        <section class="section-c">
            <div class="gallery">

                <a href="./img/6.jpg" class="big"><img src="./img/6.jpg" alt="" /></a>
                <a href="./img/3.jpg" class="big"><img src="./img/3.jpg" alt="" /></a>
                <a href="./img/4.jpg" class="big"><img src="./img/4.jpg" alt="" /></a>
                <a href="./img/5.jpg" class="big"><img src="./img/5.jpg" alt="" /></a>
                <a href="./img/1.jpg" class="big"><img src="./img/1.jpg" alt="" /></a>
                <a href="./img/7.jpg" class="big"><img src="./img/7.jpg" alt="" /></a>
            </div>
        </section>

        <!-- Footer -->
        <footer class="section-footer py-4 bg-primary">
            <div class="container">
                <div>
                    <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
                    <a href="http://twitter.com">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="http://facebook.com">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="http://youtube.com">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                </div>
                <div>
                    <h3>Company Info</h3>
                    <ul>
                        <li><a href="#">All Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Blog Posts</h3>
                    <ul>
                        <li><a href="#">Lorem ipsum dolor.</a></li>
                        <li><a href="#">Lorem ipsum dolor.</a></li>
                        <li><a href="#">Lorem ipsum dolor.</a></li>
                        <li><a href="#">Lorem ipsum dolor.</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Subscribe</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <form class="mt-1" name="email-form" method="POST" data-netlify="true">
                        <div class="email-form">
                            <span class="form-control-wrap"><input type="email" name="email" id="email" size="40"
                                    class="form-control" placeholder="E-mail" /></span><button type="submit"
                                value="Submit" class="form-control submit">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/simple-lightbox.min.js"></script>
        <script>
            $(function () {
                const $gallery = $('.gallery a').simpleLightbox();
            })</script>
    </body>

</html>
