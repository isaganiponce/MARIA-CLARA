var attempt = 0;

function toggle_cardfields() {
    var pay_method = document.getElementById("pay_method").value;
    var NameonCard_row = document.getElementById("name_on_card_row");
    var CardNum_row = document.getElementById("card_num_row");

    if (pay_method == "Card") {
        NameonCard_row.style.display = "table-row";
        CardNum_row.style.display = "table-row";
    } else {
        NameonCard_row.style.display = "none";
        CardNum_row.style.display = "none";
    }
}


/**-- Message Form --*/

function send_message() {
    var Name = document.getElementById("Name").value;
    var Email_Address = document.getElementById("Email_Address").value;
    var Number = document.getElementById("Number").value;
    var Your_Message = document.getElementById("Your_Message").value;

    var alert_message = ' Name: ' + Name + '\n Email Address: ' + Email_Address + 
                        '\n Number: ' + Number + '\n Your Message: ' + Your_Message +
                        '\n\n------ Thank you for your concern, We will get back to you shortly. ------';
    alert(alert_message);
}


/**-- End --*/



/**-- Add to Cart Form --*/

function toggle_popup() {
    document.getElementById("product_cart").classList.toggle("active");
}

function toggle_remove() {
    var popup = document.getElementById("product_cart");
    popup.classList.remove("active");
}

/**-- End --*/


/**-- Shopping Cart Form --*/

function popup_cart() {
    document.getElementById("shopping_cart").classList.toggle("active");
}

function remove_cart() {
    var popup = document.getElementById("shopping_cart");
    popup.classList.remove("active");
}

/**-- End --*/


/**-- Place Order Form --*/

function go_to_next() {
    var item_list = document.getElementById('item_list');
    var row_count = item_list.rows.length;

    if (row_count == 0) {
        alert("Your shopping cart is empty. Please add items before proceeding to check out.");
    } else {
        document.getElementById("place_order").classList.toggle("active");

        remove_cart();
    }
}

function back_to_cart() {
    var popup = document.getElementById("place_order");
    popup.classList.remove("active");
    
    popup_cart();
}

/**-- End --*/



/**-- Display Successfully Ordered Form --*/

function display_success() {
    var full_name = document.getElementById("full_name").value;
    var mobile_num = document.getElementById("mobile_num").value;
    var address = document.getElementById("address").value;

    var pay_method = document.getElementById("pay_method").value;
    var name_on_card = document.getElementById("name_on_card").value;
    var card_num = document.getElementById("card_num").value;

    if (full_name.trim() == "" || mobile_num.trim() == "" || address.trim() == "") {
        alert("Please fill in all the required fields.");
    } else if (pay_method == "Card" && (name_on_card.trim() == "" || card_num.trim() == "")) {
        alert("Please provide valid card details.");
    }  else {
        document.getElementById("display_success").classList.toggle("active");

        var popup = document.getElementById("place_order");
        popup.classList.remove("active");
    }
}

function successfully_ordered() {
    var popup = document.getElementById("display_success");
    popup.classList.remove("active");

    location.reload();
}

/**-- End --*/








var matcha = {
    image: "images/Matcha Milk Tea.png",
    name:"Matcha",
    description: "A velvety smooth blend of premium matcha powder and milk for a creamy and earthy indulgence.",
    regular_price: 95.00,
    large_price: 105.00,
    href: "Matcha"
};

var oreo = {
    image: "images/Oreo Milk Tea.png",
    name:"Oreo",
    description: "Made with milk, black tea, and crushed Oreo cookies for a decadent and irresistible drink.",
    regular_price: 120.00,
    large_price: 130.00,
    href: "Oreo"
};

var rose = {
    image: "images/Rose Milk Tea.png",
    name:"Rose",
    description: "A delicate and floral drink made with rose-infused milk and black tea for a refreshing and romantic experience.",
    regular_price: 105.00,
    large_price: 115.00,
    href: "Rose"
};

var jasmine = {
    image: "images/Jasmine Milk Tea.png",
    name:"Jasmine",
    description: " Gracefully sweet and delicately floral green tea with brown sugar pearls.",
    regular_price: 95.00,
    large_price: 105.00,
    href: "Jasmine"
};

var boba = {
    image: "images/Boba Milk Tea.png",
    name:"Boba",
    description: "A delicious blend of black tea, milk, and sweet tapioca pearls for a heavenly experience.",
    regular_price: 95.00,
    large_price: 105.00,
    href: "Boba"
};

var honey = {
    image: "images/honey lavender milk tea.png",
    name:"Honey Lavender",
    description: "A perfect balance of sweet and floral flavors, this drink is made with lavender-infused milk and honey.",
    regular_price: 105.00,
    large_price: 115.00,
    href: "Honey"
};

var brown_sugar = {
    image: "images/Brown Sugar Milk Tea.png",
    name:"Brown Sugar",
    description: "A decadent blend of brown sugar, milk, and black tea for an indulgent and satisfying drink.",
    regular_price: 130.00,
    large_price: 140.00,
    href: "Brown_Sugar"
};

var caramel = {
    image: "images/Caramel Milk Tea.png",
    name:"Caramel",
    description: "Made with black tea, milk, and rich caramel syrup, offering a sweet and indulgent flavor that will satisfy any sweet tooth.",
    regular_price: 110.00,
    large_price: 120.00,
    href: "Caramel"
};

var happy_blend = {
    image: "images/Happy Blend Tea.png",
    name:"Happy Blend Tea",
    description: "Made with uplifting citrus flavors of orange, lemon, and soft pearls.",
    regular_price: 95.00,
    large_price: 105.00,
    href: "Happy_Blend"
};

var calm_and_cozy = {
    image: "images/Calm and Cozy Tea.png",
    name:"Calm & Cozy Tea",
    description: "Made with calming herbs of chamomile and lavender.",
    regular_price: 95.00,
    large_price: 105.00,
    href: "Calm_and_Cozy"
};

var strawberry_taro = {
    image: "images/Taro and Strawberry.png",
    name:"Taro & Strawberry",
    description: "Made with fresh strawberries and nutty taro root combined with creamy milk and black tea.",
    regular_price: 130.00,
    large_price: 140.00,
    href: "Strawberry_Taro"
};

var thai = {
    image: "images/Thai Milk Tea.png",
    name:"Thai",
    description: "A bold and spicy creation made with black tea, condensed milk, and aromatic spices for an exotic and full-bodied flavor with bubbles.",
    regular_price: 120.00,
    large_price: 130.00,
    href: "Thai"
};

var taro = {
    image: "images/Taro Milk Tea.png",
    name:"Taro",
    description: "A comforting and nutty drink made with taro root, milk, and black tea for a warm and soothing experience.",
    regular_price: 125.00,
    large_price: 135.00,
    href: "Taro"
};

var strawberry = {
    image: "images/Strawberry Milk Tea.png",
    name:"Strawberry",
    description: "A bright and fruity drink made with fresh strawberries and milk for a refreshing and delicious taste.",
    regular_price: 125.00,
    large_price: 135.00,
    href: "Strawberry"
};

var coconut = {
    image: "images/Coconut Milk Tea.png",
    name:"Coconut",
    description: "Made with coconut milk, black tea, and a hint of sweetness for a refreshing flavor.",
    regular_price: 105.00,
    large_price: 115.00,
    href: "Coconut"
};

var blueberry = {
    image: "images/Blueberry Milk Tea.png",
    name:"Blueberry",
    description: "Made with juicy blueberries and milk, offering a unique and delicious twist on the classic milk tea experience.",
    regular_price: 120.00,
    large_price: 130.00,
    href: "Blueberry"
};



var current_product = null;

var shopping_cart = [];

function displayProduct(product) {
    toggle_popup();

    current_product = product;

    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_desc").innerHTML = product.description;

    document.getElementById("product_img").src = product.image;

    document.getElementById("regular_price").innerHTML = product.regular_price.toFixed(2);
    document.getElementById("large_price").innerHTML = product.large_price.toFixed(2);
    
    document.getElementById("regular_size").value = product.regular_price.toFixed(2);
    document.getElementById("large_size").value = product.large_price.toFixed(2);


    var closeButton = document.getElementById("close_toggle");
    closeButton.href = "#" + product.href;
}
    

function updatePrice() {
    var selected_price = document.querySelector('input[name="price"]:checked').value;
    document.getElementById("selected_price").innerHTML = "₱ " + selected_price;
}



function add_to_cart() {
    var selected_size = document.querySelector('input[name="price"]:checked');
    var quantity = document.getElementById("quantity").value;

    if (selected_size && quantity > 0) {
        var cart_item = {
            name: current_product.name,
            size: selected_size.id == "regular_size" ? "Regular" : "Large",
            price: parseFloat(selected_size.value),
            quantity: parseInt(quantity)
        };

        shopping_cart.push(cart_item);
        update_cart();

        var confirmDialog = confirm("Successfully added to cart! Do you want to view your shopping cart?");

        if (confirmDialog) {
            toggle_remove();
            popup_cart();
        }

        selected_size.checked = false;
        document.getElementById("quantity").value = 0;
        document.getElementById("selected_price").innerHTML = null;

    } else {
        alert("Enter a valid quantity!!");
    }
}


function update_cart() {
    var item_list = document.getElementById('item_list');
    var total_price = document.getElementById('total_price');
    item_list.innerHTML = '';
    var total = 0;

    for (var p = 0; p < shopping_cart.length; p ++) {
        var item = shopping_cart[p];

        var row = document.createElement('tr');

        var name_cell = document.createElement('td');
        name_cell.textContent = item.name;
        row.appendChild(name_cell);

        var quantity_cell = document.createElement('td');
        quantity_cell.textContent = item.quantity + 'X';
        row.appendChild(quantity_cell);

        var size_cell = document.createElement('td');
        size_cell.textContent = item.size + ': ';
        row.appendChild(size_cell);

        var price_cell = document.createElement('td');
        price_cell.textContent = '₱' + (item.price * item.quantity).toFixed(2);
        row.appendChild(price_cell);

        var delete_button = document.createElement('td');
        var delete_icon = document.createElement('span');
        delete_icon.className = 'delete_icon fas fa-trash';
        delete_icon.setAttribute('onclick', 'delete_item('  +p + ')');
        delete_button.appendChild(delete_icon);
        row.appendChild(delete_button);

        item_list.appendChild(row);

        total += item.price *  item.quantity;
    }

    total_price.textContent = ' ₱ ' + total.toFixed(2);
}

function delete_item(index) {
    shopping_cart.splice(index, 1);
    update_cart();
}