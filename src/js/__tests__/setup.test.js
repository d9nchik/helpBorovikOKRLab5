require('babel-polyfill');

(function () {
    document.body.innerHTML = `
    <canvas id="can">
</canvas>
<div class="navbar-fixed ">
    <nav class="deep-orange">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                    <img src="./img/img.png" alt="">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <div class="menu-openner"><span>0</span></div>
                    </li>
                    <li><a class="pizzochka" href="#basket">🍕</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<!-- slider -->
<div class="slider">
    <ul class="slides">
        <li>
            <img src="./img/slider/1.jpg"> <!-- random image -->
            <div class="caption right-align kanan caption">
                <h3>"There's no better </h3>
                <h5 class="light grey-text text-lighten-3">feeling in the world than a warm pizza box on your lap."
                    <br>-Kevin James</h5>
            </div>
        </li>
        <li>
            <img src="./img/slider/2.jpg"> <!-- random image -->
            <div class="caption right-align kanan caption">
                <h3>"I'm a huge pasta <br> and <br> pizza lover.</h3>
                <h5 class="light grey-text text-lighten-3">I can eat those every single day."
                    <br> -Shay Mitchell</h5>
            </div>
        </li>
        <li>
            <img src="./img/slider/3.png"> <!-- random image -->
            <div class="caption center-align caption">
                <h3>"The perfect lover</h3>
                <h5 class="light grey-text text-lighten-3">is one who turns into a pizza at 4:00 a.m."
                    <br> -Charles Pierce</h5>
            </div>
        </li>
    </ul>
</div>



<!-- menu -->
<div class="models">
    <div class="pizza-item">
        <a href="">
            <div class="pizza-item--img"><img src=""/></div>
            <div class="pizza-item--add">+</div>
        </a>
        <div class="pizza-item--price"></div>
        <div class="pizza-item--name"></div>
        <div class="pizza-item--desc"></div>
    </div>
    <div class="cart--item">
        <img src=""/>
        <div class="cart--item-nome"></div>
        <div class="cart--item--qtarea">
            <button class="cart--item-qtmenos">-</button>
            <div class="cart--item--qt">1</div>
            <button class="cart--item-qtmais">+</button>
        </div>
    </div>
</div>
<main id='catalog'>
    <h1 class="center light white-text">Our Menu</h1>
    <h1 id='best'>Best Pizza</h1>
    <div class="pizza-area1 pizza-area"></div>
    <h1 id='cheapest'>Cheapest Pizza</h1>
    <div class="pizza-area2 pizza-area"></div>
    <h1 id='cheff'>Cheff Pizza</h1>
    <div class="pizza-area3 pizza-area"></div>
</main>
<aside id='basket'>
    <div class="cart--area">
        <div class="menu-closer">❌</div>
        <h1>Your Pizza</h1>
        <div class="cart"></div>
        <div class="cart--details">
            <div class="cart--totalitem subtotal">
                <span>Subtotal</span>
                <span></span>
            </div>
            <div class="cart--totalitem desconto">
                <span>Discount (-10%)</span>
                <span></span>
            </div>
            <div class="cart--totalitem total big">
                <span>Total</span>
                <span></span>
            </div>
            <form name="orderForm">
                <div class="form-group" id='cart'>
                    <label for="name">Name: </label>
                    <input type="text" id="name" class="customer-details form-control" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="address">Address: </label>
                    <input type="text" id="address" class="customer-details form-control" placeholder="1234 Main Str">
                </div>
                <div class="form-group col-md-6">
                    <label for="city">City: </label>
                    <input type="text" id="city" class="customer-details form-control">
                </div>
                <div class="form-group col-md-4">
                    <label for="state">Email: </label>
                    <input type="text" id="state" class="customer-details form-control">
                </div>
                <div class="form-group">
                    <label for="phone">Phone:(format:+380 (XX)-XXX-XX-XX) </label>
                    <input type="text" id="phone" class="customer-details form-control">
                </div>
                <button type="submit" class="btn btn-dark">Submit Order</button>
            </form>

            <div class="cart--finalizar">Remove</div>
            caption

        </div>
    </div>
</aside>
<div class="serverError" id='serverError'>
    <h1> Something goes wrong try again later</h1>
</div>
<div class="orderPage" id="order">
    <h1 id='orderH'>Your order</h1>
    <div class="orderId order--item">
        <span class="rrr">Id:</span>
        <span></span>
    </div>
    <div class="orderPizzasList order--item">
        <span class="rrr">Pizzas:</span>
        <span></span>
    </div>
    <div class="orderName order--item">
        <span class="rrr">Name: </span>
        <span></span>
    </div>
    <div class="orderAdress order--item">
        <span class="rrr">Adress:</span>
        <span></span>
    </div>
    <div class="orderCity order--item">
        <span class="rrr">City:</span>
        <span></span>
    </div>
    <div class="orderPhone order--item">
        <span class="rrr">Phone:</span>
        <span></span>
    </div>
    <button type="submit" class="btn btn-dark">Close</button>

</div>
<div class="pizzaWindowArea">
    <div class="pizzaWindowBody">
        <div class="boxBack">
            <div class="pizzaInfo--cancelMobileButton">❌</div>
        </div>
        <div class="pizzaBig">
            <img src=""/>
        </div>
        <div class="pizzaInfo">
            <h1>--</h1>
            <div class="pizzaInfo--desc"></div>
            <div class="pizzaInfo--sizearea">
                <div class="pizzaInfo--sector">Size</div>
                <div class="pizzaInfo--sizes">
                    <div data-key="0" class="pizzaInfo--size">MINI<span></span></div>
                    <div data-key="1" class="pizzaInfo--size">MEDIUM<span></span></div>
                    <div data-key="2" class="pizzaInfo--size selected">KING-SIZE<span></span></div>
                </div>
            </div>
            <div class="pizzaInfo--pricearea">
                <div class="pizzaInfo--sector">Price for one</div>
                <div class="pizzaInfo--price">
                    <div class="pizzaInfo--actualPrice"></div>
                    <div class="pizzaInfo--qtarea">
                        <button class="pizzaInfo--qtmenos">-</button>
                        <div class="pizzaInfo--qt">1</div>
                        <button class="pizzaInfo--qtmais">+</button>
                    </div>
                </div>
            </div>
            <div class="pizzaInfo--addButton">Add to Cart</div>
            <div class="pizzaInfo--cancelButton">Cancel</div>
        </div>
    </div>
</div>
<div class="parallax-container">
    <div class="parallax">
        <img src="img/clients/background.jpg">
    </div>
    <section id="Stocks">
        <div class="container">
            <div class="row">


            </div>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <h4 class="center light white-text">Services</h4>
            <div class="row">
                <div class="col12">
                    <ul class="service">
                        <li>
                            <div class="col s4" id="dine">
                                <div class="card-panel center"><i class="medium material-icons">restaurant_menu</i>
                                    <br>
                                    <span>DINE IN</span></div>
                            </div>
                        </li>
                        <li>
                            <div class="col s4">
                                <div class="card-panel center"><i class="medium material-icons">shop</i><br><span>TAKE IN</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="col s4">
                                <div class="card-panel center"><i
                                        class="medium material-icons">shopping_cart</i><br><span>DELIVERY</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col s12 m6" id="service_content">
                </div>
            </div>

        </div>
    </section>
</div>
<div class="navbar-fixed ">
    <nav class="deep-orange">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                    <img src="./img/img.png" alt="">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#about_us">About Us</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a class="oury" href="#catalog">Our Menu</a></li>
                    <li><a class="acti" href="#acti">Stocks</a></li>
                    <li>
                        <div class="menu-openner"><span>0</span></div>
                    </li>
                    <li><a class="pizzochka" href="#basket">🍕</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

    `;
    jest.mock('../getJson');
    jest.mock('../sendData');
})();

Element.prototype.scrollTo = () => {};
window.scrollTo = () => {};
HTMLCanvasElement.prototype.getContext = () => {};
window.alert = () => {};
test('test load', () => {
    expect(true).toBeTruthy();
});
