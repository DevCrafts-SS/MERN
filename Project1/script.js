let obj = [
    {
        Category: "Snacks",
        title: "Trail Mix",
        content: "A mix of nuts, dried fruits, and chocolate chips. Perfect for a quick energy boost!",
    },
    {
        Category: "Lunch",
        title: "Caesar Salad",
        content: "Fresh romaine lettuce tossed with Caesar dressing, croutons, and shaved Parmesan cheese. A classic and satisfying lunch option."
    },
    {
        Category: "Dinner",
        title: "Vegetarian Pizza",
        content: "A delicious pizza topped with fresh vegetables like bell peppers, mushrooms, onions, and olives. Perfect for a meatless dinner option."
    },
    {
        Category: "Breakfast",
        title: "Smoothie Bowl",
        content: "A thick and creamy smoothie topped with granola, fresh fruits, and a drizzle of honey. A nutritious and delicious breakfast choice."
    },
    {
        Category: "Snacks",
        title: "Greek Yogurt",
        content: "Creamy Greek yogurt served with a drizzle of honey and a handful of fresh berries. A healthy and satisfying snack."
    },
    {
        Category: "Lunch",
        title: "Avocado Toast",
        content: "Whole grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of sea salt and black pepper. A simple yet delicious lunch option."
    },
    {
        Category: "Dinner",
        title: "Teriyaki Chicken Fry",
        content: "Tender chicken pieces stir-fried with colorful vegetables and coated in a sweet and savory teriyaki sauce. Serve over rice for a flavorful dinner."
    },
    {
        Category: "Breakfast",
        title: "Oatmeal with Berries",
        content: "Warm oatmeal topped with fresh berries, sliced almonds, and a drizzle of maple syrup. A hearty and nutritious breakfast choice."
    },
    {
        Category: "Snacks",
        title: "Veggie Sushi Rolls",
        content: "Homemade sushi rolls filled with colorful vegetables like cucumber, avocado, and carrot. A fun and healthy snack option."
    },
    {
        Category: "Lunch",
        title: "Quinoa Salad",
        content: "Nutty quinoa tossed with chopped vegetables, feta cheese, and a zesty lemon vinaigrette. A satisfying and protein-packed lunch."
    },
    {
        Category: "Dinner",
        title: "Beef Stir-Fry",
        content: "Tender slices of beef stir-fried with crisp broccoli florets and a flavorful sauce. Serve over rice or noodles for a delicious dinner."
    },
    {
        Category: "Snacks",
        title: "Homemade Granola",
        content: "Chewy granola bars packed with oats, nuts, seeds, and dried fruits. A perfect on-the-go snack for any time of day."
    }
];

let products = document.querySelector("main");

allproduct();

function allproduct() {
    products.innerHTML ="";
    obj.map((item) => {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
        <span>${item.Category}</span>
        <img src=""/>
        <h1 class="title">${item.title}</h1>
        <p>${item.content}</p>`;
        products.appendChild(container);
    })
}

document.getElementById('BreakFast').addEventListener('click', function (){
    products.innerHTML = "";
    obj.map((item) => {
        if (item.Category == "Breakfast") {
            const container = document.createElement('div');
            container.classList.add('container');
            container.innerHTML = `
        <span>${item.Category}</span>
        <img src=""/>
        <h1 class="title">${item.title}</h1>
        <p>${item.content}</p>`;
            products.appendChild(container);
        }
    })
});

document.getElementById('Lunch').addEventListener('click', function (){
    products.innerHTML = "";
    obj.map((item) => {
        if (item.Category == "Lunch") {
            const container = document.createElement('div');
            container.classList.add('container');
            container.innerHTML = `
        <span>${item.Category}</span>
        <img src=""/>
        <h1 class="title">${item.title}</h1>
        <p>${item.content}</p>`;
            products.appendChild(container);
        }
    })
});

document.getElementById('Snacks').addEventListener('click', function (){
    products.innerHTML = "";
    obj.map((item) => {
        if (item.Category == "Snacks") {
            const container = document.createElement('div');
            container.classList.add('container');
            container.innerHTML = `
        <span>${item.Category}</span>
        <img src=""/>
        <h1 class="title">${item.title}</h1>
        <p>${item.content}</p>`;
            products.appendChild(container);
        }
    })
});

document.getElementById('Dinner').addEventListener('click', function (){
    products.innerHTML = "";
    obj.map((item) => {
        if (item.Category == "Dinner") {
            const container = document.createElement('div');
            container.classList.add('container');
            container.innerHTML = `
        <span>${item.Category}</span>
        <img src=""/>
        <h1 class="title">${item.title}</h1>
        <p>${item.content}</p>`;
            products.appendChild(container);
        }
    })
});
