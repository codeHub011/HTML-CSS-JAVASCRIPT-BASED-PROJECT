document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelector("button");
    orderButton.addEventListener("click", () => {
        alert("Thank you for your order! We’ll get back to you soon.");
    });

    const menuLinks = document.querySelectorAll("#table12");
    menuLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.fontWeight = "bold";
        });
        link.addEventListener("mouseout", () => {
            link.style.fontWeight = "normal";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const selectedItems = [];

    // Get all menu items from your table
    const menuItems = document.querySelectorAll("#tbody td");

    // Add click event to each menu item
    menuItems.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            const itemName = item.textContent.trim();

            // Toggle selection
            if (selectedItems.includes(itemName)) {
                // remove if already selected
                selectedItems.splice(selectedItems.indexOf(itemName), 1);
                item.style.background = ""; // reset style
            } else {
                selectedItems.push(itemName);
                item.style.background = "#ff6b6b";
                item.style.color = "#fff";
            }
        });
    });

    // Handle order button
    const orderButton = document.querySelector("button");
    orderButton.addEventListener("click", () => {
        if (selectedItems.length === 0) {
            alert("Please select at least one item from the menu.");
            return;
        }

        let orderSummary = "You have ordered:\n";
        selectedItems.forEach((item, index) => {
            orderSummary += `${index + 1}. ${item}\n`;
        });
        orderSummary += "\nThank you for your order!";

        alert(orderSummary);

        // Optional: clear selections
        selectedItems.length = 0;
        menuItems.forEach(item => {
            item.style.background = "";
            item.style.color = "";
        });
    });
});
