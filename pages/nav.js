var nav = '<div class="container-fluid" style="display:inline-flex;">                                                                                                                                                                                                      ' +
    //'    <span id="sidebarToggle" style="margin:0 100px;"><i class="fas fa-align-justify"></i></span>                                                                                                                                                                                                  ' +
    '<div id="sidebarToggle" class="hamburger d-md-none d-lg-none d-xl-none" onclick="hamburger(this)"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div></div>'+
    '    <h3 class="d-none d-sm-block">ittadi shop</h3>                                                                                                                                                                                                         ' +
    '    <div class="form-group has-search" style="display: table;margin: 0 auto;">                                                                                                                                                                                         ' +
    '        <span class="fa fa-search form-control-feedback"></span>                                                                                                                                                                                                          ' +
    '        <input type="text" class="form-control" placeholder="Search">                                                                                                                                                                                                     ' +
    '                    </div>                                                                                                                                                                                                                                                ' +
    '        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>    ' +
    '        <div id="loginContainer" style="position:absolute;float:right;right:90px;">                                                                                                                                                                                       ' +
    '            <span id="loginButton"><i class="fas fa-user"></i></span><em></em>                                                                                                                                                                                            ' +
    '            <div style="clear:both"></div>                                                                                                                                                                                                                                ' +
    '            <div id="loginBox">                                                                                                                                                                                                                                           ' +
    '                <div id="loginForm">                                                                                                                                                                                                                                      ' +
    '                    <fieldset id="body">                                                                                                                                                                                                                                  ' +
    '                        <fieldset>                                                                                                                                                                                                                                        ' +
    '                            <label for="mobile">Mobile Number</label>                                                                                                                                                                                                     ' +
    '                            <input type="text" name="mobile" id="mobile" />                                                                                                                                                                                               ' +
    '                        </fieldset>                                                                                                                                                                                                                                       ' +
    '                        <fieldset>                                                                                                                                                                                                                                        ' +
    '                            <label for="password">Password</label>                                                                                                                                                                                                        ' +
    '                            <input type="password" name="password" id="password" />                                                                                                                                                                                       ' +
    '                        </fieldset>                                                                                                                                                                                                                                       ' +
    '                        <input type="button" id="login" value="Sign in/ Register" />                                                                                                                                                                                      ' +
    '                    </fieldset>                                                                                                                                                                                                                                           ' +
    '                </div>                                                                                                                                                                                                                                                    ' +
    '            </div>                                                                                                                                                                                                                                                        ' +
    '        </div>                                                                                                                                                                                                                                                            ' +
    '        <div style="position:absolute;float:right;right:30px;">                                                                                                                                                                                                           ' +
    '            <span id="info" class="info popup-trigger cart-nav" onclick="showMiniCart();" title="your cart"><i class="fas fa-shopping-cart" id=""></i></span>                                                                                                             ' +
    '        </div>                                                                                                                                                                                                                                                            ' +
    '    </div>                                                                                                                                                                                                                                                                ';
document.getElementById('topnav').innerHTML = nav;