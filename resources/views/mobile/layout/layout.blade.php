<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('assets/css/slick-theme.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/slick.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.min.css')}}">
    <script src="{{ asset('assets/js/lib/jquery.min.js')}}"></script>
    <script src="{{ asset('assets/js/lib/slick.min.js')}}"></script>
</head>
<body>
    <header>    
        <div class="container-flush">
            <div class="header-top">
                <div class="header-top__left">
                    <h2>
                        MẪU GIAO DIỆN WEB GIỚI THIỆU CÔNG TY
                    </h2>
                </div>
                <div class="header-top__right">
                    <div class="item">
                    0123.456.xxx
                    </div>
                    <div class="item">Trần Khát Chân, Hai Bà Trưng, Hà Nội</div>
                    <div class="item item_search">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        <span>Tìm kiếm</span>
                    </div>
                </div>
                @include('web/components/search')

            </div>
            <div class="header-bottom">
                <div class="container-flush">
                    <div class="content">
                        <div class="header-bottom__logo">
                            <img src="/assets/img/LOGO.jpg" alt="">
                        </div>
                        <div class="header-bottom__menu">
                            <div class="menu">
                                <ul class="menu_main">
                                    <li class="active"><a href="javascript:;">Trang chủ</a></li>
                                    <li>
                                        <a href="javascript:;">
                                            Giới thiệu
                                            <svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        </a>
                                        <div class="sub">
                                            <ul>
                                                <li><a href="javascript:;">Hồ sơ năng lực</a></li>
                                                <li><a href="javascript:;">Cataloge</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="javascript:;">Dự án</a></li>
                                    <li>
                                        <a href="javascript:;">
                                            Sản phẩm
                                            <svg xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        </a>
                                        <div class="sub">
                                            <ul>
                                                <li><a href="javascript:;">Bàn ghế GFRC</a></li>
                                                <li><a href="javascript:;">Chậu GFRC</a></li>
                                                <li><a href="javascript:;">Chỉ GFRC</a></li>
                                                <li><a href="javascript:;">Cột – đầu cột GFRC</a></li>
                                                <li><a href="javascript:;">Hoa văn – phù điêu GFRC</a></li>
                                                <li><a href="javascript:;">Panel GFRC</a></li>
                                                <li><a href="javascript:;">Sản phẩm bê tông</a></li>
                                                <li><a href="javascript:;">Sản phẩm khác</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="javascript:;">Tin tức</a></li>
                                    <li><a href="javascript:;">Hỗ trợ kỹ thuật</a></li>
                                    <li><a href="javascript:;">Liên hệ</a></li>
                                </ul>
                            </div>
                            <div class="header-bottom__hotline">
                                <a href="">Hotline: 0972.939.xxx</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    @yield('content')
    @include('web/layout/footer')
    <script src="{{ asset('assets/js/main.js')}}"></script>
</body>
</html>